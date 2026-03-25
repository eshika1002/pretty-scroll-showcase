import { useState, useRef, useEffect } from "react";

const replies: Record<string, string> = {
  hi: "Hello! I'm Lara 💄 How can I help you?",
  hello: "Hey there! 💕 Looking for something special today?",
  hey: "Hi! Welcome to Bloom Beauty! How can I assist you?",
  lipstick: "We have amazing shades available! Check our Try-On section 💋",
  serum: "Our Glow Serum with Vitamin C is a bestseller! ✨",
  cream: "The Silk Cream with hyaluronic acid is perfect for hydration 🧴",
  price: "Prices start from ₹499. Check out our Products section!",
  product: "We offer lipsticks, serums, and creams. Scroll up to see them all!",
  thanks: "You're welcome! 💕 Happy to help!",
  bye: "Goodbye! Come back soon 💕",
};

function getReply(msg: string): string {
  const lower = msg.toLowerCase().trim();
  for (const [key, val] of Object.entries(replies)) {
    if (lower.includes(key)) return val;
  }
  return "I'd love to help! Try asking about our lipsticks, serums, or pricing 💕";
}

interface Message {
  from: "user" | "lara";
  text: string;
}

const LaraChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "lara", text: "Hi! I'm Lara 💕 How can I help you find the perfect product?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { from: "user", text };
    const laraMsg: Message = { from: "lara", text: getReply(text) };
    setMessages((prev) => [...prev, userMsg, laraMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[28rem] bg-card border border-border rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-primary text-primary-foreground px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">L</div>
            <span className="font-body text-sm tracking-wide">Lara — Beauty Assistant</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-4 py-3 rounded-xl text-sm max-w-[80%] ${
                  m.from === "lara"
                    ? "bg-muted rounded-tl-none text-foreground"
                    : "bg-primary/10 rounded-tr-none text-foreground ml-auto"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-border px-3 py-3 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              onClick={send}
              className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs shrink-0"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LaraChatbot;
