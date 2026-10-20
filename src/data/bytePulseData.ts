import { ServiceItem, ProcessStep, ProjectItem, TestimonialItem, TechItem, EstimatorFeature } from '../types';

export const COMPANY_INFO = {
  name: "BytePulseAI",
  tagline: "Pulsing Intelligence into Digital Experiences",
  headline: "We Build High-Performance Web & Android Apps Powered by AI.",
  subheadline: "Transforming your boldest ideas into lightning-fast web applications and native mobile experiences.",
  email: "bytepulseai@outlook.com",
  address: "Tech District Innovation Hub, San Francisco & Worldwide Remote",
  socials: {
    linkedin: "https://www.linkedin.com/in/daniel-knight-b16544445/",
    instagram: "https://www.instagram.com/bytepulse_ai/"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Custom Web Development",
    badge: "React & Next.js Ecosystem",
    description: "Enterprise-grade web applications crafted for sheer speed, SEO dominance, and effortless scale with modern React & Next.js architectures.",
    highlights: [
      "Next.js App Router & Server Components",
      "Progressive Web Apps (PWAs) with Offline Caching",
      "High-converting E-Commerce & SaaS platforms",
      "Micro-frontends & Headless CMS architectures",
      "Sub-second First Contentful Paint (FCP)"
    ],
    technologies: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js"],
    metrics: "< 0.4s FCP | 99/100 Lighthouse Score",
    iconName: "Globe"
  },
  {
    id: "android-dev",
    title: "Native Android App Development",
    badge: "Kotlin & Jetpack Compose",
    description: "Fluid, battery-optimized Android applications built with modern Kotlin and declarative UI, designed to dominate the Google Play Store.",
    highlights: [
      "Modern Jetpack Compose & Material 3 architecture",
      "Coroutines & Flow for asynchronous reactive state",
      "Hardware-accelerated animations & 120Hz smooth frames",
      "Background Workers, Geofencing & Push messaging",
      "Cross-Platform Flutter options for dual iOS/Android targets"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Flutter", "Android SDK", "Room DB", "Firebase"],
    metrics: "99.98% Crash-Free | 60-120 FPS Fluidity",
    iconName: "Smartphone"
  },
  {
    id: "ai-solutions",
    title: "AI & Automation Integration",
    badge: "LLM Agents & RAG",
    description: "Supercharge your business with autonomous AI agents, private semantic search, and custom trained models embedded directly into your stack.",
    highlights: [
      "Custom conversational agents & intelligent copilots",
      "Vector Embeddings & Retrieval-Augmented Generation (RAG)",
      "Autonomous workflow triggers & multi-tool LLM pipelines",
      "Enterprise data privacy & on-premise model deployment",
      "Real-time speech-to-text & computer vision integrations"
    ],
    technologies: ["Python", "FastAPI", "OpenAI / Claude API", "LangChain", "Pinecone", "PyTorch"],
    metrics: "10x Operational Speed | 78% Automation",
    iconName: "Cpu"
  },
  {
    id: "uiux-strategy",
    title: "UI/UX & Digital Strategy",
    badge: "Conversion-Centric Design",
    description: "Data-backed product design systems that turn casual visitors into loyal power users through human-centered ergonomics and CRO tactics.",
    highlights: [
      "Interactive Figma wireframing & rapid prototypes",
      "Micro-interactions & fluid motion choreography",
      "Conversion Rate Optimization (CRO) audits & A/B testing",
      "Comprehensive multi-brand design token systems",
      "WCAG 2.2 AA accessibility & responsive layout stress-tests"
    ],
    technologies: ["Figma", "Design Tokens", "Framer", "A/B Testing", "Hotjar", "Storybook"],
    metrics: "+42% Avg. Funnel Conversion Boost",
    iconName: "Sparkles"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "Architecture Blueprint",
    description: "We dive deep into your market dynamics, user personas, and technical requirements to design an unshakeable roadmap and system architecture.",
    deliverables: [
      "Technical Specification Document (PRD)",
      "System Architecture & Data Flow Diagram",
      "AI Viability & Cost-Benefit Analysis",
      "Sprint Milestones & Risk Mitigation Matrix"
    ],
    duration: "Week 1 - 2",
    iconName: "Compass"
  },
  {
    number: "02",
    title: "UI/UX Design & Architecture",
    subtitle: "Interactive Prototyping",
    description: "We craft interactive Figma prototypes and design token systems that marry futuristic aesthetic impact with intuitive usability.",
    deliverables: [
      "High-Fidelity Interactive Prototypes",
      "Responsive Layouts (Mobile, Tablet, Desktop)",
      "Complete Component Design System",
      "API Schema & Database Models"
    ],
    duration: "Week 2 - 4",
    iconName: "Palette"
  },
  {
    number: "03",
    title: "Development & Testing",
    subtitle: "Iterative Agile Sprints",
    description: "Our engineers build using clean code standards, continuous integration, native profiling, and automated unit/integration test suites.",
    deliverables: [
      "Bi-Weekly Interactive Staging Builds",
      "End-to-End Automated Test Coverage",
      "AI Pipeline Benchmarking & Latency Tuning",
      "Native Android Device Profiling (Memory/Battery)"
    ],
    duration: "Week 4 - 8",
    iconName: "Code2"
  },
  {
    number: "04",
    title: "Launch & Scale",
    subtitle: "Zero-Downtime Deployment",
    description: "We deploy with cloud redundancy, publish to the Google Play Store, configure live telemetry, and provide ongoing hyper-care.",
    deliverables: [
      "Google Play Store Submission & Approval",
      "Edge CDN & Cloud Infrastructure Setup",
      "Live APM Telemetry & Error Tracking",
      "Post-Launch Growth & Feature Support"
    ],
    duration: "Continuous",
    iconName: "Rocket"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "omnipulse-health",
    title: "OmniPulse AI: Remote Patient Diagnostics",
    category: "android",
    categoryLabel: "Native Android & AI",
    client: "OmniPulse Medical Ltd.",
    description: "A HIPAA-compliant native Android application integrating on-device TensorFlow Lite models for real-time cardiac arrhythmia detection from wearable telemetry.",
    metrics: [
      { label: "Play Store Downloads", value: "240K+" },
      { label: "Crash-Free Sessions", value: "99.98%" },
      { label: "Diagnostic Latency", value: "< 120ms" }
    ],
    technologies: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Bluetooth LE", "Coroutines"],
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    challenge: "Processing continuous, noisy ECG sensor streams in real-time over Bluetooth LE without draining smartphone battery or causing UI frame drops.",
    solution: "Engineered a custom hardware-accelerated C++ NDK bridge wrapped in Jetpack Compose, paired with an edge quantization model consuming only 3.2% CPU.",
    results: [
      "Awarded Google Play 'Best Innovation in Healthcare 2025'",
      "Reduced emergency response alert lag by 64%",
      "Seamless offline caching with Room DB and instant cloud sync"
    ]
  },
  {
    id: "neuralflow-saas",
    title: "NeuralFlow: Autonomous B2B Operations",
    category: "web",
    categoryLabel: "Full-Stack Web App",
    client: "NeuralFlow Inc.",
    description: "A collaborative Next.js cloud workspace empowering enterprise finance teams to build autonomous invoice workflows with multi-agent LLMs.",
    metrics: [
      { label: "Monthly Recurring Revenue", value: "₹15 Cr ARR" },
      { label: "User Interaction Latency", value: "38ms" },
      { label: "Time Saved / Workflow", value: "85%" }
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    challenge: "Handling complex live tabular workflows across thousands of concurrent enterprise analysts with sub-second responsive collaboration.",
    solution: "Architected a distributed WebSocket coordination layer with optimistic UI updates and server-rendered data grids streaming incremental updates.",
    results: [
      "Scaled to 45,000 daily active power users seamlessly",
      "Achieved 100/100 Core Web Vitals on desktop & mobile",
      "Featured on Product Hunt as #1 SaaS of the Week"
    ]
  },
  {
    id: "hyperlogix-fleet",
    title: "HyperLogix: Autonomous Dispatch Assistant",
    category: "both",
    categoryLabel: "Web & Android Ecosystem",
    client: "HyperLogix Global Freight",
    description: "A unified cross-platform logistics system: a web dispatcher command center paired with an offline-first Android driver app featuring voice AI.",
    metrics: [
      { label: "Active Fleet Vehicles", value: "12,500+" },
      { label: "Fuel Cost Reduction", value: "18.4%" },
      { label: "On-Time Delivery Rate", value: "99.4%" }
    ],
    technologies: ["React", "Kotlin", "Google Maps SDK", "WebSockets", "Node.js", "Docker"],
    featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    challenge: "Drivers operated across remote rural zones with intermittent cellular coverage while needing continuous voice navigation and instant signature capture.",
    solution: "Implemented an offline-first CQRS sync engine in Kotlin with background worker sync, paired with a React dispatcher board rendering 10k real-time vehicle vectors.",
    results: [
      "Zero lost delivery receipts across 4.2M deliveries",
      "Driver onboarding time shortened from 3 days to 45 minutes",
      "99.99% system availability during holiday peak surges"
    ]
  },
  {
    id: "synthiq-agent",
    title: "SynthiQ: Enterprise Knowledge Copilot",
    category: "ai",
    categoryLabel: "AI & Automation",
    client: "SynthiQ Capital",
    description: "A secure internal RAG copilot indexing 2.5 million corporate legal and compliance documents with instant citation verification and zero hallucination guardrails.",
    metrics: [
      { label: "Indexed Legal Docs", value: "2.5M+" },
      { label: "Search Accuracy", value: "99.6%" },
      { label: "Research Time Reduction", value: "91%" }
    ],
    technologies: ["Python", "LangChain", "Pinecone", "React", "Tailwind CSS", "OpenAI"],
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    challenge: "Enterprise legal documents contained sensitive NDA clauses that could not leak into public LLM training datasets.",
    solution: "Engineered a private VPC containerized embedding pipeline with end-to-end token encryption, strict role-based access control, and source citation highlighting.",
    results: [
      "Audited and cleared for SOC-2 Type II compliance",
      "Saved 14,000+ associate legal review hours in year one",
      "Adopted by 3 Tier-1 international law firms"
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React 19", category: "Frontend", description: "Modern reactive user interfaces with Server Actions", badgeColor: "#00F2FE", icon: "Code" },
  { name: "Next.js 15", category: "Frontend", description: "Full-stack framework with edge streaming & SSR", badgeColor: "#FFFFFF", icon: "Layers" },
  { name: "Android / Kotlin", category: "Mobile", description: "Native Android development with modern idiomatic syntax", badgeColor: "#A855F7", icon: "Smartphone" },
  { name: "Jetpack Compose", category: "Mobile", description: "Declarative UI toolkit for high-FPS native Android apps", badgeColor: "#38BDF8", icon: "Sparkles" },
  { name: "Flutter", category: "Mobile", description: "High-performance multi-platform mobile application engine", badgeColor: "#00F2FE", icon: "Smartphone" },
  { name: "Python & FastAPI", category: "AI & Backend", description: "Lightning-fast asynchronous microservices & AI APIs", badgeColor: "#38BDF8", icon: "Terminal" },
  { name: "Node.js & TypeScript", category: "AI & Backend", description: "Scalable backend services with end-to-end type safety", badgeColor: "#9B51E0", icon: "Server" },
  { name: "Firebase & Supabase", category: "AI & Backend", description: "Realtime databases, native auth & instant edge storage", badgeColor: "#F59E0B", icon: "Database" },
  { name: "Tailwind CSS v4", category: "Frontend", description: "Utility-first modern styling with zero runtime overhead", badgeColor: "#06B6D4", icon: "Palette" },
  { name: "Docker & Kubernetes", category: "DevOps & Cloud", description: "Reproducible container deployments across AWS/GCP", badgeColor: "#00F2FE", icon: "Cloud" },
  { name: "PyTorch & HuggingFace", category: "AI & Backend", description: "State-of-the-art neural network training and fine-tuning", badgeColor: "#EC4899", icon: "Cpu" },
  { name: "PostgreSQL & Redis", category: "DevOps & Cloud", description: "High-throughput ACID relational database & caching layer", badgeColor: "#9B51E0", icon: "Database" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "BytePulseAI transformed our raw concept into a blazing fast native Android app and web command portal in just 7 weeks. Their grasp of Kotlin Jetpack Compose and AI embeddings is genuinely world-class.",
    role: "Chief Technology Officer",
    company: "HealthTech Diagnostics",
    rating: 5,
    metricBadge: "240k+ Downloads"
  },
  {
    id: "test-2",
    quote: "Finding an agency that excels equally in complex Next.js full-stack development and autonomous AI workflows is rare. BytePulseAI helped us scale to ₹15 Cr ARR with zero downtime hiccups.",
    role: "Founder & CEO",
    company: "B2B AI Operations",
    rating: 5,
    metricBadge: "10x Operational Speed"
  },
  {
    id: "test-3",
    quote: "The speed and polish BytePulseAI delivered blew our board away. Our mobile drivers love the offline sync, and the web dispatcher dashboard handles 10,000 vehicles in real time with 38ms latency.",
    role: "VP of Product Engineering",
    company: "Fleet Logistics Platform",
    rating: 5,
    metricBadge: "99.4% On-Time Fleet"
  }
];

export const STATS_DATA = [
  { value: "50+", label: "Projects Delivered", detail: "Web, Android & AI platforms launched" },
  { value: "99.9%", label: "Client Satisfaction", detail: "Verified reviews on Clutch & G2" },
  { value: "2x", label: "Faster Time-to-Market", detail: "Sprint velocity powered by modular AI tooling" },
  { value: "₹45 Cr+", label: "Client Capital Raised", detail: "By startups launched with BytePulse systems" }
];

export const ESTIMATOR_FEATURES: EstimatorFeature[] = [
  { id: "ai-copilot", label: "AI Copilot / LLM Chatbot Integration", price: 15000, days: 8, category: "ai" },
  { id: "auth-rbac", label: "Custom Auth & Role-Based Access (RBAC)", price: 6000, days: 4, category: "core" },
  { id: "realtime-sync", label: "Realtime WebSockets & Live Push", price: 8500, days: 5, category: "core" },
  { id: "payments-stripe", label: "UPI, Razorpay & Card Gateway Integration", price: 7500, days: 4, category: "core" },
  { id: "admin-analytics", label: "Admin Telemetry & Analytics Dashboard", price: 9500, days: 5, category: "core" },
  { id: "offline-native", label: "Native Push Notifications & Offline Cache", price: 7000, days: 4, category: "core" },
  { id: "rag-vector", label: "Custom RAG Vector Search & Embeddings", price: 18000, days: 9, category: "ai" },
  { id: "ci-cd-devops", label: "Play Store Deployment & Cloud CI/CD", price: 6500, days: 3, category: "scale" }
];

export const FAQS = [
  {
    q: "How fast can BytePulseAI start my project?",
    a: "We maintain dedicated agile pods and can initiate kickoff discovery within 48 to 72 hours of contract execution. You get an immediate Slack/Discord channel with your dedicated lead engineer."
  },
  {
    q: "Do you build native Android apps or cross-platform Flutter/React Native?",
    a: "We specialize in high-performance native Android (Kotlin & Jetpack Compose) for mission-critical hardware, sensor, and battery efficiency. We also build cross-platform Flutter applications when dual iOS/Android parity is prioritized."
  },
  {
    q: "Who owns the Intellectual Property (IP) and code?",
    a: "You retain 100% full ownership of all source code, Figma design files, database architectures, and trained AI models from day one. Everything is pushed directly to your private GitHub/GitLab repositories."
  },
  {
    q: "Can you integrate AI into our existing legacy systems?",
    a: "Yes. Over 40% of our enterprise clients hire us to build microservice adapters, private LLM agents, and semantic search layers on top of their existing PostgreSQL, Oracle, or REST backends."
  }
];
