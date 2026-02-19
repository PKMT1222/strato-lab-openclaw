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

// Sample data based on recent research
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
    id: 'Q7r--i9lLck',
    title: 'OpenClaw Use Cases that are actually helpful...',
    description: 'Try Greptile for free for 14 days! https://greptile.com/go/bermanPrompts to get these use cases working: https://gist.github.com/mberman84/065631c62d6d8f30ec...',
    publishedAt: '2026-02-11T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/Q7r--i9lLck/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Q7r--i9lLck',
    summary: 'Matthew explores practical OpenClaw use cases that provide real value, including automation workflows and AI-powered development tools.',
    keyPoints: [
      '25 practical OpenClaw use cases',
      'Automation workflows for developers',
      'AI-powered development tools',
      'Real-world implementation examples'
    ],
    category: 'AI Tools',
    needsResearch: true
  },
  {
    id: '31A41ckhb7Q',
    title: 'It\'s finally happening...',
    description: '25 OpenClaw Use Cases! (eBook) 👇🏼https://www.forwardfuture.ai/p/what-people-are-actually-doing-with-openclaw-25-use-casesDownload The Subtle Art of Not Bei...',
    publishedAt: '2026-02-10T10:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/31A41ckhb7Q/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=31A41ckhb7Q',
    summary: 'Matthew announces his comprehensive eBook covering 25 practical OpenClaw use cases, sharing insights from his extensive testing and implementation.',
    keyPoints: [
      'Released comprehensive OpenClaw eBook',
      '25 detailed use cases included',
      'Based on extensive testing',
      'Practical implementation guide'
    ],
    category: 'AI Tools',
    needsResearch: true
  }
];

// Lex Fridman - Recent AI/Science Content
export const lexFridmanVideos: YouTubeVideo[] = [
  {
    id: 'demo-lex-1',
    title: 'Elon Musk: SpaceX, Mars, Tesla Autopilot, GPT-4, and Humanity\'s Future',
    description: 'Elon Musk discusses SpaceX Mars missions, Tesla Full Self-Driving, GPT-4 implications, and the future of humanity with AI.',
    publishedAt: '2026-02-15T10:00:00Z',
    thumbnail: 'https://via.placeholder.com/320x180/4f46e5/ffffff?text=Elon+Musk+Interview',
    url: 'https://www.youtube.com/watch?v=demo-lex-1',
    summary: 'Deep conversation with Elon Musk about SpaceX Mars colonization plans, Tesla\'s autonomous driving progress, and the transformative impact of GPT-4 on society.',
    keyPoints: [
      'Mars colonization timeline and challenges',
      'Tesla Full Self-Driving breakthroughs',
      'GPT-4 capabilities and limitations',
      'AI safety and alignment concerns',
      'Future of human civilization'
    ],
    category: 'AI & Technology',
    needsResearch: true
  },
  {
    id: 'demo-lex-2',
    title: 'Sam Altman: OpenAI, GPT-4, and the Future of AI',
    description: 'Sam Altman, CEO of OpenAI, discusses the development of GPT-4, AI safety, and the future of artificial general intelligence.',
    publishedAt: '2026-02-08T10:00:00Z',
    thumbnail: 'https://via.placeholder.com/320x180/7c3aed/ffffff?text=Sam+Altman+AI',
    url: 'https://www.youtube.com/watch?v=demo-lex-2',
    summary: 'Comprehensive discussion with OpenAI CEO about GPT-4 development process, AI safety protocols, and the path toward artificial general intelligence.',
    keyPoints: [
      'GPT-4 training and development insights',
      'AI alignment and safety challenges',
      'OpenAI\'s mission and governance',
      'Economic implications of AGI',
      'Timeline for AGI development'
    ],
    category: 'AI & Technology',
    needsResearch: true
  }
];

// Joe Rogan - Recent Podcast Episodes
export const joeRoganVideos: YouTubeVideo[] = [
  {
    id: 'demo-joe-1',
    title: 'The AI Revolution: What It Means for Humanity',
    description: 'Discussion about artificial intelligence, its rapid advancement, and what it means for the future of humanity.',
    publishedAt: '2026-02-12T10:00:00Z',
    thumbnail: 'https://via.placeholder.com/320x180/dc2626/ffffff?text=AI+Revolution',
    url: 'https://www.youtube.com/watch?v=demo-joe-1',
    summary: 'Wide-ranging conversation about the AI revolution, covering everything from ChatGPT to artificial general intelligence and its potential impact on society.',
    keyPoints: [
      'ChatGPT and mainstream AI adoption',
      'Job displacement concerns',
      'AI in creative industries',
      'Regulation and safety considerations',
      'Human vs AI capabilities'
    ],
    category: 'Technology & Society',
    needsResearch: true
  },
  {
    id: 'demo-joe-2',
    title: 'The Future of Work: AI, Automation, and Human Purpose',
    description: 'Exploring how AI and automation are changing the nature of work and what it means for human purpose and meaning.',
    publishedAt: '2026-02-05T10:00:00Z',
    thumbnail: 'https://via.placeholder.com/320x180/ef4444/ffffff?text=Future+of+Work',
    url: 'https://www.youtube.com/watch?v=demo-joe-2',
    summary: 'Thought-provoking discussion about the changing nature of work in the age of AI, automation, and what gives humans purpose and meaning.',
    keyPoints: [
      'Automation of human jobs',
      'Universal Basic Income discussion',
      'Redefining human purpose',
      'Creative vs routine work',
      'Education system adaptation'
    ],
    category: 'Technology & Society',
    needsResearch: true
  }
];

// All-In Podcast - Business & Tech Episodes
export const allInPodcastVideos: YouTubeVideo[] = [
  {
    id: 'demo-allin-1',
    title: 'AI Market Analysis: The $10 Trillion Opportunity',
    description: 'The besties discuss the massive AI market opportunity, investment strategies, and which companies are best positioned to benefit.',
    publishedAt: '2026-02-14T10:00:00Z',
    thumbnail: 'https://via.placeholder.com/320x180/059669/ffffff?text=AI+Market+Analysis',
    url: 'https://www.youtube.com/watch?v=demo-allin-1',
    summary: 'Deep dive into the AI market opportunity, analyzing investment potential, market size projections, and identifying key players in the AI ecosystem.',
    keyPoints: [
      '$10 trillion AI market projection',
      'NVIDIA and chip maker investments',
      'Cloud providers and AI infrastructure',
      'Startup ecosystem opportunities',
      'Regulatory considerations'
    ],
    category: 'Business & Investing',
    needsResearch: true
  },
  {
    id: 'demo-allin-2',
    title: 'Tech Earnings: AI Revenue and the New Gold Rush',
    description: 'Analysis of major tech earnings with focus on AI revenue streams and the new gold rush in artificial intelligence.',
    publishedAt: '2026-02-07T10:00:00Z',
    thumbnail: 'https://via.placeholder.com/320x180/0891b2/ffffff?text=Tech+Earnings',
    url: 'https://www.youtube.com/watch?v=demo-allin-2',
    summary: 'Comprehensive analysis of tech earnings reports, focusing on AI revenue streams, market valuations, and the comparison to historical gold rushes.',
    keyPoints: [
      'Big Tech AI revenue growth',
      'AI infrastructure spending',
      'Market valuation concerns',
      'Competitive landscape analysis',
      'Investment recommendations'
    ],
    category: 'Business & Investing',
    needsResearch: true
  }
];