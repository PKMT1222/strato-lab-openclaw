import { NextRequest, NextResponse } from 'next/server';

// YouTube Data API v3 configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

interface YouTubeScrapeRequest {
  channelId: string;
  maxResults?: number;
  influencerName: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: YouTubeScrapeRequest = await request.json();
    const { channelId, maxResults = 5, influencerName } = body;

    if (!YOUTUBE_API_KEY) {
      // Fallback to mock data when API key is not available
      return NextResponse.json({
        success: true,
        data: getMockDataForChannel(channelId, influencerName),
        message: 'Using mock data - add YOUTUBE_API_KEY to .env for real data'
      });
    }

    // Real YouTube API call
    const response = await fetch(
      `${YOUTUBE_API_BASE}/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
    );

    if (!response.ok) {
      throw new Error('YouTube API request failed');
    }

    const data = await response.json();
    
    // Transform YouTube API response to our format
    const videos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || `https://placehold.co/320x180/6366f1/ffffff/png?text=Video`,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      summary: extractSummary(item.snippet.description, item.snippet.title),
      keyPoints: extractKeyPoints(item.snippet.title, item.snippet.description),
      category: categorizeContent(item.snippet.title, influencerName),
      needsResearch: true
    }));

    return NextResponse.json({
      success: true,
      data: videos,
      scrapedAt: new Date().toISOString(),
      source: 'YouTube API v3'
    });

  } catch (error) {
    console.error('YouTube scraping error:', error);
    
    // Fallback to mock data on error
    return NextResponse.json({
      success: true,
      data: getMockDataForChannel('fallback', 'Unknown'),
      message: 'API error - using fallback data',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Helper functions for content processing
function extractSummary(description: string, title: string): string {
  // Extract first 2-3 sentences or first 200 characters
  const cleanDesc = description.replace(/http[s]?:\/\/\S+/g, ''); // Remove URLs
  const sentences = cleanDesc.split(/[.!?]+/).filter(s => s.trim().length > 10);
  const summary = sentences.slice(0, 2).join('. ').trim();
  return summary || `Discussion about ${title}`;
}

function extractKeyPoints(title: string, description: string): string[] {
  const keyTerms = [
    'AI', 'machine learning', 'technology', 'business', 'politics', 'economics',
    'podcast', 'interview', 'discussion', 'analysis', 'review', 'tutorial',
    'coding', 'programming', 'startup', 'investment', 'market', 'trends'
  ];
  
  const foundTerms = keyTerms.filter(term => 
    title.toLowerCase().includes(term.toLowerCase()) || 
    description.toLowerCase().includes(term.toLowerCase())
  );
  
  return [
    ...foundTerms.slice(0, 3),
    'Recent discussion and insights',
    'Expert analysis and perspectives'
  ];
}

function categorizeContent(title: string, influencerName: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('ai') || titleLower.includes('machine learning') || titleLower.includes('gpt')) {
    return 'AI & Technology';
  }
  if (titleLower.includes('business') || titleLower.includes('startup') || titleLower.includes('investment')) {
    return 'Business & Investing';
  }
  if (titleLower.includes('comedy') || titleLower.includes('comedian') || titleLower.includes('stand-up')) {
    return 'Comedy & Culture';
  }
  if (titleLower.includes('mma') || titleLower.includes('fighting') || titleLower.includes('ufc')) {
    return 'MMA & Sports';
  }
  if (titleLower.includes('politics') || titleLower.includes('trump') || titleLower.includes('election')) {
    return 'Politics & Culture';
  }
  
  // Default based on influencer
  switch (influencerName.toLowerCase()) {
    case 'matthew berman':
      return 'AI Tools';
    case 'lex fridman':
      return 'AI & Technology';
    case 'joe rogan':
      return 'Comedy & Culture';
    case 'all-in podcast':
      return 'Business & Investing';
    default:
      return 'General';
  }
}

function getMockDataForChannel(channelId: string, influencerName: string): any[] {
  // Return realistic mock data based on the influencer
  const mockData = {
    'matthew-berman': [
      {
        id: 'mock-mb-1',
        title: 'OpenClaw Multi-Agent Setup Tutorial',
        description: 'Complete walkthrough of setting up multi-agent workflows with OpenClaw on Mac Mini M4',
        publishedAt: '2026-02-18T10:00:00Z',
        thumbnail: 'https://placehold.co/320x180/9333ea/ffffff/png?text=OpenClaw+Tutorial',
        url: 'https://www.youtube.com/watch?v=mock-mb-1',
        summary: 'Step-by-step guide for configuring OpenClaw multi-agent system',
        keyPoints: ['Multi-agent configuration', 'Mac Mini M4 setup', 'Workflow automation'],
        category: 'AI Tools',
        needsResearch: true
      }
    ],
    'lex-fridman': [
      {
        id: 'mock-lex-1',
        title: 'AI Development Trends 2026',
        description: 'Deep discussion on current AI development trends and future implications',
        publishedAt: '2026-02-15T10:00:00Z',
        thumbnail: 'https://placehold.co/320x180/4f46e5/ffffff/png?text=AI+Trends',
        url: 'https://www.youtube.com/watch?v=mock-lex-1',
        summary: 'Expert analysis of AI development landscape',
        keyPoints: ['AI trends analysis', 'Future implications', 'Expert insights'],
        category: 'AI & Technology',
        needsResearch: true
      }
    ],
    'joe-rogan': [
      {
        id: 'mock-joe-1',
        title: 'Comedy in the Digital Age',
        description: 'Discussion about modern comedy and entertainment industry changes',
        publishedAt: '2026-02-12T10:00:00Z',
        thumbnail: 'https://placehold.co/320x180/dc2626/ffffff/png?text=Comedy+Discussion',
        url: 'https://www.youtube.com/watch?v=mock-joe-1',
        summary: 'Conversation about comedy and entertainment evolution',
        keyPoints: ['Comedy evolution', 'Digital platforms', 'Entertainment industry'],
        category: 'Comedy & Culture',
        needsResearch: true
      }
    ],
    'all-in-podcast': [
      {
        id: 'mock-allin-1',
        title: 'Market Analysis: Tech Stocks & AI Investment',
        description: 'Comprehensive analysis of current tech stock performance and AI investment opportunities',
        publishedAt: '2026-02-10T10:00:00Z',
        thumbnail: 'https://placehold.co/320x180/059669/ffffff/png?text=Market+Analysis',
        url: 'https://www.youtube.com/watch?v=mock-allin-1',
        summary: 'Market analysis covering tech stocks and AI investments',
        keyPoints: ['Tech stocks analysis', 'AI investments', 'Market outlook'],
        category: 'Business & Investing',
        needsResearch: true
      }
    ]
  };

  return mockData[channelId as keyof typeof mockData] || mockData['matthew-berman'];
}