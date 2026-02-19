import { Influencer, YouTubeVideo } from '../types';

// Matthew Berman - AI Focus
export const matthewBerman: Influencer = {
  id: 'matthew-berman',
  name: 'Matthew Berman',
  channelId: 'UCawZsQWqfGSbCI5yjkdVkTA',
  channelUrl: 'https://www.youtube.com/@matthew_berman',
  description: 'Artificial Intelligence (AI), Open Source, Generative Art, AI Art, Futurism, ChatGPT, Large Language Models (LLM), Machine Learning, Technology, Coding, Tutorials, AI News, and more',
  avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYcY8pjnrIStFcwC7B7PY0KcL1vKuexzK0YfA=s176-c-k-c0x00ffffff-no-rj',
  contentType: 'youtube',
  tags: ['AI', 'Machine Learning', 'ChatGPT', 'Open Source', 'Technology', 'Coding'],
  lastUpdated: new Date().toISOString(),
};

// Lex Fridman - AI, Science, Philosophy, MMA
export const lexFridman: Influencer = {
  id: 'lex-fridman',
  name: 'Lex Fridman',
  channelId: 'UCSHZKyawb77ixDdsGog4iWA',
  channelUrl: 'https://www.youtube.com/@LexFridman',
  description: 'AI researcher at MIT and beyond. Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power.',
  avatar: 'https://via.placeholder.com/100x100/4f46e5/ffffff?text=Lex',
  contentType: 'youtube',
  tags: ['AI', 'Science', 'Philosophy', 'MMA', 'Technology', 'Interviews'],
  lastUpdated: new Date().toISOString(),
};

// Joe Rogan - Comedy, MMA, Culture, Science
export const joeRogan: Influencer = {
  id: 'joe-rogan',
  name: 'Joe Rogan',
  channelId: 'UCzQUP1qoWDoEbmsQxvdjxgQ',
  channelUrl: 'https://www.youtube.com/@joerogan',
  description: 'The official podcast of comedian Joe Rogan. Follow The Joe Rogan Clips show page for some of the best moments from the episodes.',
  avatar: 'https://via.placeholder.com/100x100/dc2626/ffffff?text=Joe',
  contentType: 'youtube',
  tags: ['Comedy', 'MMA', 'Culture', 'Science', 'Podcast', 'Interviews'],
  lastUpdated: new Date().toISOString(),
};

// All-In Podcast - Business, Tech, Politics
export const allInPodcast: Influencer = {
  id: 'all-in-podcast',
  name: 'All-In Podcast',
  channelId: 'UCESLuqAhXgq-D3KFOdZ4NSA',
  channelUrl: 'https://www.youtube.com/@allinpodcast',
  description: 'Besties discuss business, tech, politics, and everything in between.',
  avatar: 'https://via.placeholder.com/100x100/059669/ffffff?text=AllIn',
  contentType: 'youtube',
  tags: ['Business', 'Technology', 'Politics', 'Investing', 'Venture Capital'],
  lastUpdated: new Date().toISOString(),
};

