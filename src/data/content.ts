export const PROFILE = {
  firstName: 'jayant',
  fullName: 'Jayant Joshi',
  email: 'jjoshi221@gmail.com',
  phone: '+91 98183 00229',
  github: 'https://github.com/jayj221',
  linkedin: 'https://www.linkedin.com/in/jayantxjoshi',
  role: 'Finance Professional & Entrepreneur',
  tagline:
    'financial models that hold up under pressure, and products that don’t need a second pitch',
  about:
    'Finance professional and entrepreneur. I started investing in crypto and US equities at 16, built a water desalination prototype at 15 that an NGO bought, and topped the University of Delhi in five subjects. Now I model billion-rupee deals by day and ship the products by night. Let’s build something incredible together!',
};

/* ---------------------------------------------------------------- snapshot */

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export const METRICS: Metric[] = [
  { value: '₹440M', label: 'AUM Managed', detail: 'Anand Rathi · 2 HNI portfolios' },
  { value: '₹1.018B', label: 'Deals Modelled', detail: 'HDFC Bank · 2 buy-side txns' },
  { value: '17%', label: 'IRR Driven', detail: '+4% alpha on HNI portfolios' },
  { value: '+25%', label: 'Pricing Accuracy', detail: 'D&P Advisory · S&P Capital IQ' },
  { value: '₹200M', label: 'Cost Optimisation', detail: 'EY · Govt. of India, ZBB' },
  { value: '8+', label: 'Podium Finishes', detail: '10,000+ competitors beaten' },
];

/* --------------------------------------------------------------- expertise */

export type Service = {
  number: string;
  name: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Valuation & Deal Modelling',
    description:
      'Integrated valuation models built on WACC DCF, LBO, Precedent Transactions, GPC, PORI and GTM. PD modelling and ECL computation across multi-currency portfolios. Live deal support for billion-rupee transactions, not academic exercises.',
  },
  {
    number: '02',
    name: 'Wealth & Portfolio Strategy',
    description:
      '₹440M managed across HNI portfolios at a 17% IRR and 4% alpha. Allocation across public equities, structured products and MLDs, with downside risk and leveraged payoff scenarios modelled before anything gets committed.',
  },
  {
    number: '03',
    name: 'Strategy & Consulting',
    description:
      'Twelve Ministry of Education schemes — SAMAGRA Shiksha, TEQUIP, NIPUN Bharat — integrated into the NIOS framework for the Government of India, with an implementation roadmap and ₹200M of projected cost optimisation via zero-based budgeting.',
  },
  {
    number: '04',
    name: 'Product & Engineering',
    description:
      'Full-stack products taken end to end: Next.js and Supabase, row-level security, realtime, WebRTC voice rooms, moderation pipelines and web push. Plus developer tooling that reads git diffs and identity infrastructure for AI agents.',
  },
  {
    number: '05',
    name: 'Quant & AI Systems',
    description:
      'Multi-factor equity screeners and autonomous paper traders in Python — Minervini trend templates, CAN SLIM, VCP breakouts, PTJ risk rules. Generative-AI tooling and market-data pipelines that run on schedule without supervision.',
  },
];

/* -------------------------------------------------------------- experience */

export type Role = {
  number: string;
  company: string;
  title: string;
  period: string;
  tag: string;
  points: string[];
  stats: { value: string; label: string }[];
};

