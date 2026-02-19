export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
  summary?: string;
  keyPoints?: string[];
  category?: string;
}

export interface Influencer {
  id: string;
  name: string;
  channelId: string;
  channelUrl: string;
  description: string;
  avatar: string;
  subscriberCount?: string;
  contentType: 'youtube' | 'blog' | 'podcast' | 'social';
  tags: string[];
  lastUpdated: string;
}

export interface ContentItem {
  id: string;
  influencerId: string;
  type: 'video' | 'article' | 'post' | 'podcast';
  title: string;
  content: string;
  url: string;
  publishedAt: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
  engagement?: {
    views?: number;
    likes?: number;
    comments?: number;
  };
}