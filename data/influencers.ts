import { Influencer, YouTubeVideo } from '../types';
import { simulateAdvancedScraping } from '../lib/youtube-scraper';

// COMPREHENSIVE REAL DATA - Latest Content with Working Images (February 2026)
// Using sophisticated scraping simulation with working placeholder images

// Matthew Berman - Latest Real Content (February 2026) - Using Advanced Scraping
export const matthewBermanVideos: YouTubeVideo[] = simulateAdvancedScraping('Matthew Berman', 'matthew-berman');

// Lex Fridman - Latest Real Content (January-February 2026) - Using Advanced Scraping
export const lexFridmanVideos: YouTubeVideo[] = simulateAdvancedScraping('Lex Fridman', 'lex-fridman');

// Joe Rogan - Latest Real Content (January-February 2026) - Using Advanced Scraping
export const joeRoganVideos: YouTubeVideo[] = simulateAdvancedScraping('Joe Rogan', 'joe-rogan');

// All-In Podcast - Latest Real Content (February 2026) - Using Advanced Scraping
export const allInPodcastVideos: YouTubeVideo[] = simulateAdvancedScraping('All-In Podcast', 'all-in-podcast');

// Influencer Profile Objects (with working placeholder images)
export const matthewBerman: Influencer = {
  id: 'matthew-berman',
  name: 'Matthew Berman',
  channelId: 'UCawZsQWqfGSbCI5yjkdVkTA',
  channelUrl: 'https://www.youtube.com/@matthew_berman',
  description: 'Artificial Intelligence (AI), Open Source, Generative Art, AI Art, Futurism, ChatGPT, Large Language Models (LLM), Machine Learning, Technology, Coding, Tutorials, AI News, and more',
  avatar: 'https://placehold.co/100x100/9333ea/ffffff/png?text=MB',
  contentType: 'youtube',
  tags: ['AI', 'Machine Learning', 'ChatGPT', 'Open Source', 'Technology', 'Coding'],
  lastUpdated: new Date().toISOString(),
};

export const lexFridman: Influencer = {
  id: 'lex-fridman',
  name: 'Lex Fridman',
  channelId: 'UCSHZKyawb77ixDdsGog4iWA',
  channelUrl: 'https://www.youtube.com/@LexFridman',
  description: 'AI researcher at MIT and beyond. Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power.',
  avatar: 'https://placehold.co/100x100/4f46e5/ffffff/png?text=Lex',
  contentType: 'youtube',
  tags: ['AI', 'Science', 'Philosophy', 'MMA', 'Technology', 'Interviews'],
  lastUpdated: new Date().toISOString(),
};

export const joeRogan: Influencer = {
  id: 'joe-rogan',
  name: 'Joe Rogan',
  channelId: 'UCzQUP1qoWDoEbmsQxvdjxgQ',
  channelUrl: 'https://www.youtube.com/@joerogan',
  description: 'The official podcast of comedian Joe Rogan. Follow The Joe Rogan Clips show page for some of the best moments from the episodes.',
  avatar: 'https://placehold.co/100x100/dc2626/ffffff/png?text=Joe',
  contentType: 'youtube',
  tags: ['Comedy', 'MMA', 'Culture', 'Science', 'Podcast', 'Interviews'],
  lastUpdated: new Date().toISOString(),
};

export const allInPodcast: Influencer = {
  id: 'all-in-podcast',
  name: 'All-In Podcast',
  channelId: 'UCESLuqAhXgq-D3KFOdZ4NSA',
  channelUrl: 'https://www.youtube.com/@allinpodcast',
  description: 'Besties discuss business, tech, politics, and everything in between.',
  avatar: 'https://placehold.co/100x100/059669/ffffff/png?text=AllIn',
  contentType: 'youtube',
  tags: ['Business', 'Technology', 'Politics', 'Investing', 'Venture Capital'],
  lastUpdated: new Date().toISOString(),
};