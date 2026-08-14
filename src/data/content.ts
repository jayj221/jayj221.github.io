export const PROFILE = {
  firstName: 'jayant',
  fullName: 'Jayant Joshi',
  email: 'jjoshi221@gmail.com',
  github: 'https://github.com/jayj221',
  tagline:
    'an engineer building tooling for the ai-agent mess, and products that just look good',
  about:
    'I build tooling for the AI-agent mess, plus the occasional product that just looks good. Small sharp things that fix a problem i actually hit. I care about the diff as much as the design. Agent infrastructure, developer tooling, full-stack product, and quant systems, shipped end to end. Let’s build something incredible together!',
};

export type Service = {
  number: string;
  name: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Agent Infrastructure',
    description:
      'Cryptographic identity, scoped delegation, revocable trust, and immutable audit for AI agents. Ed25519 identity primitives, a capability/scope grammar, and drop-in auth middleware for MCP servers.',
  },
  {
    number: '02',
    name: 'Developer Tooling',
    description:
      'Zero-dependency CLIs that read the git diff and catch what linters structurally cannot: placeholder stubs, swallowed errors, deleted assertions. Milliseconds per run, no LLM calls, drops into a pre-commit hook.',
  },
  {
    number: '03',
    name: 'Full-Stack Product',
    description:
      'Next.js and Supabase products taken end to end. Auth, Postgres with row-level security, realtime, private storage, WebRTC voice rooms, moderation pipelines, web push, and client-side liveness checks.',
  },
  {
    number: '04',
    name: 'Quant & Market Systems',
    description:
      'Multi-factor equity research and autonomous paper trading. Minervini trend templates, CAN SLIM scoring, VCP breakout detection, Paul Tudor Jones risk rules, and macro data pipelines running on schedule.',
  },
  {
    number: '05',
    name: 'Design & Interface',
    description:
      'Design systems, motion, and dark interfaces built by the same hands that write the code. Design and engineering are the same craft pointed at different surfaces.',
  },
];

export type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  stack: string;
  href?: string;
  linkLabel: string;
  images: [string, string, string];
};

// Placeholder visuals — swap these for real screenshots of each project.
const SHOT = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
];