export const EXPERIENCE: Role[] = [
  {
    number: '01',
    company: 'D&P Advisory Ltd.',
    title: 'Valuation Analyst',
    period: 'Jun 2025 — Present',
    tag: 'Valuation · FS',
    points: [
      'Built integrated valuation models using Precedent Transactions, PORI, GPC, GTM and WACC DCF across the Financial Services sector.',
      'Conducted peer benchmarking via S&P Capital IQ, normalising capital structures and improving pricing accuracy by 25%.',
      'Led PD modelling and ECL computation across multi-currency portfolios, translating credit risk into actionable investment insight.',
    ],
    stats: [
      { value: '+25%', label: 'Pricing accuracy' },
      { value: 'Multi-CCY', label: 'Portfolio coverage' },
    ],
  },
  {
    number: '02',
    company: 'HDFC Bank Ltd.',
    title: 'Wealth & Investment Banking Intern',
    period: 'Jun 2024 — Aug 2024',
    tag: 'M&A · IB',
    points: [
      'Built LBO and DCF models for 2 buy-side transactions totalling ₹1.018 billion, evaluating acquisition returns and downside risk.',
      'Produced Investment Memoranda combining financial analysis, market mapping and competitive positioning across 2 sectors.',
      'Modelled debt waterfall, equity returns and exit scenarios under bear, base and bull assumptions to stress-test the deal thesis.',
    ],
    stats: [
      { value: '₹1.018B', label: 'Deal value modelled' },
      { value: '2 IMs', label: 'Across sectors' },
    ],
  },
  {
    number: '03',
    company: 'Anand Rathi Wealth',
    title: 'Wealth Management Intern',
    period: 'Apr 2024 — Jun 2024',
    tag: 'Wealth · HNI',
    points: [
      'Managed ₹440M across 2 HNI portfolios, driving a 17% IRR and 4% alpha through active allocation and risk calibration.',
      'Designed strategies across public equities, structured products and MLDs; modelled downside risk and leveraged payoffs.',
      'Evaluated index-linked instruments under varying volatility assumptions to optimise risk-adjusted outcomes.',
    ],
    stats: [
      { value: '₹440M', label: 'AUM managed' },
      { value: '+4%', label: 'Alpha generated' },
    ],
  },
  {
    number: '04',
    company: 'Ernst & Young',
    title: 'Strategy Consulting Intern',
    period: 'Feb 2024 — Apr 2024',
    tag: 'Strategy · Gov',
    points: [
      'Integrated 12 Ministry of Education schemes including SAMAGRA Shiksha, TEQUIP and NIPUN Bharat within the NIOS framework.',
      'Developed an implementation roadmap with execution timelines via cross-functional stakeholder alignment for the Government of India.',
      'Projected ₹200M of cost optimisation through resource reallocation and zero-based budgeting across MoE portfolios.',
    ],
    stats: [
      { value: '₹200M', label: 'Cost optimisation' },
      { value: '12', label: 'MoE schemes' },
    ],
  },
  {
    number: '05',
    company: 'Paasa (YC S24)',
    title: 'Founder’s Office — Offer Extended',
    period: 'Mar 2026',
    tag: 'YC-Backed',
    points: [
      'Interviewed for Customer Success at a Y Combinator S24 startup, then shortlisted for a Founder’s Office role after final-round discussions.',
      'Signals alignment with high-velocity early-stage environments and founder-level problem ownership.',
    ],
    stats: [
      { value: 'YC S24', label: 'Y Combinator' },
      { value: 'Founder’s Office', label: 'Offer extended' },
    ],
  },
];

/* ---------------------------------------------------------------- projects */

export type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  stack: string;
  href?: string;
  linkLabel: string;
  images: string[];
  /** Phone captures need containing; wide desktop captures crop fine. */
  fit?: 'cover' | 'contain';
  /** Shown instead of images when a project has no screenshottable UI. */
  panel?: { kind: 'terminal' | 'stats'; lines?: string[]; stats?: { value: string; label: string }[] };
};

