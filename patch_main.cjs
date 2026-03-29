const fs = require('fs');

const file = '/Users/alicegem/.openclaw/workspace/clerkchat/web-sdk/src/main.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `
  return (
    <div class="fixed bottom-6 right-6 z-[2147483647] font-sans text-slate-900 antialiased pointer-events-none" style={{ colorScheme: 'light' }}>
      {isOpen && (
        <div class="mb-4 flex flex-col h-[560px] w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-out origin-bottom-right pointer-events-auto">
          
          <div class="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 shrink-0 shadow-sm z-10 relative">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[15px] font-semibold text-slate-900 tracking-tight leading-none mb-0.5">Clerk Chat</span>
                <span class="text-xs font-medium text-emerald-500 leading-none">We typically reply in minutes</span>
              </div>
            </div>
            <button
              type="button"
              class="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <div class="flex-1 flex flex-col gap-4 overflow-y-auto bg-slate-50 p-5 scroll-smooth">
            {messages.length === 0 ? (
              <div class="flex h-full flex-col items-center justify-center text-center opacity-80 mt-[-20px]">
                <div class="h-8 w-8 animate-spin rounded-full border-[3px] border-slate-900 border-t-transparent mb-4"></div>
                <span class="text-sm font-medium text-slate-600">Connecting to team...</span>
              </div>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id} 
                  class={\`flex flex-col max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300 \${msg.sender === 'contact' ? 'self-end items-end' : 'self-start items-start'}\`}
                >
                  <div 
                    class={\`px-4 py-[10px] text-[15px] leading-relaxed \${
                      msg.sender === 'contact' 
                        ? 'bg-slate-900 text-white rounded-[20px] rounded-br-[4px] shadow-sm' 
                        : 'bg-white border border-slate-200 text-slate-800 shadow-sm rounded-[20px] rounded-bl-[4px]'
                    }\`}
                  >
                    {msg.body}
                  </div>
                  <span class="text-[10px] mt-1.5 text-slate-400 px-1 font-medium">
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))
            )}
          </div>

          <div class="bg-white p-4 pt-3 shrink-0">
            <form 
              class="relative flex items-center overflow-hidden rounded-[24px] border border-slate-200 bg-white focus-within:border-slate-900 focus-within:ring-1 focus-within:ring-slate-900 shadow-sm transition-all"
              onSubmit={handleSend}
            >
              <input
                type="text"
                class="w-full bg-transparent px-5 py-[14px] text-[15px] outline-none placeholder:text-slate-400 placeholder:font-normal font-medium"
                placeholder="Ask us anything..."
                value={inputValue}
                onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                class="absolute right-1.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="ml-0.5"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>

          <div class="bg-white pb-3 pt-0 text-center shrink-0">
            <a href="https://clerk.chat" target="_blank" rel="noopener noreferrer" class="text-[11px] font-semibold tracking-wide text-slate-400 hover:text-slate-600 transition-colors uppercase">
              Powered by Clerk Chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        class={\`flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition-all duration-300 pointer-events-auto hover:scale-110 hover:bg-slate-800 hover:shadow-2xl \${isOpen ? 'rotate-90 scale-0 opacity-0 absolute right-0 bottom-0' : 'rotate-0 scale-100 opacity-100 relative'}\`}
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open chat widget"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </button>
    </div>
  )
`;

content = content.replace(/return \([\s\S]*?\n  \)/, replacement.trim());
fs.writeFileSync(file, content);
