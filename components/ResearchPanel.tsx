'use client';

import { useState } from 'react';
import { Search, Brain, Clock, TrendingUp, BarChart3, ExternalLink } from 'lucide-react';

interface ResearchPanelProps {
  video: {
    id: string;
    title: string;
    description: string;
    url: string;
    researchData?: {
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
    };
  };
  influencerName: string;
  onResearchComplete: (researchData: any) => void;
}

export default function ResearchPanel({ video, influencerName, onResearchComplete }: ResearchPanelProps) {
  const [isResearching, setIsResearching] = useState(false);
  const [researchData, setResearchData] = useState(video.researchData);

  const handleResearch = async () => {
    setIsResearching(true);
    
    try {
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: video.id,
          title: video.title,
          description: video.description,
          influencerName: influencerName,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setResearchData(result.data);
        onResearchComplete(result.data);
      } else {
        console.error('Research failed:', result.error);
      }
    } catch (error) {
      console.error('Research error:', error);
    } finally {
      setIsResearching(false);
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive':
      case 'optimistic':
      case 'enthusiastic':
      case 'hopeful':
        return '#10b981'; // green
      case 'negative':
      case 'pessimistic':
        return '#ef4444'; // red
      case 'neutral':
      case 'cautious':
        return '#f59e0b'; // amber
      default:
        return '#6b7280'; // gray
    }
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '16px'
    }}>
      {/* Research Button */}
      {!researchData && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <button
            onClick={handleResearch}
            disabled={isResearching}
            style={{
              background: isResearching ? '#6b7280' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: isResearching ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 auto',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!isResearching) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Brain size={20} />
            {isResearching ? 'Researching...' : 'Deep Research This Content'}
          </button>
          <p style={{
            color: '#d1d5db',
            fontSize: '0.875rem',
            marginTop: '12px'
          }}>
            Click to generate enhanced summary, detailed analysis, and related topics
          </p>
        </div>
      )}

      {/* Research Results */}
      {researchData && (
        <div style={{ padding: '20px' }}>
          {/* Research Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Brain size={20} style={{ color: '#8b5cf6' }} />
              <h4 style={{
                margin: 0,
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}>
                AI Research Analysis
              </h4>
            </div>
            {researchData.researchTimestamp && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#9ca3af',
                fontSize: '0.75rem'
              }}>
                <Clock size={12} />
                {new Date(researchData.researchTimestamp).toLocaleDateString()}
              </div>
            )}
          </div>

          {/* Enhanced Summary */}
          {researchData.enhancedSummary && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{
                color: '#e5e7eb',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Search size={16} />
                Enhanced Summary
              </h5>
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6',
                margin: 0
              }}>
                {researchData.enhancedSummary}
              </p>
            </div>
          )}

          {/* Sentiment Analysis */}
          {researchData.sentimentAnalysis && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{
                color: '#e5e7eb',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <BarChart3 size={16} />
                Sentiment Analysis
              </h5>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    color: getSentimentColor(researchData.sentimentAnalysis.overall),
                    fontWeight: '600'
                  }}>
                    {researchData.sentimentAnalysis.overall}
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    ({Math.round(researchData.sentimentAnalysis.confidence * 100)}% confidence)
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {Object.entries(researchData.sentimentAnalysis.aspects).map(([aspect, sentiment]) => (
                    <span
                      key={aspect}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: getSentimentColor(sentiment),
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {aspect}: {sentiment}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Detailed Key Points */}
          {researchData.detailedKeyPoints && researchData.detailedKeyPoints.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{
                color: '#e5e7eb',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '0 0 8px 0'
              }}>
                Detailed Analysis
              </h5>
              <ul style={{
                margin: 0,
                paddingLeft: '16px',
                color: '#d1d5db'
              }}>
                {researchData.detailedKeyPoints.map((point, index) => (
                  <li key={index} style={{ marginBottom: '6px', lineHeight: '1.5' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Topics */}
          {researchData.relatedTopics && researchData.relatedTopics.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <h5 style={{
                color: '#e5e7eb',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <TrendingUp size={16} />
                Related Topics for Further Research
              </h5>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {researchData.relatedTopics.map((topic, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(139, 92, 246, 0.2)',
                      color: '#c4b5fd',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      border: '1px solid rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          {researchData.sources && (
            <div style={{
              fontSize: '0.75rem',
              color: '#9ca3af',
              textAlign: 'center',
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              Sources: {researchData.sources.join(', ')}
            </div>
          )}

          {/* Research Again Button */}
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              onClick={handleResearch}
              disabled={isResearching}
              style={{
                background: isResearching ? '#6b7280' : 'transparent',
                color: '#c4b5fd',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                cursor: isResearching ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Brain size={14} />
              {isResearching ? 'Refreshing...' : 'Refresh Research'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}