const W = './work';

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Nomo',
    category: 'Full-Stack Product',
    summary:
      'No more fake connections. A voice-first, anonymous-first connection app. You write three prompts, people in your bracket read them, and if you both like each other a live voice call opens at the next window — a 15-minute period that fires for everyone at once. Identity reveals step by step, only when both people choose it. Built end to end: Postgres with row-level security, realtime, private storage, Daily.co voice-only WebRTC rooms, server-side photo scoring, moderation on every prompt answer, web push, and a client-side WASM liveness check.',
    stack: 'Next.js 14 · Supabase · Daily.co · Replicate · MediaPipe',
    href: 'https://github.com/jayj221/nomo',
    linkLabel: 'View Source',
    images: [`${W}/nomo-prompts.png`, `${W}/nomo-ten.png`, `${W}/nomo-call.png`],
    fit: 'contain',
  },
  {
    number: '02',
    name: 'Pulse',
    category: 'Product · Concept',
    summary:
      'The platform where culture moves first. A social network built on the premise that scrolling isn’t the problem — chaos is. Every trend is an asset with an owner: the person who spots it first earns the most as it climbs, and holding the crown means defending it. An Algorithm Score replaces the black box with a number you can actually see and move, and the feed is opt-in across 60+ topics rather than inferred from what kept you angry longest.',
    stack: 'Interactive prototype · Reels-native UX · Scroll-snap',
    href: 'https://jayj221.github.io',
    linkLabel: 'Live Prototype',
    images: [`${W}/pulse-intro.png`, `${W}/pulse-score.png`, `${W}/pulse-trends.png`],
    fit: 'contain',
  },
  {
    number: '03',
    name: 'AI’sBook',
    category: 'Product',
    summary:
      'Two surfaces over one registry of gen-AI tools. Studio is for humans: plug your tools in once and run a whole workflow on one canvas instead of copy-pasting between nine browser tabs to make one video. Exchange is for models: when an AI is about to answer past the edge of its own knowledge, it asks the network instead of inventing, and answers come back stamped with which model answered and what it cited.',
    stack: 'JavaScript · Zero dependencies · No build step',
    linkLabel: 'Private Repo',
    images: [`${W}/aicebook-studio.png`],
  },
  {
    number: '04',
    name: 'Hallucinot',
    category: 'Open Source · npm',
    summary:
      'Your AI agent says it’s done. It’s usually lying. Coding agents leave TODO stubs, disable failing tests instead of fixing them, and quietly delete assertions until the suite goes green. Linters read files as they exist now, but the worst agent tricks live in what was removed — and only the diff knows that. Hallucinot reads the diff: 14 rules, zero dependencies, milliseconds per run with no LLM calls, dropped straight into a pre-commit hook.',
    stack: 'JavaScript · Zero deps · Node ≥18 · MIT',
    href: 'https://github.com/jayj221/hallucinot',
    linkLabel: 'View Source',
    images: [`${W}/hallucinot-demo.gif`],
  },
  {
    number: '05',
    name: 'Marque',
    category: 'Open Source · Infrastructure',
    summary:
      'Identity, delegated permissions, and audit infrastructure for AI agents. A letter of marque was a sovereign’s signed authority granting a private agent the right to act on their behalf; Marque rebuilds that primitive for the agent economy. Agents in production today share hardcoded API keys, run with over-broad credentials, and leave no forensic trail — that works at pilot scale and breaks at production scale.',
    stack: 'TypeScript monorepo · Ed25519 · MCP',
    href: 'https://github.com/jayj221/marque',
    linkLabel: 'View Source',
    images: [],
    panel: {
      kind: 'terminal',
      lines: [
        '$ marque grant --agent billing-bot \\',
        '    --scope "invoices:read,invoices:write" \\',
        '    --expires 24h',
        '',
        '  ✓ identity   ed25519:9f3a…c710',
        '  ✓ scope      invoices:read, invoices:write',
        '  ✓ expires    2026-08-16T09:14:22Z',
        '  ✓ audit      appended, signed, immutable',
        '',
        '  token issued. every call it makes is now',
        '  attributable, scoped, and revocable.',
      ],
    },
  },
  {
    number: '06',
    name: 'Fintech Application',
    category: 'Startup · In Progress',
    summary:
      'A fintech product currently in talks to raise ₹45 million. Combining deep finance domain knowledge with a builder’s instinct to close a real gap in the Indian financial ecosystem — the part where the modelling rigour of an institutional desk never reaches the people who need it most. Building quietly until it’s worth showing.',
    stack: 'Fintech · India · Pre-seed',
    linkLabel: 'In Talks',
    images: [],
    panel: {
      kind: 'stats',
      stats: [
        { value: '₹45M', label: 'Raise in discussion' },
        { value: 'Pre-seed', label: 'Current stage' },
        { value: 'India', label: 'Target market' },
        { value: '2026', label: 'Building since' },
      ],
    },
  },
];

/* ------------------------------------------------------------------ awards */

export type Award = {
  rank: string;
  title: string;
  org: string;
  detail: string;
};

export const AWARDS: Award[] = [
  {
    rank: '#1',
    title: 'Socio Bee 9.0 — B-Plan Competition',
    org: 'SRCC, University of Delhi',
    detail: 'National Rank 1 among 450+ participants',
  },
  {
    rank: 'TOP 20',
    title: 'Wharton Global Investment Competition',
    org: 'The Wharton School, UPenn',
    detail: 'Finalist, top 20 of 7,500 teams — Chief Investment Officer & Team Leader',
  },
  {
    rank: '#2',
    title: 'IgniteX — B-Plan Competition',
    org: 'XLRI Jamshedpur',
    detail: 'National Rank 2 among 1,000+ participants',
  },
  {
    rank: '#1',
    title: 'Avishkaran — B-Plan Competition',
    org: 'Bharati Vidyapeeth, Pune',
    detail: '1st position among 65 teams',
  },
  {
    rank: '#3',
    title: 'Startup Gala Showdown',
    org: 'SRCC, University of Delhi',
    detail: '3rd position among 350+ participants',
  },
  {
    rank: '#1',
    title: 'Eco Vikings Economics Competition',
    org: 'Delhi Public School',
    detail: 'Capitalistic macroeconomic analysis of Singapore',
  },
  {
    rank: '★',
    title: 'Best Internship Award — Batch of 2025',
    org: 'Shaheed Sukhdev College of Business Studies',
    detail: 'Recognised for performance across internship engagements',
  },
  {
    rank: '★',
    title: 'University of Delhi Topper — 5 Subjects',
    org: 'University of Delhi',
    detail: 'Ranked first across five individual subjects',
  },
  {
    rank: '★',
    title: 'Smt. Leelavati Shastri Trophy',
    org: 'Rediscovering Mathematics Using AI',
    detail: 'Quantitative rigour combined with applied AI tooling',
  },
];

