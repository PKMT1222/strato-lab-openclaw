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
  needsResearch?: boolean;
  researchData?: ResearchData;
}

export interface ResearchData {
  enhancedSummary?: string;
  detailedKeyPoints?: string[];
  relatedTopics?: string[];
  sentimentAnalysis?: {
    overall: string;
    confidence: number;
    aspects: Record<string, string>;
  };
  researchTimestamp?: string;
  sources?: string[];
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