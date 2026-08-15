export const PROFILE = {
  firstName: 'jayant',
  fullName: 'Jayant Joshi',
  email: 'jjoshi221@gmail.com',
  phone: '+91 98183 00229',
  github: 'https://github.com/jayj221',
  linkedin: 'https://www.linkedin.com/in/jayantxjoshi',
  location: 'Delhi, India',
  role: 'Building Nomo · Technology and Finance',
  tagline:
    'building nomo. technology and finance, and products that don’t need a second pitch',
  about:
    'Founder of Nomo, an AI-first dating app. I started investing in crypto and US equities at 16, built a water desalination prototype at 15 that an NGO bought, and topped the University of Delhi in five subjects. Four years across valuation desks, banking floors and strategy rooms — now building full time. Let’s build something incredible together!',
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
    name: 'Product & Founding',
    description:
      'Nomo, end to end: an AI-first connection app that works out your bracket, gives everyone ten matches a day, and opens a live voice window before anyone sees a photo. Next.js and Supabase, row-level security, realtime, WebRTC voice, moderation pipelines and web push.',
  },
  {
    number: '02',
    name: 'Valuation & Deal Modelling',
    description:
      'Integrated valuation models built on WACC DCF, LBO, Precedent Transactions, GPC, PORI and GTM. PD modelling and ECL computation across multi-currency portfolios. Live deal support for billion-rupee transactions, not academic exercises.',
  },
  {
    number: '03',
    name: 'Wealth & Portfolio Strategy',
    description:
      '₹440M managed across HNI portfolios at a 17% IRR and 4% alpha. Allocation across public equities, structured products and MLDs, with downside risk and leveraged payoff scenarios modelled before anything gets committed.',
  },
  {
    number: '04',
    name: 'Strategy & Consulting',
    description:
      'Twelve Ministry of Education schemes — SAMAGRA Shiksha, TEQUIP, NIPUN Bharat — integrated into the NIOS framework for the Government of India, with an implementation roadmap and ₹200M of projected cost optimisation via zero-based budgeting.',
  },
  {
    number: '05',
    name: 'AI, Data & Quant Systems',
    description:
      'AI and information analytics at GSPANN. Multi-factor equity screeners and autonomous paper traders in Python — Minervini trend templates, CAN SLIM, VCP breakouts, PTJ risk rules — plus developer tooling that reads git diffs and identity infrastructure for AI agents.',
  },
];

/* -------------------------------------------------------------- experience */

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  tag?: string;
  points?: string[];
  stats?: { value: string; label: string }[];
  subRoles?: { title: string; period: string }[];
};

export type ExperienceGroup = {
  key: string;
  label: string;
  blurb: string;
  roles: Role[];
};

export const EXPERIENCE: ExperienceGroup[] = [
  {
    key: 'building',
    label: 'Building',
    blurb: 'Things I started and own.',
    roles: [
      {
        company: 'Nomo',
        title: 'Founder',
        period: 'Jun 2026 — Present',
        location: 'Delhi, India · Full-time',
        tag: 'Current',
        points: [
          'One of the only AI-first dating apps: it works out what bracket you are in, then only shows you people on that level, with interests layered on top.',
          'Ten matches a day for everyone — capped deliberately, because the distribution is the broken part, not the applicants.',
          'Built end to end on Next.js and Supabase: row-level security, realtime, private storage, Daily.co voice rooms, moderation and web push.',
        ],
        stats: [
          { value: '10/day', label: 'Matches, capped' },
          { value: 'Live soon', label: 'App in progress' },
        ],
      },
      {
        company: 'Stealth FinTech Startup',
        title: 'Co-Founder',
        period: 'Sep 2025 — Apr 2026',
        location: 'Bengaluru, India · Part-time',
        points: [
          'Conceptualised and built an AI-powered micro-investing platform that rounds up digital transactions and invests spare change into diversified portfolios.',
          'Defined an investment engine supporting mutual funds, ETFs and goal-based savings with AI-driven portfolio recommendations.',
          'Evaluated payment infrastructure, KYC providers, mutual fund APIs and compliance requirements to determine technical feasibility.',
          'Engaged investors including Blume Ventures, Orios Venture Partners and angels on a potential ₹45M pre-seed round.',
        ],
        stats: [
          { value: '₹45M', label: 'Pre-seed discussed' },
          { value: '8 mos', label: 'Concept to feasibility' },
        ],
      },
    ],
  },
  {
    key: 'technology',
    label: 'Technology',
    blurb: 'Where the engineering pays rent.',
    roles: [
      {
        company: 'GSPANN Technologies, Inc',
        title: 'AI and Information Analytics',
        period: 'May 2026 — Present',
        location: 'On-site · Internship',
        tag: 'Current',
        points: [
          'AI and information analytics engagements — applying data and model tooling to production analytics problems.',
        ],
      },
    ],
  },
  {
    key: 'finance',
    label: 'Finance & Consulting',
    blurb: 'Valuation desks, banking floors, strategy rooms.',
    roles: [
      {
        company: 'D&P Advisory',
        title: 'Valuation Analyst',
        period: 'Jun 2025 — May 2026',
        location: 'Bengaluru, India · Full-time',
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
        company: 'Anand Rathi Wealth Limited',
        title: 'Wealth Management Intern',
        period: 'Jun 2024 — Aug 2024',
        location: 'Delhi, India · Full-time',
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
        company: 'HDFC Bank Limited',
        title: 'Investment Banking Intern',
        period: 'Apr 2024 — Jun 2024',
        location: 'Delhi, India · Hybrid',
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
        company: 'EY',
        title: 'Strategy Consulting Intern',
        period: 'Feb 2024 — Apr 2024',
        location: 'Aerocity · On-site',
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
        company: 'Faad Network Pvt. Ltd',
        title: 'Venture Capital Intern',
        period: 'Jan 2023 — Jun 2023',
        location: 'Gurugram, Haryana, India',
        tag: 'VC · Web3',
        points: [
          'Early-stage venture diligence with a focus on blockchain and cryptocurrency ventures.',
        ],
      },
    ],
  },
  {
    key: 'leadership',
    label: 'Leadership & Community',
    blurb: 'Societies, social ventures, and the people side.',
    roles: [
      {
        company: 'Enactus SSCBS',
        title: 'Advisory Committee → Director of PR → Organising Committee',
        period: 'Jan 2023 — May 2025 · 2 yrs 5 mos',
        location: 'Delhi, India · Full-time',
        subRoles: [
          { title: 'Advisory Committee Member', period: 'Aug 2024 — May 2025' },
          { title: 'Director of Public Relations', period: 'Jun 2023 — Aug 2024' },
          { title: 'Organising Committee', period: 'Jan 2023 — Jun 2023' },
        ],
        points: [
          'Represented Enactus SSCBS with Project Pravaah, taking 2nd place at XLRI’s IgniteX B-Plan competition.',
          'Enactus SSCBS was named National Runner Up at the Enactus India National Exposition 2025 — top 4 of 120+ colleges in the Early Stage category.',
        ],
      },
      {
        company: 'Project Kaagazi',
        title: 'Co-founder & Director of Research and Expansion',
        period: 'Jul 2023 — Aug 2024',
        location: 'Delhi, India · Full-time',
        points: ['Community-service venture: research, expansion and on-ground delivery.'],
      },
      {
        company: 'Project Basera',
        title: 'Associate Consultant',
        period: 'Jan 2023 — Jul 2023',
        location: 'Delhi, India · Full-time',
      },
      {
        company: 'FinX — The Finance Society of SSCBS',
        title: 'Organising Committee',
        period: 'Jan 2023 — Jun 2023',
        location: 'On-site · Full-time',
      },
    ],
  },
];

