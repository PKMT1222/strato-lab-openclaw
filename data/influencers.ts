import { Influencer, YouTubeVideo } from '../types';

// Sample data for Matthew Berman based on recent research
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
    category: 'AI Tools'
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
    category: 'AI Tools'
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
    category: 'AI Tools'
  }
];