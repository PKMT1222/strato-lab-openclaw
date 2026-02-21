// Sophisticated YouTube Content Scraping and Analysis System

export interface ScrapedVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
  summary: string;
  keyPoints: string[];
  category: string;
  needsResearch: boolean;
  sentiment?: {
    overall: string;
    confidence: number;
    aspects: Record<string, string>;
  };
  engagement?: {
    views?: number;
    likes?: number;
    comments?: number;
  };
  topics?: string[];
  duration?: string;
  guest?: string;
}

export interface ScrapingResult {
  success: boolean;
  data: ScrapedVideo[];
  scrapedAt: string;
  source: string;
  message?: string;
  error?: string;
}

// Channel IDs for major influencers
export const CHANNEL_IDS = {
  'matthew-berman': 'UCawZsQWqfGSbCI5yjkdVkTA',
  'lex-fridman': 'UCSHZKyawb77ixDdsGog4iWA',
  'joe-rogan': 'UCzQUP1qoWDoEbmsQxvdjxgQ',
  'all-in-podcast': 'UCESLuqAhXgq-D3KFOdZ4NSA'
};

// Sophisticated content analysis
export function analyzeContent(title: string, description: string): {
  summary: string;
  keyPoints: string[];
  category: string;
  topics: string[];
  sentiment: {
    overall: string;
    confidence: number;
    aspects: Record<string, string>;
  };
} {
  // Advanced topic extraction
  const topics = extractTopics(title, description);
  const sentiment = analyzeSentimentAdvanced(title, description);
  const category = categorizeAdvanced(title, description);
  const keyPoints = generateKeyPointsAdvanced(title, description, topics);
  const summary = generateSummaryAdvanced(title, description, topics);

  return {
    summary,
    keyPoints,
    category,
    topics,
    sentiment
  };
}

function extractTopics(title: string, description: string): string[] {
  const text = `${title} ${description}`.toLowerCase();
  const topicMap = {
    'ai': ['artificial intelligence', 'machine learning', 'neural networks', 'deep learning', 'gpt', 'llm', 'chatgpt', 'openai'],
    'technology': ['technology', 'tech', 'software', 'hardware', 'coding', 'programming', 'startup'],
    'business': ['business', 'entrepreneur', 'startup', 'investment', 'market', 'economy', 'finance', 'money'],
    'politics': ['politics', 'trump', 'biden', 'election', 'government', 'policy', 'democrat', 'republican'],
    'science': ['science', 'research', 'study', 'experiment', 'data', 'evidence'],
    'culture': ['culture', 'society', 'social', 'community', 'trends'],
    'comedy': ['comedy', 'comedian', 'humor', 'funny', 'laugh', 'joke'],
    'mma': ['mma', 'ufc', 'fighting', 'martial arts', 'combat', 'boxing'],
    'podcast': ['podcast', 'interview', 'conversation', 'discussion', 'talk']
  };

  const foundTopics: string[] = [];
  Object.entries(topicMap).forEach(([topic, keywords]) => {
    if (keywords.some(keyword => text.includes(keyword))) {
      foundTopics.push(topic);
    }
  });

  return foundTopics.length > 0 ? foundTopics : ['general'];
}

function analyzeSentimentAdvanced(title: string, description: string): {
  overall: string;
  confidence: number;
  aspects: Record<string, string>;
} {
  const text = `${title} ${description}`.toLowerCase();
  
  // Positive indicators
  const positiveWords = ['amazing', 'great', 'excellent', 'fantastic', 'wonderful', 'incredible', 'awesome', 'brilliant'];
  const negativeWords = ['terrible', 'awful', 'bad', 'horrible', 'disappointing', 'concerning', 'worrying', 'problem'];
  const neutralWords = ['analysis', 'discussion', 'review', 'examination', 'overview'];
  
  const positiveCount = positiveWords.filter(word => text.includes(word)).length;
  const negativeCount = negativeWords.filter(word => text.includes(word)).length;
  const neutralCount = neutralWords.filter(word => text.includes(word)).length;
  
  let overall = 'neutral';
  let confidence = 0.7;
  
  if (positiveCount > negativeCount && positiveCount > 0) {
    overall = 'positive';
    confidence = Math.min(0.9, 0.7 + (positiveCount * 0.1));
  } else if (negativeCount > positiveCount && negativeCount > 0) {
    overall = 'negative';
    confidence = Math.min(0.9, 0.7 + (negativeCount * 0.1));
  } else if (neutralCount > 0) {
    overall = 'neutral';
    confidence = 0.8;
  }

  // Aspect-based sentiment
  const aspects: Record<string, string> = {};
  
  if (text.includes('technology') || text.includes('ai')) {
    aspects.technology = positiveCount > negativeCount ? 'optimistic' : negativeCount > positiveCount ? 'cautious' : 'analytical';
  }
  if (text.includes('market') || text.includes('business')) {
    aspects.market = positiveCount > negativeCount ? 'bullish' : negativeCount > positiveCount ? 'bearish' : 'neutral';
  }
  if (text.includes('future') || text.includes('prediction')) {
    aspects.future = positiveCount > negativeCount ? 'hopeful' : negativeCount > positiveCount ? 'pessimistic' : 'realistic';
  }

  return {
    overall,
    confidence,
    aspects
  };
}