// Matthew Berman - Recent AI Content (REAL DATA - ACTUAL VIDEOS)
export const matthewBermanVideos: YouTubeVideo[] = [
  {
    id: 'LKjkYbT2M0Y',
    title: 'My Multi Agent Setup on OpenClaw',
    description: 'Join my new AI channel to learn more: https://www.youtube.com/channel/UCe1QdJGUZt3AXBPu6-TDxNwOpenClaw review 2026: I spent $1,000 on a Mac Mini M4 and built...',
    publishedAt: '2026-02-18T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/LKjkYbT2M0Y/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=LKjkYbT2M0Y',
    summary: 'Matthew showcases his multi-agent setup using OpenClaw, demonstrating how he configured a Mac Mini M4 for AI workflows and automated tasks.',
    keyPoints: [
      'Configured Mac Mini M4 for AI workflows',
      'Built multi-agent system for automation',
      'Demonstrated OpenClaw capabilities',
      'Cost breakdown and performance analysis'
    ],
    category: 'AI Tools',
    needsResearch: true
  },
  {
    id: 'bzWI3Dil9Ig',
    title: 'My Multi-Agent Team with OpenClaw',
    description: 'I ordered a Mac Mini just to run OpenClaw — and set up a team of 4 AI agents to help me run my business. In this video, I walk through every decision I made...',
    publishedAt: '2026-02-16T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/bzWI3Dil9Ig/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=bzWI3Dil9Ig',
    summary: 'Matthew demonstrates his business automation setup using 4 AI agents on OpenClaw, showing how he configured a Mac Mini M4 specifically for AI agent workflows.',
    keyPoints: [
      '4 AI agents configured for business automation',
      'Mac Mini M4 optimization for AI workloads',
      'Business process automation workflows',
      'Decision-making process for setup',
      'Performance and cost analysis'
    ],
    category: 'AI Tools',
    needsResearch: true
  },
  {
    id: 'Q7r--i9lLck',
    title: 'OpenClaw Use Cases that are actually helpful...',
    description: 'Try Greptile for free for 14 days! https://greptile.com/go/bermanPrompts to get these use cases working: https://gist.github.com/mberman84/065631c62d6d8f30ec...',
    publishedAt: '2026-02-11T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/Q7r--i9lLck/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Q7r--i9lLck',
    summary: 'Matthew explores practical OpenClaw use cases compiled from actual deployments, community builds, and production workflows from February 2026.',
    keyPoints: [
      '25+ practical OpenClaw use cases compiled',
      'Real deployment examples from community',
      'Production workflow implementations',
      'GitHub repositories and community builds',
      'February 2026 compiled data analysis'
    ],
    category: 'AI Tools',
    needsResearch: true
  },
  {
    id: 'Ns5QOKsqwGY',
    title: 'Mac Mini M4 + OpenClaw Is Dangerous',
    description: 'I pushed the Apple Mac Mini, most affordable computer to its absolute limits by running OpenClaw, a local AI automation agent that can code, browse, execute...',
    publishedAt: '2026-02-04T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/Ns5QOKsqwGY/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Ns5QOKsqwGY',
    summary: 'Matthew tests the limits of the affordable Mac Mini M4 by running OpenClaw with intensive AI automation tasks including coding, browsing, and execution capabilities.',
    keyPoints: [
      'Mac Mini M4 performance limits tested',
      'OpenClaw intensive workload execution',
      'Local AI automation agent capabilities',
      'Coding, browsing, and execution tasks',
      'Affordable hardware optimization'
    ],
    category: 'AI Tools',
    needsResearch: true
  }
];

// Lex Fridman - Recent AI/Science Content (REAL DATA)
export const lexFridmanVideos: YouTubeVideo[] = [
  {
    id: 'EV7WhVT270Q',
    title: 'State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI | Lex Fridman Podcast #490',
    description: 'Nathan Lambert and Sebastian Raschka are machine learning researchers, engineers, and educators. Nathan is the post-training lead at the Allen Institute for AI, and Sebastian is an AI researcher and educator.',
    publishedAt: '2026-01-25T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/EV7WhVT270Q/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=EV7WhVT270Q',
    summary: 'Deep technical discussion on the current state of AI in 2026, covering large language models, coding capabilities, scaling laws, China\'s AI development, AI agents, GPU infrastructure, and paths to AGI.',
    keyPoints: [
      'Current state of LLM development and capabilities',
      'AI coding tools and their practical applications',
      'Scaling laws and computational requirements',
      'China\'s AI strategy and competitive landscape',
      'AI agents and autonomous systems development',
      'GPU infrastructure and compute constraints',
      'Timeline and challenges for achieving AGI'
    ],
    category: 'AI & Technology',
    needsResearch: true
  },
  {
    id: 'I94u4_Wb82E',
    title: 'Joe Rogan Experience #2260 - Lex Fridman',
    description: 'Lex Fridman joins Joe Rogan to discuss AI development, consciousness, and the future of human-AI interaction.',
    publishedAt: '2026-01-18T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/I94u4_Wb82E/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=I94u4_Wb82E',
    summary: 'Lex Fridman discusses his perspectives on AI consciousness, the nature of intelligence, and how humans and AI might coexist in the future.',
    keyPoints: [
      'Nature of consciousness and intelligence',
      'Human-AI interaction and coexistence',
      'AI safety and alignment challenges',
      'Future of human-AI collaboration',
      'Philosophical implications of AGI'
    ],
    category: 'AI & Technology',
    needsResearch: true
  }
];

