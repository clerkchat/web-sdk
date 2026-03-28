const DEFAULT_BASE_URL = 'https://api.clerk.chat/v1/widget';

export type ChatMessage = {
  id: string;
  body: string;
  sender: 'contact' | 'agent' | 'bot';
  createdAt: string;
};

export type SessionInitResponse = {
  token: string;
  contactId: string;
  teamId: string;
  messages: ChatMessage[];
  welcomeMessage?: string;
};

export class ClerkWidgetClient {
  private publicKey: string;
  private baseUrl: string;
  private token: string | null = null;
  private listeners: Set<(msg: ChatMessage) => void> = new Set();
  
  constructor(publicKey: string, baseUrl: string = DEFAULT_BASE_URL) {
    this.publicKey = publicKey;
    this.baseUrl = baseUrl;
  }

  async initSession(identity?: { id: string; signature?: string }): Promise<SessionInitResponse> {
    const response = await fetch(`${this.baseUrl}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-widget-key': this.publicKey,
      },
      body: JSON.stringify({ identity }),
    });

    if (!response.ok) {
      throw new Error(`Failed to init session: ${response.statusText}`);
    }

    const data = await response.json();
    this.token = data.token;
    
    this.connectRealtime();
    
    return data as SessionInitResponse;
  }

  async sendMessage(body: string): Promise<ChatMessage> {
    if (!this.token) throw new Error('Session not initialized');

    const response = await fetch(`${this.baseUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ body }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    return response.json();
  }

  private connectRealtime() {
    if (!this.token) return;
    
    const sseUrl = `${this.baseUrl}/stream?token=${this.token}`;
    const eventSource = new EventSource(sseUrl);

    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.type === 'message.created') {
          this.notifyListeners(payload.data as ChatMessage);
        }
      } catch (err) {
        console.error('Failed to parse realtime message', err);
      }
    };

    eventSource.onerror = (err) => {
      console.error('SSE Error:', err);
      eventSource.close();
      setTimeout(() => this.connectRealtime(), 5000);
    };
  }

  onMessage(callback: (msg: ChatMessage) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback); 
  }

  private notifyListeners(msg: ChatMessage) {
    this.listeners.forEach((listener) => listener(msg));
  }
}
