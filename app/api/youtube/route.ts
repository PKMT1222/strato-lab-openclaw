import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get('channelId');
    const maxResults = searchParams.get('maxResults') || '5';
    
    if (!channelId) {
      return NextResponse.json({ error: 'Channel ID is required' }, { status: 400 });
    }

    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      // Return mock data for demo purposes
      return NextResponse.json({
        items: [
          {
            id: { videoId: 'demo1' },
            snippet: {
              title: 'Demo: AI Agent Development in 2026',
              description: 'Exploring the latest trends in AI agent development...',
              publishedAt: '2026-02-18T10:00:00Z',
              thumbnails: {
                high: { url: 'https://via.placeholder.com/320x180/9333ea/ffffff?text=AI+Development' }
              }
            }
          }
        ]
      });
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    );

    if (!response.ok) {
      throw new Error('YouTube API request failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('YouTube API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}