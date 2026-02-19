'use client';

import { useState } from 'react';
import { 
  matthewBerman, 
  matthewBermanVideos, 
  lexFridman, 
  lexFridmanVideos,
  joeRogan,
  joeRoganVideos,
  allInPodcast,
  allInPodcastVideos
} from '../data/influencers';
import ResearchPanel from '../components/ResearchPanel';

// Combine all influencers and their content
const allInfluencers = [
  { ...matthewBerman, videos: matthewBermanVideos },
  { ...lexFridman, videos: lexFridmanVideos },
  { ...joeRogan, videos: joeRoganVideos },
  { ...allInPodcast, videos: allInPodcastVideos }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInfluencer, setSelectedInfluencer] = useState('all');
  const [videoResearchData, setVideoResearchData] = useState<Record<string, any>>({});

  // Get all videos from all influencers
  const allVideos = allInfluencers.flatMap(influencer => 
    influencer.videos.map(video => ({
      ...video,
      influencerId: influencer.id,
      influencerName: influencer.name
    }))
  );

  const categories = ['all', ...Array.from(new Set(allVideos.map(video => video.category).filter(Boolean)))];

  const filteredVideos = allVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.keyPoints?.some(point => point.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesInfluencer = selectedInfluencer === 'all' || video.influencerId === selectedInfluencer;
    
    return matchesSearch && matchesCategory && matchesInfluencer;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const handleWatchVideo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResearchComplete = (videoId: string, researchData: any) => {
    setVideoResearchData(prev => ({
      ...prev,
      [videoId]: researchData
    }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>Strato Lab</h1>
              <p style={{ color: '#c084fc', margin: '2px 0 0 0', fontSize: '0.875rem' }}>AI Influencer Knowledge Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        {/* Influencer Selection - Mobile Optimized */}
        <div className="compact-influencer">
          <img
            src={selectedInfluencer === 'all' 
              ? 'https://via.placeholder.com/48x48/9333ea/ffffff?text=AI'
              : allInfluencers.find(inf => inf.id === selectedInfluencer)?.avatar
            }
            alt={selectedInfluencer === 'all' ? 'All Influencers' : allInfluencers.find(inf => inf.id === selectedInfluencer)?.name}
            className="compact-influencer-avatar"
          />
          <div className="compact-influencer-info">
            <h2 className="compact-influencer-name">
              {selectedInfluencer === 'all' 
                ? 'All Influencers' 
                : allInfluencers.find(inf => inf.id === selectedInfluencer)?.name
              }
            </h2>
            <p className="compact-influencer-description">
              {selectedInfluencer === 'all' 
                ? 'Discover content from top AI influencers and thought leaders'
                : allInfluencers.find(inf => inf.id === selectedInfluencer)?.description
              }
            </p>
            {selectedInfluencer !== 'all' && (
              <div className="compact-influencer-tags">
                {allInfluencers.find(inf => inf.id === selectedInfluencer)?.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="compact-influencer-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <select
            value={selectedInfluencer}
            onChange={(e) => setSelectedInfluencer(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '6px',
              padding: '6px',
              fontSize: '0.875rem',
              cursor: 'pointer'
            }}
          >
            <option value="all" style={{ background: '#1a1a2e' }}>All</option>
            {allInfluencers.map(influencer => (
              <option key={influencer.id} value={influencer.id} style={{ background: '#1a1a2e' }}>
                {influencer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search and Filter - Mobile Optimized */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Search content, topics, or key points..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1rem'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category} style={{ background: '#1a1a2e' }}>
                {category === 'all' ? 'All Topics' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Content Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          color: '#e9d5ff',
          fontSize: '0.875rem'
        }}>
          <span>{filteredVideos.length} videos found</span>
          {selectedInfluencer !== 'all' && (
            <span style={{ cursor: 'pointer', color: '#c084fc' }} onClick={() => setSelectedInfluencer('all')}>
              View all →
            </span>
          )}
        </div>

        {/* Videos Grid - Mobile First */}
        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div
              key={video.id}
              className="video-card"
            >
              {/* Video Header - Compact */}
              <div style={{
                padding: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(0, 0, 0, 0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <img
                    src={allInfluencers.find(inf => inf.id === video.influencerId)?.avatar}
                    alt={video.influencerName}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%'
                    }}
                  />
                  <span style={{
                    color: '#c084fc',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {video.influencerName}
                  </span>
                  <span style={{
                    color: '#9ca3af',
                    fontSize: '0.75rem',
                    marginLeft: 'auto'
                  }}>
                    {formatDate(video.publishedAt)}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  margin: 0,
                  lineHeight: '1.4',
                  color: 'white'
                }}>
                  {video.title}
                </h3>
                {video.category && (
                  <span style={{
                    background: 'rgba(192, 132, 252, 0.2)',
                    color: '#c084fc',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    marginTop: '8px',
                    display: 'inline-block'
                  }}>
                    {video.category}
                  </span>
                )}
              </div>

              {/* Video Content */}
              <div style={{ padding: '16px' }}>
                {video.summary && (
                  <p style={{
                    color: '#e9d5ff',
                    marginBottom: '12px',
                    lineHeight: '1.5',
                    fontSize: '0.875rem'
                  }}>
                    {video.summary}
                  </p>
                )}

                {video.keyPoints && video.keyPoints.length > 0 && (
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{
                      color: 'white',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      fontSize: '0.875rem'
                    }}>
                      Key Points
                    </h4>
                    <ul style={{
                      margin: 0,
                      paddingLeft: '16px',
                      color: '#e9d5ff',
                      fontSize: '0.875rem'
                    }}>
                      {video.keyPoints.slice(0, 3).map((point, index) => (
                        <li key={index} style={{ marginBottom: '4px' }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <button
                    onClick={() => handleWatchVideo(video.url)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      background: '#9333ea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Watch Video
                  </button>
                  {video.needsResearch && (
                    <button
                      onClick={() => {
                        // This would trigger the research panel
                        const element = document.getElementById(`research-${video.id}`);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        padding: '10px',
                        background: 'transparent',
                        color: '#c084fc',
                        border: '1px solid rgba(192, 132, 252, 0.5)',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                      }}
                    >
                      Research
                    </button>
                  )}
                </div>
              </div>

              {/* Research Panel */}
              {videoResearchData[video.id] && (
                <div style={{
                  padding: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(0, 0, 0, 0.2)'
                }}>
                  <ResearchPanel
                    video={{
                      ...video,
                      researchData: videoResearchData[video.id]
                    }}
                    influencerName={video.influencerName}
                    onResearchComplete={(researchData) => handleResearchComplete(video.id, researchData)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px', color: '#e9d5ff' }}>
            <p style={{ fontSize: '1.125rem' }}>No content found matching your criteria.</p>
            <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '48px',
        padding: '24px 16px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: '#e9d5ff' }}>
          <p style={{ fontSize: '0.875rem' }}>Strato Lab - Knowledge Management for AI Influencers</p>
          <p style={{ fontSize: '0.75rem', marginTop: '4px' }}>Built with Next.js and React</p>
        </div>
      </footer>
    </div>
  );
}