const shots = (a: number, b: number, c: number): [string, string, string] => [
  SHOT[a],
  SHOT[b],
  SHOT[c],
];

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Marque',
    category: 'Open Source',
    summary:
      'Identity, delegated permissions, and audit infrastructure for AI agents. A letter of marque was a sovereign’s signed authority granting a private agent the right to act on their behalf; Marque rebuilds that primitive for the agent economy. Agents in production today share hardcoded API keys, run with over-broad credentials, and leave no forensic trail. Five packages: Ed25519 identity primitives, a scope grammar and capability policies, a TypeScript SDK for agent runtimes, drop-in auth middleware for MCP servers, and an append-only signed audit log.',
    stack: 'TypeScript monorepo · Ed25519 · MCP',
    href: 'https://github.com/jayj221/marque',
    linkLabel: 'View Source',
    images: shots(0, 1, 2),
  },
  {
    number: '02',
    name: 'Hallucinot',
    category: 'Open Source · npm',
    summary:
      'Your AI agent says it’s done. It’s usually lying. Coding agents leave TODO stubs, disable failing tests instead of fixing them, and quietly delete assertions until the suite goes green. Linters read files as they exist now, but the worst agent tricks live in what was removed, and only the diff knows that. Hallucinot reads the diff: 14 rules, zero dependencies, runs in milliseconds with no LLM calls, and drops straight into a pre-commit hook.',
    stack: 'JavaScript · Zero deps · Node ≥18 · MIT',
    href: 'https://github.com/jayj221/hallucinot',
    linkLabel: 'View Source',
    images: shots(3, 4, 5),
  },
  {
    number: '03',
    name: 'Nomo',
    category: 'Full-Stack Product',
    summary:
      'No more fake connections. A voice-first, anonymous-first connection app. You write three prompts, people in your bracket read them, and if you both like each other a live voice call opens at the next window, a 15-minute period that fires for everyone at once. Identity reveals step by step, only when both people choose it. Built end to end: Postgres with row-level security, realtime, private storage, Daily.co voice-only WebRTC rooms, server-side photo scoring, moderation on every prompt answer, web push, and a client-side WASM liveness check.',
    stack: 'Next.js 14 · Supabase · Daily.co · Replicate · MediaPipe',
    href: 'https://github.com/jayj221/nomo',
    linkLabel: 'View Source',
    images: shots(6, 7, 8),
  },
  {
    number: '04',
    name: 'AI’sBook',
    category: 'Product',
    summary:
      'Two surfaces over one registry of gen-AI tools. Studio is for humans: plug your tools in once and run a whole workflow on one canvas instead of copy-pasting between nine browser tabs to make one video. Exchange is for models: when an AI is about to answer past the edge of its own knowledge, it asks the network instead of inventing, and answers come back stamped with which model answered and what it cited. The closest prior art is coding-agent-only; this is every tool, plus a human workspace.',
    stack: 'JavaScript · Zero dependencies · No build step',
    linkLabel: 'Private Repo',
    images: shots(2, 0, 4),
  },
  {
    number: '05',
    name: 'Stock Terminal',
    category: 'Private · Quant',
    summary:
      'A Bloomberg-terminal-style multi-factor equity research tool for the S&P 500. Pulls free market data, scores every name across five composite factors (Value, Quality, Momentum, Technicals, Sentiment), identifies support and resistance zones, and emits buy / wait / skip recommendations with entry prices and stop-losses. Ships with a virtual portfolio ledger, a CI-tested engine, and a scheduled daily report.',
    stack: 'Python 3.11/3.12 · yfinance · GitHub Actions · MIT',
    linkLabel: 'Private Repo',
    images: shots(5, 8, 1),
  },
  {
    number: '06',
    name: 'AlphaBot',
    category: 'Private · Quant',
    summary:
      'An autonomous US equity paper trader running $100,000 of virtual capital, firing twice daily during market hours: a morning scan at the open and a session report at the close. Screens with the Minervini SEPA trend template at a full 8/8, then O’Neil CAN SLIM at 5/7 or better. Enters on VCP breakouts or pocket pivots with volume confirmation, and sizes with Paul Tudor Jones risk rules: 1% per trade, 5:1 minimum reward-to-risk, no averaging down, VIX-adjusted. Selectivity is the edge — most days it takes zero trades.',
    stack: 'Python · GitHub Actions · Minervini / CAN SLIM / VCP',
    linkLabel: 'Private Repo',
    images: shots(1, 6, 3),
  },
];

export type ArchiveItem = {
  name: string;
  blurb: string;
  stack: string;
  href?: string;
};

export const ARCHIVE: ArchiveItem[] = [
  {
    name: 'Polymarket Arb Scanner',
    blurb:
      'Read-only research tool. No keys, no wallet, no orders. Answers one question: do YES/NO spreads under $1.00 actually exist, and how many shares can you fill before the edge disappears? Real logged data before any execution code gets written.',
    stack: 'Python · CLOB API',
  },
  {
    name: 'AI Market Intelligence',
    blurb:
      'A daily market signal report that runs itself. Every weekday it fetches live equity and crypto prices, pulls recent news per asset, runs VADER sentiment over the headlines, and commits a composite-signal report.',
    stack: 'Python · Finnhub · VADER · GitHub Actions',
  },
  {
    name: 'Nomo Waitlist',
    blurb:
      'Nomo, but it is just the landing page. Dark, minimal, get on the list or don’t. One action, instant confirmation, no step after the email.',
    stack: 'HTML · Supabase · GitHub Pages',
    href: 'https://jayj221.github.io/nomo-waitlist/',
  },
  {
    name: 'Financial Market Intelbot',
    blurb:
      'Daily macro grading pipeline. Feeds position-sizing adjustments straight into AlphaBot, so the trader reads the macro regime before it sizes anything.',
    stack: 'Python',
  },
  {
    name: 'Macro Tracker',
    blurb:
      'Scheduled macro indicator collection and trend tracking, built to sit underneath the trading systems rather than in front of a user.',
    stack: 'Python',
  },
  {
    name: 'Crypto Pulse',
    blurb:
      'Crypto market monitoring and signal generation, sharing the data-layer conventions of the equity stack so the two can be read side by side.',
    stack: 'Python',
  },
];
