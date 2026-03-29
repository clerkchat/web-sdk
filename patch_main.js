const fs = require('fs');

const svgChat = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`;
const svgX = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const svgSend = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
const svgBot = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`;

const newRender = `
  return (
    <div class="fixed bottom-6 right-6 z-[2147483647] font-sans text-slate-900 antialiased" style={{ colorScheme: 'light' }}>
      {isOpen && (
        <div class="mb-4 flex flex-col h-[520px] w-[360px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-out transform origin-bottom-right">
          
          <div class="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
            <div class="flex items-center gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                ${svgBot}
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-slate-900 tracking-tight">Clerk Chat</span>
                <span class="text-xs font-medium text-emerald-500">We typically reply in minutes</span>
              </div>
            </div>
            <button
              type="button"
              class="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ${svgX}
            </button>
          </div>
          
          <div class="flex-1 flex flex-col gap-4 overflow-y-auto bg-slate-50/50 p-5">
            {messages.length === 0 ? (
              <div class="flex h-full flex-col items-center justify-center text-center opacity-70">
                <div class="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                <p class="text-sm text-slate-500 mt-4">Connecting to team...</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id} 
                  class={\`flex flex-col max-w-[85%] \${msg.sender === 'contact' ? 'self-end' : 'self-start'}\`}
                >
                  <div 
                    class={\`px-4 py-2.5 text-[15px] leading-relaxed \${
                      msg.sender === 'contact' 
                        ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm shadow-sm' 
                        : 'bg-white border border-slate-200 text-slate-800 shadow-sm rounded-2xl rounded-tl-sm'
                    }\`}
                  >
                    {msg.body}
                  </div>
                  <span class={\`text-[10px] mt-1 text-slate-400 \${msg.sender === 'contact' ? 'self-end' : 'self-start'}\`}>
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))
            )}
          </div>

          <div class="bg-white p-4 pt-2">
            <form 
              class="relative flex items-center overflow-hidden rounded-full border border-slate-200 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 shadow-sm transition-shadow"
              onSubmit={handleSend}
            >
              <input
                type="text"
                class="w-full bg-transparent px-5 py-3.5 text-[15px] outline-none placeholder:text-slate-400"
                placeholder="Ask us anything..."
                value={inputValue}
                onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                class="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400"
              >
                ${svgSend}
              </button>
            </form>
          </div>

          <div class="bg-white pb-3 text-center">
            <a href="https://clerk.chat" target="_blank" rel="noopener noreferrer" class="text-[10px] font-medium text-slate-400 hover:text-slate-600 transition-colors">
              Powered by Clerk Chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        class={\`flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-blue-700 \${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100 relative'}\`}
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open chat widget"
      >
        ${svgChat}
      </button>
    </div>
  )
`;

let content = fs.readFileSync('/Users/alicegem/.openclaw/workspace/clerkchat/web-sdk/src/main.tsx', 'utf8');
content = content.replace(/return \([\s\S]*?\n  \)/, newRender);
fs.writeFileSync('/Users/alicegem/.openclaw/workspace/clerkchat/web-sdk/src/main.tsx', content);

