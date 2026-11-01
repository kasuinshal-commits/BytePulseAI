import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, ArrowRight, Mail, Calculator, CheckCircle2, Minimize2, RotateCcw, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../../data/bytePulseData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  action?: {
    label: string;
    type: 'scroll' | 'mail';
    target: string;
  };
  time: string;
}

export const BytePulseCopilot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialWelcomeMessage: Message = {
    id: 'welcome-1',
    sender: 'bot',
    text: "👋 Hi! I'm BytePulseAI. Ask me anything about our custom web apps, native Android development (Kotlin), Indian market pricing in ₹, or AI & LLM integration.",
    time: 'Just now'
  };

  const [messages, setMessages] = useState<Message[]>([initialWelcomeMessage]);

  const quickPrompts = [
    { label: "💰 What is the cost for an MVP?", query: "What is the cost for an MVP?" },
    { label: "📱 Do you build native Android apps?", query: "Do you build native Android apps?" },
    { label: "🤖 Can you integrate RAG & AI agents?", query: "Can you integrate RAG & AI agents?" },
    { label: "⚖️ BytePulseAI vs Traditional Agencies?", query: "Why choose BytePulseAI over traditional agencies?" },
    { label: "🔒 Who owns the code and IP?", query: "Who owns the code and IP?" },
    { label: "⚡ How fast can we kickoff?", query: "How fast can we kickoff?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      // Autofocus input on desktop
      if (window.innerWidth > 640) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [isOpen, messages, isTyping]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Conversation reset! 🚀 Feel free to ask about our tech stack, pricing calculator, or project roadmaps.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Robust Intent & Natural Language Matcher
  const getAIResponse = (query: string): { text: string; action?: Message['action'] } => {
    const q = query.toLowerCase();

    // 1. Gratitude & Pleasantries
    if (/\b(thanks|thank you|thx|appreciate|awesome|perfect|great|cool|nice)\b/.test(q)) {
      return {
        text: "You're very welcome! We're here to help you turn your product ideas into high-performance digital experiences. Whenever you're ready to share your scope, drop us an email or run the cost calculator!",
        action: {
          label: "Email bytepulseai@outlook.com",
          type: 'mail',
          target: `mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry%20-%20BytePulseAI`
        }
      };
    }

    // 2. Greetings
    if (/\b(hi|hello|hey|good morning|good evening|good afternoon|namaste|who are you|what can you do)\b/.test(q) && q.length < 40) {
      return {
        text: "Hello! I am BytePulseAI. I can guide you through our Web development (React 19, Next.js 15), Native Android (Kotlin & Jetpack Compose 120 FPS), Indian pricing in ₹, and custom AI integrations.",
        action: {
          label: "Try Project Cost Calculator",
          type: 'scroll',
          target: 'estimator'
        }
      };
    }

    // 3. Pricing / Cost / Rates in Rupee
    if (/\b(cost|price|pricing|budget|rupee|inr|₹|how much|rate|quote|estimate|cheap|affordable|discount)\b/.test(q)) {
      return {
        text: "Our pricing is transparent and calibrated for the Indian market! Custom Web MVPs start at ₹14,400, Native Android apps at ₹19,200, and full-stack Web + Android suites start at ₹31,200. We follow a 3-stage milestone escrow model (30% kickoff / 40% beta staging / 30% launch) with 0 hidden fees.",
        action: {
          label: "Launch Interactive Cost Calculator",
          type: 'scroll',
          target: 'estimator'
        }
      };
    }

    // 4. iOS / Cross-Platform / Flutter
    if (/\b(ios|iphone|apple|flutter|cross platform|hybrid|react native)\b/.test(q)) {
      return {
        text: "Yes! While our mobile specialty is native Android with Kotlin & Jetpack Compose (120 FPS), we build high-performance cross-platform Flutter applications when simultaneous iOS and Android launch is required under a unified codebase.",
        action: {
          label: "Explore Mobile Capabilities",
          type: 'scroll',
          target: 'services'
        }
      };
    }

    // 5. Native Android / Kotlin
    if (/\b(android|kotlin|jetpack|compose|apk|play store|mobile)\b/.test(q)) {
      return {
        text: "Our native Android engineering is top-tier: we build with modern idiomatic Kotlin, Jetpack Compose Material 3, Coroutines & Flow for reactive state, Room DB for seamless offline caching, and on-device TFLite models. We guarantee 60-120 FPS fluid frames and 99.98% crash-free sessions.",
        action: {
          label: "View Native Android Services",
          type: 'scroll',
          target: 'services'
        }
      };
    }

    // 6. AI, RAG, LLM, Chatbots & Automation
    if (/\b(ai|llm|rag|chatbot|copilot|gpt|claude|agent|agents|vector|embeddings|pinecone|pgvector|automation|workflow|speech|vision)\b/.test(q)) {
      return {
        text: "We build enterprise-grade AI modules: custom domain copilots, private Retrieval-Augmented Generation (RAG) indexing your documents with sub-40ms semantic lookup (Pinecone / Pgvector), and autonomous LLM agents that automate complex tabular and customer workflows.",
        action: {
          label: "View AI Integration Details",
          type: 'scroll',
          target: 'services'
        }
      };
    }

    // 7. Services & Offerings
    if (/\b(services|offerings|what do you do|what do you offer|capabilities|what can you build)\b/.test(q)) {
      return {
        text: "Our core engineering capabilities include: 1. Custom Web Applications (React 19, Next.js 15, PWAs), 2. Native Android Development (Kotlin Jetpack Compose 120 FPS), 3. AI & Automation (Custom Copilots, Vector RAG), and 4. UI/UX & Digital Strategy. Every project is built for high speed and scale.",
        action: {
          label: "View All 4 Core Services",
          type: 'scroll',
          target: 'services'
        }
      };
    }

    // 8. E-Commerce & Web Platforms
    if (/\b(ecommerce|e-commerce|store|shop|marketplace|shopping cart|shopify)\b/.test(q)) {
      return {
        text: "We build custom, lightning-fast E-commerce & marketplace platforms with sub-second load times, instant Razorpay/UPI/Stripe checkouts, real-time inventory management, and conversion-focused UI/UX.",
        action: {
          label: "Explore Custom Web Development",
          type: 'scroll',
          target: 'services'
        }
      };
    }

    // 9. Payment Terms / Indian Gateways (UPI, Razorpay, Bank Transfer)
    if (/\b(payment|pay|milestone|upi|razorpay|stripe|bank transfer|terms|advance|installments)\b/.test(q)) {
      return {
        text: "We operate on transparent milestone deliverables: 30% on project kickoff, 40% upon beta staging approval, and 30% on final production deployment. We accept payments via UPI, NEFT/IMPS Bank Transfer, Razorpay, and Stripe with fixed milestone quotes in ₹.",
        action: {
          label: "Check Fixed Price Tiers",
          type: 'scroll',
          target: 'estimator'
        }
      };
    }

    // 10. Location & Remote Operations
    if (/\b(where.*located|where.*office|where.*based|headquarters|office location|remote.*work)\b/.test(q) || (/location\b/.test(q) && !/cost|price/.test(q))) {
      return {
        text: "BytePulseAI operates as a modern distributed engineering agency with innovation hubs in San Francisco and distributed engineering pods serving clients across India and globally. We collaborate seamlessly via dedicated Slack channels, daily async Loom updates, and private GitHub repos.",
        action: {
          label: "Contact Our Engineering Team",
          type: 'mail',
          target: `mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry`
        }
      };
    }

    // 11. Tech Stack & Web Architecture
    if (/\b(tech stack|stack|technologies|react|next\.?js|tailwind|fastapi|node|backend|frontend|database|postgres|full stack|web app)\b/.test(q)) {
      return {
        text: "Our core stack is battle-tested for speed and zero technical debt: Frontend uses React 19 & Next.js 15 App Router with Tailwind CSS v4; Mobile uses Kotlin Jetpack Compose & Flutter; Backend uses Python FastAPI and Node.js TypeScript with PostgreSQL, Redis, and Docker CI/CD.",
        action: {
          label: "Browse Full Tech Stack",
          type: 'scroll',
          target: 'services'
        }
      };
    }

    // 12. IP Ownership, NDA & GitHub
    if (/\b(nda|ip|intellectual property|ownership|own the code|github|gitlab|source code|confidential|privacy)\b/.test(q)) {
      return {
        text: "You retain 100% full Intellectual Property (IP) ownership from day one. All source code, Figma design systems, database schemas, and trained AI models are pushed directly to your private GitHub or GitLab repository. We sign bilateral NDAs before kickoff.",
        action: {
          label: "Request NDA & Project Scope",
          type: 'mail',
          target: `mailto:${COMPANY_INFO.email}?subject=NDA%20and%20Project%20Scope%20Request`
        }
      };
    }

    // 13. Portfolio / Past Work / Case Studies
    if (/\b(portfolio|past work|case study|case studies|examples|projects|work.*done|work.*before|samples|omnipulse|neuralflow|hyperlogix|previous work|showcase)\b/.test(q)) {
      return {
        text: "Explore our showcased work! Examples include OmniPulse AI (remote diagnostics Android app with 240k+ downloads), NeuralFlow (Next.js B2B automation scaling to ₹15 Cr ARR), and HyperLogix (dispatch dashboard with 12,500 active fleet vehicles).",
        action: {
          label: "View Featured Case Studies",
          type: 'scroll',
          target: 'portfolio'
        }
      };
    }

    // 14. Comparison: BytePulse vs Agencies vs Freelancers
    if (/\b(why|compare|comparison|freelancer|traditional|agency vs|difference|better)\b/.test(q)) {
      return {
        text: "Unlike traditional agencies that take 3–6 months with bloated retainers, or freelancers with ghosting risks, BytePulseAI delivers rapid 2–6 week agile sprints with modern React 19/Kotlin 120 FPS code, 100% client IP ownership, and milestone pricing in ₹.",
        action: {
          label: "View Detailed Comparison Table",
          type: 'scroll',
          target: 'why-us'
        }
      };
    }

    // 12. Timeline & Sprint Turnaround
    if (/\b(fast|how long|timeline|duration|sprint|weeks|kickoff|when can we start|delivery)\b/.test(q)) {
      return {
        text: "We can initiate technical discovery within 48 hours. Typical MVPs are deployed in 2–4 weeks; comprehensive platforms take 4–8 weeks. You receive bi-weekly staging builds and continuous sprint updates.",
        action: {
          label: "Review 4-Step Process",
          type: 'scroll',
          target: 'process'
        }
      };
    }

    // 13. Contact & Hiring
    if (/\b(contact|email|hire|inquiry|touch|reach|proposal|message|write)\b/.test(q)) {
      return {
        text: `You can reach our engineering team directly at ${COMPANY_INFO.email}. Send over your requirements, PRD, or wireframes and receive an architectural scope and fixed quote within 24 hours!`,
        action: {
          label: "Email bytepulseai@outlook.com",
          type: 'mail',
          target: `mailto:${COMPANY_INFO.email}?subject=Project%20Proposal%20Inquiry`
        }
      };
    }

    // 14. Fallback intelligent response
    return {
      text: "BytePulseAI specializes in custom Web applications (React 19 / Next.js 15), Native Android apps (Kotlin Jetpack Compose), and custom AI/LLM automation. Would you like a price estimate in ₹, or would you like to email our architects directly?",
      action: {
        label: "Open Project Cost Calculator",
        type: 'scroll',
        target: 'estimator'
      }
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(query);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        action: response.action,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    if (action.type === 'scroll') {
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Keep window open on large screens, minimize on mobile
        if (window.innerWidth < 640) {
          setIsOpen(false);
        }
      }
    } else if (action.type === 'mail') {
      window.location.href = action.target;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <div className="relative group pointer-events-auto">
          {/* Subtle Teaser Pill when closed - desktop only to protect mobile layout */}
          {hasUnread && (
            <div className="absolute -top-10 right-0 whitespace-nowrap bg-[#0F172A] border border-[#00F2FE]/40 text-white text-[11px] px-3 py-1 rounded-full shadow-lg shadow-black/50 animate-bounce hidden sm:flex items-center gap-1.5 pointer-events-none">
              <Sparkles className="w-3 h-3 text-[#00F2FE]" />
              <span>Ask BytePulseAI about your project</span>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] text-[#0B0F19] p-3 sm:px-4 sm:py-3 rounded-full font-bold shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] hover:scale-105 transition-all cursor-pointer group"
            aria-label="Open BytePulseAI"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-[#0B0F19]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0B0F19] animate-pulse" />
            </div>
            <span className="text-xs hidden sm:inline tracking-tight font-extrabold">
              BytePulseAI
            </span>
          </button>
        </div>
      )}

      {/* Expanded Copilot Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-32px)] sm:w-[380px] md:w-[400px] h-[520px] max-h-[82vh] bg-[#0F172A] border border-[#00F2FE]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 pointer-events-auto">
          
          {/* Chat Window Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#161F30] to-[#0F172A] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#00F2FE]/40 flex items-center justify-center p-0.5 overflow-hidden">
                <img src="/logo-mark.png" alt="BytePulse AI" className="w-full h-full object-cover rounded" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  BytePulseAI
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    ONLINE
                  </span>
                </div>
                <div className="text-[10px] text-gray-400">
                  Engineering, Architecture & Pricing
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Reset conversation"
                aria-label="Reset chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Minimize BytePulseAI"
                aria-label="Minimize BytePulseAI"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Close BytePulseAI"
                aria-label="Close BytePulseAI"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#00F2FE] to-[#0284C7] text-[#0B0F19] font-semibold rounded-tr-none shadow-md'
                      : 'bg-[#161F30] border border-white/10 text-gray-200 rounded-tl-none shadow-lg'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Action Trigger in message */}
                  {msg.action && (
                    <button
                      onClick={() => handleActionClick(msg.action)}
                      className="mt-2.5 w-full py-2 px-3 bg-[#00F2FE]/15 hover:bg-[#00F2FE]/25 border border-[#00F2FE]/40 text-[#00F2FE] text-[11px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:shadow-md"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <span className="text-[9px] text-gray-500 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#161F30] border border-white/10 p-2.5 rounded-xl w-16 text-gray-400">
                <span className="w-1.5 h-1.5 bg-[#00F2FE] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#00F2FE] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#00F2FE] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompt Pills */}
          <div className="px-3 py-2 border-t border-white/5 bg-[#0B0F19]/60 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                disabled={isTyping}
                onClick={() => handleSendMessage(qp.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] bg-white/5 hover:bg-[#00F2FE]/15 border border-white/10 hover:border-[#00F2FE]/30 text-gray-300 hover:text-white transition-all shrink-0 cursor-pointer disabled:opacity-50"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-[#0B0F19] border-t border-white/10 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask anything about web, Android, pricing..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-[#161F30] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F2FE]"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2 rounded-xl btn-primary-glow text-[#0B0F19] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
