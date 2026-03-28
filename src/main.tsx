import { render } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import widgetCss from './widget.css?inline'
import { ClerkWidgetClient, ChatMessage } from './api/client'

type ClerkChatInitOptions = {
  publicKey: string
  baseUrl?: string
}

type ClerkChatApi = {
  init: (options: ClerkChatInitOptions) => void
}

type MountState = {
  host: HTMLDivElement
  mountPoint: HTMLDivElement
  styleEl: HTMLStyleElement
}

const ROOT_ID = 'clerk-chat-widget-root'
let mountState: MountState | null = null

function ChatWidget({ publicKey, baseUrl }: ClerkChatInitOptions) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [client, setClient] = useState<ClerkWidgetClient | null>(null)

  useEffect(() => {
    const newClient = new ClerkWidgetClient(publicKey, baseUrl);
    setClient(newClient);

    // Initialize session when widget is first opened
    newClient.initSession()
      .then((res) => setMessages(res.messages || []))
      .catch((err) => console.error('Failed to init ClerkChat widget session:', err));

    // Subscribe to realtime messages
    const unsubscribe = newClient.onMessage((msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => unsubscribe();
  }, [publicKey, baseUrl]);

  const handleSend = async (e: Event) => {
    e.preventDefault();
    if (!inputValue.trim() || !client) return;

    const tmpMsg: ChatMessage = {
      id: Math.random().toString(36),
      body: inputValue,
      sender: 'contact',
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tmpMsg]);
    setInputValue('');

    try {
      await client.sendMessage(tmpMsg.body);
    } catch (err) {
      console.error('Failed to send message', err);
    }
  };

  return (
    <div class="fixed bottom-6 right-6 z-[2147483647] font-sans text-slate-900">
      {isOpen && (
        <div class="mb-3 flex flex-col h-[420px] w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div class="flex items-center justify-between bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
            <span>Clerk Chat</span>
            <button
              type="button"
              class="rounded-md px-2 py-1 text-xs font-medium text-slate-200 transition hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
          
          <div class="flex-1 flex flex-col gap-3 overflow-y-auto bg-slate-50 p-4">
            {messages.length === 0 ? (
              <p class="text-sm text-slate-500 text-center mt-4">Connecting...</p>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id} 
                  class={`p-3 text-sm rounded-xl max-w-[85%] ${
                    msg.sender === 'contact' 
                      ? 'bg-slate-900 text-white self-end rounded-tr-sm' 
                      : 'bg-white text-slate-700 shadow-sm self-start rounded-tl-sm'
                  }`}
                >
                  {msg.body}
                </div>
              ))
            )}
          </div>

          <form class="border-t border-slate-200 bg-white p-3 flex gap-2" onSubmit={handleSend}>
            <input
              type="text"
              class="flex-1 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-slate-500 focus:bg-white"
              placeholder="Type your message..."
              value={inputValue}
              onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-slate-800"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label="Toggle chat widget"
      >
        Chat
      </button>
    </div>
  )
}

function mount(options: ClerkChatInitOptions) {
  if (!options?.publicKey) {
    throw new Error('ClerkChat.init requires a publicKey')
  }

  if (!mountState) {
    const host = document.createElement('div')
    host.id = ROOT_ID

    const shadowRoot = host.attachShadow({ mode: 'open' })
    const styleEl = document.createElement('style')
    styleEl.textContent = widgetCss

    const mountPoint = document.createElement('div')
    shadowRoot.append(styleEl, mountPoint)
    document.body.appendChild(host)

    mountState = { host, mountPoint, styleEl }
  }

  if (mountState.styleEl.textContent !== widgetCss) {
    mountState.styleEl.textContent = widgetCss
  }

  render(<ChatWidget publicKey={options.publicKey} baseUrl={options.baseUrl} />, mountState.mountPoint)
}

export function init(options: ClerkChatInitOptions) {
  mount(options)
}

const ClerkChat: ClerkChatApi = {
  init,
}

declare global {
  interface Window {
    ClerkChat?: ClerkChatApi
  }
}

if (typeof window !== 'undefined') {
  window.ClerkChat = ClerkChat

  // Auto-init for local dev viewing
  if (import.meta.env.DEV) {
    // We'll init automatically on localhost:5173
    window.ClerkChat.init({ 
      publicKey: 'YOUR_TEST_WIDGET_KEY_HERE', // Replace with a local widgetId
      baseUrl: 'http://localhost:3000/v1/widget'
    })
  }
}

export default ClerkChat
