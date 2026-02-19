'use client';

import { useState } from 'react';
import { matthewBerman, matthewBermanVideos } from '../data/influencers';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(matthewBermanVideos.map(video => video.category).filter(Boolean)))];

  const filteredVideos = matthewBermanVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.keyPoints?.some(point => point.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
        padding: '24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>Strato Lab</h1>
              <p style={{ color: '#c084fc', margin: '4px 0 0 0' }}>AI Influencer Knowledge Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Influencer Profile */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <img
              src={matthewBerman.avatar}
              alt={matthewBerman.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid #c084fc'
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                {matthewBerman.name}
              </h2>
              <p style={{ color: '#e9d5ff', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                {matthewBerman.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {matthewBerman.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(192, 132, 252, 0.3)',
                    color: '#e9d5ff',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '0.875rem'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={matthewBerman.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#dc2626',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              YouTube Channel
            </a>
          </div>
        </div>

        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <input
            type="text"
            placeholder="Search videos, summaries, or key points..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
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
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Videos Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          {filteredVideos.map(video => (
            <div
              key={video.id}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: 'relative' }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                {video.category && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(192, 132, 252, 0.8)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {video.category}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  margin: '0 0 12px 0',
                  lineHeight: '1.4'
                }}>
                  {video.title}
                </h3>
                
                <div style={{
                  color: '#e9d5ff',
                  fontSize: '0.875rem',
                  marginBottom: '12px'
                }}>
                  {formatDate(video.publishedAt)}
                </div>

                {video.summary && (
                  <p style={{
                    color: '#e9d5ff',
                    marginBottom: '16px',
                    lineHeight: '1.5'
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
                      Key Points:
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

                <button
                  onClick={() => handleWatchVideo(video.url)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#9333ea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#7c3aed';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#9333ea';
                  }}
                >
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p style={{ color: '#e9d5ff', fontSize: '1.125rem' }}>
              No videos found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '64px',
        padding: '32px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: '#e9d5ff' }}>
          <p>Strato Lab - Knowledge Management for AI Influencers</p>
          <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>
            Built with Next.js and React
          </p>
        </div>
      </footer>
    </div>
  );
}