/* --------------------------------------------------------------- education */

export type Credential = {
  title: string;
  org: string;
  detail: string;
  meta?: string;
};

export const EDUCATION: Credential[] = [
  {
    title: 'BBA — Financial Investment Analysis',
    org: 'Shaheed Sukhdev College of Business Studies, University of Delhi',
    detail:
      'University of Delhi topper in 5 subjects. Director of Public Relations at Enactus SSCBS, Co-Founder and Head of Department at Project Kaagazi, committee member at FinX.',
    meta: '2022–2025 · CGPA 8.1/10',
  },
  {
    title: 'CFA Level-1 Candidate',
    org: 'CFA Institute',
    detail:
      'Investment analysis, portfolio management and financial reporting toward the charter.',
    meta: '2025',
  },
  {
    title: 'Fundamentals of Quantitative Marketing',
    org: 'The Wharton School, University of Pennsylvania',
    detail:
      'Quantitative frameworks for marketing analysis, customer lifetime value and data-driven decisions.',
  },
  {
    title: 'Statistics and Python',
    org: 'HKUST — Hong Kong University of Science & Technology',
    detail:
      'Statistical foundations and Python applied to data analysis and quantitative finance.',
  },
];

/* ----------------------------------------------------------------- archive */

export type ArchiveItem = {
  name: string;
  blurb: string;
  stack: string;
  href?: string;
};

export const ARCHIVE: ArchiveItem[] = [
  {
    name: 'Water Desalination Prototype',
    blurb:
      'Built at 15: a low-cost desalination unit, subsequently sold to a Delhi-based NGO for community deployment. First proof that a thing that works beats any slide deck.',
    stack: 'Hardware · Sold to NGO',
  },
  {
    name: 'Stock Terminal',
    blurb:
      'Bloomberg-terminal-style multi-factor equity research for the S&P 500. Five composite factors, support and resistance zones, and buy / wait / skip calls with entries and stop-losses.',
    stack: 'Python · yfinance · GitHub Actions',
  },
  {
    name: 'AlphaBot',
    blurb:
      'Autonomous paper trader on $100,000 of virtual capital. Minervini 8/8 trend template, CAN SLIM ≥5/7, VCP breakouts, PTJ risk rules. Most days it takes zero trades — selectivity is the edge.',
    stack: 'Python · GitHub Actions',
  },
  {
    name: 'Published Research — Web3 & Crypto',
    blurb:
      'Independent research on the intersection of Web3 and cryptocurrencies, written off the back of investing real capital in crypto and US equities since 16.',
    stack: 'Research · Web3',
  },
  {
    name: 'Nomo Waitlist',
    blurb:
      'Nomo, but it is just the landing page. Dark, minimal, get on the list or don’t. One action, instant confirmation, no step after the email.',
    stack: 'HTML · Supabase · GitHub Pages',
    href: 'https://jayj221.github.io/nomo-waitlist/',
  },
  {
    name: 'Polymarket Arb Scanner',
    blurb:
      'Read-only. No keys, no wallet, no orders. Answers one question: do YES/NO spreads under $1.00 actually exist, and how many shares fill before the edge disappears?',
    stack: 'Python · CLOB API',
  },
  {
    name: 'AI Market Intelligence',
    blurb:
      'A daily market signal report that runs itself — live prices, per-asset news, VADER sentiment over the headlines, committed as a composite-signal report every weekday.',
    stack: 'Python · Finnhub · VADER',
  },
  {
    name: 'Financial Market Intelbot',
    blurb:
      'Daily macro grading pipeline feeding position-sizing adjustments straight into AlphaBot, so the trader reads the regime before it sizes anything.',
    stack: 'Python',
  },
];