/* ------------------------------------------------------------ volunteering */

export type Volunteering = {
  org: string;
  role: string;
  period: string;
  cause: string;
  points: string[];
};

export const VOLUNTEERING: Volunteering[] = [
  {
    org: 'Lakshya Foundation',
    role: 'Education Volunteer',
    period: 'Nov 2022 — Oct 2023 · 1 yr',
    cause: 'Education',
    points: [
      'Delivered computational-skills and plastic-awareness education to underprivileged children at a Delhi-based non-profit, through quizzes, skits and hands-on demonstrations.',
      'Ran student competitions and funded the prizes and materials through fundraisers.',
    ],
  },
  {
    org: 'Shubhakshika Educational Society',
    role: 'Education Volunteer',
    period: 'Apr 2023 — Jun 2024 · 1 yr 3 mos',
    cause: 'Children',
    points: [
      'Taught and ran interactive sessions for children, including skits and creative programming built for the students.',
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
  panel?: {
    kind: 'terminal' | 'stats';
    lines?: string[];
    stats?: { value: string; label: string }[];
  };
};

const W = './work';

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Nomo',
    category: 'Founder · Building Now',
    summary:
      'One of the only AI-first dating apps. It works out what level you are on, then only shows you people in that bracket — interests and hobbies layer on top. Ten matches a day, the same for everyone, because the distribution is what is broken: a small group gets more matches than they can read while most get almost none. Nomo caps it. No photos until you talk; a live voice window opens for everyone at once, and identity reveals only when both people choose it.',
    stack: 'Next.js 14 · Supabase · Daily.co · Replicate · MediaPipe',
    href: 'https://nomosingle.com',
    linkLabel: 'Live Site',
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
    href: 'https://jayj221.github.io/pulse/',
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
    detail:
      'National Rank 2 among 1,000+ participants, representing Enactus SSCBS with Project Pravaah',
  },
  {
    rank: '#2',
    title: 'Enactus India National Exposition 2025',
    org: 'Enactus India',
    detail:
      'National Runner Up with Enactus SSCBS — top 4 of 120+ colleges, Early Stage category',
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
      'University of Delhi topper in 5 subjects. Director of Public Relations at Enactus SSCBS, Co-Founder and Director of Research and Expansion at Project Kaagazi, organising committee at FinX.',
    meta: '2022–2025 · CGPA 8.1/10',
  },
  {
    title: 'Commerce with Mathematics and Economics',
    org: 'Amity International School, Noida',
    detail:
      'Where the maths and economics groundwork started, alongside classical flute and Scottish pipe band scholar awards.',
  },
  {
    title: 'Fundamentals of Quantitative Marketing',
    org: 'Wharton Online — University of Pennsylvania',
    detail:
      'Quantitative frameworks for marketing analysis, customer lifetime value and data-driven decisions.',
    meta: 'Issued Aug 2024',
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