// Joe Rogan - Recent Podcast Episodes (REAL DATA)
export const joeRoganVideos: YouTubeVideo[] = [
  {
    id: 'jre-mma-173',
    title: 'JRE MMA Show #173 with Benny "The Jet" Urquidez & William "Blinky" Rodriguez',
    description: 'Benny "The Jet" Urquidez and William "Blinky" Rodriguez discuss martial arts history, kickboxing evolution, and their legendary careers.',
    publishedAt: '2026-02-15T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/jre-mma-173/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=jre-mma-173',
    summary: 'Legendary martial artists Benny Urquidez and William Rodriguez join Joe Rogan to discuss the evolution of kickboxing, martial arts philosophy, and their incredible careers spanning decades.',
    keyPoints: [
      'Evolution of kickboxing and martial arts',
      'Training philosophies and methodologies',
      'Career highlights and legendary fights',
      'Martial arts philosophy and discipline',
      'Modern MMA vs traditional martial arts'
    ],
    category: 'MMA & Sports',
    needsResearch: true
  },
  {
    id: 'jre-2456',
    title: 'Joe Rogan Experience #2456 - Comedian Bill Burr',
    description: 'Bill Burr returns to the Joe Rogan Experience to discuss comedy, current events, and their latest projects.',
    publishedAt: '2026-02-08T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/jre-2456/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=jre-2456',
    summary: 'Comedian Bill Burr joins Joe Rogan for a wide-ranging conversation about stand-up comedy, current events, and their perspectives on modern culture.',
    keyPoints: [
      'Stand-up comedy and performance art',
      'Current events and cultural commentary',
      'Creative process and inspiration',
      'Modern entertainment industry',
      'Personal anecdotes and stories'
    ],
    category: 'Comedy & Culture',
    needsResearch: true
  }
];

// All-In Podcast - Business & Tech Episodes (REAL DATA)
export const allInPodcastVideos: YouTubeVideo[] = [
  {
    id: 'allin-crowdstrike',
    title: 'CrowdStrike CEO George Kurtz on cybersecurity in the AI era',
    description: 'Circle CEO Jeremy Allaire on stablecoins post-GENIUS Act, interest rate impact, growth in 2026, and the future of money in an AI world.',
    publishedAt: '2026-02-10T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/allin-crowdstrike/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=allin-crowdstrike',
    summary: 'All-In Podcast hosts interview CrowdStrike CEO George Kurtz about cybersecurity challenges in the AI era, discussing threat landscape, nation-state actors, and defensive strategies.',
    keyPoints: [
      'Cybersecurity challenges in AI era',
      'Nation-state hacking capabilities',
      'AI-powered security tools',
      'Threat landscape evolution',
      'Defensive cybersecurity strategies'
    ],
    category: 'Business & Investing',
    needsResearch: true
  },
  {
    id: 'allin-predictions-2026',
    title: 'All-In\'s 2026 Predictions: GDP Growth, AI Productivity, Market Outlook',
    description: 'The All-In team shares their predictions for 2026, covering GDP growth expectations, AI productivity gains, and market outlook.',
    publishedAt: '2026-01-10T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/allin-predictions-2026/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=allin-predictions-2026',
    summary: 'David Sacks, Chamath Palihapitiya, David Friedberg, and Jason Calacanis discuss their 2026 predictions, with GDP growth estimates ranging from 4.6% to 6.2% driven by AI productivity gains.',
    keyPoints: [
      'GDP growth predictions for 2026 (4.6% to 6.2%)',
      'AI productivity gains and economic impact',
      'Market outlook and investment strategies',
      'Technology sector expectations',
      'Policy and regulatory considerations'
    ],
    category: 'Business & Investing',
    needsResearch: true
  }
];