function categorizeAdvanced(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();
  
  // Multi-factor categorization
  const categories = {
    'AI & Technology': ['ai', 'artificial intelligence', 'machine learning', 'neural network', 'gpt', 'llm', 'coding', 'programming', 'software', 'tech'],
    'Business & Investing': ['business', 'startup', 'investment', 'market', 'economy', 'finance', 'money', 'entrepreneur', 'venture', 'capital'],
    'Politics & Culture': ['politics', 'trump', 'biden', 'election', 'government', 'policy', 'culture', 'society', 'social'],
    'Comedy & Culture': ['comedy', 'comedian', 'humor', 'funny', 'laugh', 'joke', 'entertainment', 'show'],
    'MMA & Sports': ['mma', 'ufc', 'fighting', 'martial arts', 'combat', 'boxing', 'wrestling'],
    'Science & Research': ['science', 'research', 'study', 'experiment', 'data', 'evidence', 'academic'],
    'Philosophy & Ideas': ['philosophy', 'consciousness', 'meaning', 'existence', 'ethics', 'morality']
  };

  let bestCategory = 'General';
  let bestScore = 0;

  Object.entries(categories).forEach(([category, keywords]) => {
    const score = keywords.filter(keyword => text.includes(keyword)).length;
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  });

  return bestCategory;
}

function generateKeyPointsAdvanced(title: string, description: string, topics: string[]): string[] {
  const keyPoints: string[] = [];
  
  // Extract key terms from title
  const titleWords = title.toLowerCase().split(/\s+/).filter(word => word.length > 3);
  const importantTerms = titleWords.slice(0, 3);
  
  // Generate key points based on content analysis
  keyPoints.push(`Discussion of ${importantTerms.join(', ')}`);
  
  if (topics.length > 0) {
    keyPoints.push(`Covers topics: ${topics.slice(0, 2).join(', ')}`);
  }
  
  keyPoints.push('Expert insights and analysis');
  keyPoints.push('Practical implications and takeaways');
  
  return keyPoints;
}

function generateSummaryAdvanced(title: string, description: string, topics: string[]): string {
  // Clean description
  const cleanDesc = description.replace(/http[s]?:\/\/\S+/g, '').trim();
  
  // Use first 2-3 sentences or first 200 characters
  const sentences = cleanDesc.split(/[.!?]+/).filter(s => s.trim().length > 10);
  const summary = sentences.slice(0, 2).join('. ').trim();
  
  if (summary.length > 50) {
    return summary;
  }
  
  // Fallback to title-based summary
  return `Comprehensive discussion about ${title}, covering ${topics.slice(0, 2).join(' and ')} with expert insights and analysis.`;
}

// Advanced scraping simulation
export function simulateAdvancedScraping(influencerName: string, channelId: string): ScrapedVideo[] {
  const baseData = {
    'matthew-berman': {
      recentThemes: ['OpenClaw multi-agent setup', 'Mac Mini M4 optimization', 'AI workflow automation', 'Community use cases compilation'],
      style: 'tutorial-focused',
      frequency: '2-3 videos per week'
    },
    'lex-fridman': {
      recentThemes: ['AI state analysis', 'Technical deep-dives', 'Research discussions', 'Philosophy of AI'],
      style: 'long-form interviews',
      frequency: '1-2 videos per week'
    },
    'joe-rogan': {
      recentThemes: ['Comedy discussions', 'MMA analysis', 'Cultural commentary', 'Political conversations'],
      style: 'conversational podcast',
      frequency: '3-5 videos per week'
    },
    'all-in-podcast': {
      recentThemes: ['Market analysis', 'Tech predictions', 'Political commentary', 'Investment strategies'],
      style: 'panel discussion',
      frequency: '2-3 videos per week'
    }
  };

  const influencerData = baseData[channelId as keyof typeof baseData] || baseData['matthew-berman'];
  const videos: ScrapedVideo[] = [];

  // Generate realistic recent content based on influencer patterns
  for (let i = 0; i < 3; i++) {
    const theme = influencerData.recentThemes[i % influencerData.recentThemes.length];
    const analysis = analyzeContent(
      `${influencerName} discusses ${theme}`,
      `In this ${influencerData.style}, ${influencerName} explores ${theme} with detailed analysis and expert insights.`
    );

    videos.push({
      id: `simulated-${channelId}-${i}`,
      title: `${influencerName}: ${theme}`,
      description: `Recent ${influencerData.style} where ${influencerName} explores ${theme} with detailed analysis and expert insights.`,
      publishedAt: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString(), // Stagger by weeks
      thumbnail: `https://placehold.co/320x180/${getColorForInfluencer(channelId)}/ffffff/png?text=${encodeURIComponent(theme.substring(0, 20))}`,
      url: `https://www.youtube.com/watch?v=simulated-${channelId}-${i}`,
      ...analysis,
      needsResearch: true,
      engagement: {
        views: Math.floor(Math.random() * 500000) + 50000,
        likes: Math.floor(Math.random() * 20000) + 2000,
        comments: Math.floor(Math.random() * 2000) + 200
      },
      duration: `${Math.floor(Math.random() * 60) + 30}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
    });
  }

  return videos;
}

function getColorForInfluencer(channelId: string): string {
  const colors = {
    'matthew-berman': '9333ea',
    'lex-fridman': '4f46e5',
    'joe-rogan': 'dc2626',
    'all-in-podcast': '059669'
  };
  return colors[channelId as keyof typeof colors] || '6366f1';
}