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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get all videos from all influencers
  const allVideos = allInfluencers.flatMap(influencer => 
    influencer.videos.map(video => ({
      ...video,
      influencerId: influencer.id,
      influencerName: influencer.name,
      influencerAvatar: influencer.avatar
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
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                {viewMode === 'grid' ? '☰ List' : '⊞ Grid'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        
        {/* Influencer Selection Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '12px',
          marginBottom: '20px'
        }}>
          {/* All Influencers Card */}
          <div
            onClick={() => setSelectedInfluencer('all')}
            style={{
              background: selectedInfluencer === 'all' 
                ? 'linear-gradient(135deg, #9333ea, #7c3aed)' 
                : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px',
              border: selectedInfluencer === 'all' 
                ? '2px solid #c084fc' 
                : '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
            onMouseEnter={(e) => {
              if (selectedInfluencer !== 'all') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedInfluencer !== 'all') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #9333ea, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              AI
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                margin: '0 0 4px 0',
                color: 'white'
              }}>
                All Influencers
              </h3>
              <p style={{
                color: selectedInfluencer === 'all' ? '#e9d5ff' : '#c084fc',
                fontSize: '0.875rem',
                margin: 0,
                lineHeight: '1.4'
              }}>
                {allInfluencers.reduce((total, inf) => total + inf.videos.length, 0)} videos
              </p>
            </div>
          </div>

          {/* Individual Influencer Cards */}
          {allInfluencers.map(influencer => (
            <div
              key={influencer.id}
              onClick={() => setSelectedInfluencer(influencer.id)}
              style={{
                background: selectedInfluencer === influencer.id 
                  ? 'linear-gradient(135deg, #9333ea, #7c3aed)' 
                  : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '16px',
                border: selectedInfluencer === influencer.id 
                  ? '2px solid #c084fc' 
                  : '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                if (selectedInfluencer !== influencer.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedInfluencer !== influencer.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              <img
                src={influencer.avatar}
                alt={influencer.name}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '2px solid #c084fc',
                  flexShrink: 0
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '0 0 4px 0',
                  color: 'white',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {influencer.name}
                </h3>
                <p style={{
                  color: selectedInfluencer === influencer.id ? '#e9d5ff' : '#c084fc',
                  fontSize: '0.875rem',
                  margin: 0,
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {influencer.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  flexWrap: 'wrap',
                  marginTop: '6px'
                }}>
                  {influencer.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(192, 132, 252, 0.3)',
                      color: '#e9d5ff',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      fontSize: '0.7rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                  {influencer.tags.length > 2 && (
                    <span style={{
                      color: '#c084fc',
                      fontSize: '0.7rem',
                      padding: '2px 4px'
                    }}>
                      +{influencer.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
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

        {/* Videos Grid/List */}
        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div
              key={video.id}
              className="video-card"
            >
              {/* Video Header - Compact */}
              <div className="video-header-compact">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <img
                    src={video.influencerAvatar}
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
                <h3 className="video-title-compact">
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
              <div className="video-content-compact">
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