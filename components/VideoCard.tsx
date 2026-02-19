'use client';

import { ArrowUpRight } from 'lucide-react';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    summary?: string;
    keyPoints?: string[];
    category?: string;
    publishedAt: string;
    url: string;
  };
  onPlay: (url: string) => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Play Button */}
        <button
          onClick={() => onPlay(video.url)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
            <ArrowUpRight className="w-8 h-8 text-white" />
          </div>
        </button>

        {/* Category Badge */}
        {video.category && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white rounded-full text-xs font-medium">
              {video.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {video.title}
        </h3>
        
        <p className="text-purple-200 text-sm mb-3 line-clamp-2">
          {video.summary}
        </p>

        <div className="flex items-center justify-between text-xs text-purple-300 mb-3">
          <span>{formatDate(video.publishedAt)}</span>
        </div>

        {/* Key Points */}
        {video.keyPoints && video.keyPoints.length > 0 && (
          <div className="space-y-1 mb-4">
            {video.keyPoints.slice(0, 2).map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-purple-200 text-sm line-clamp-1">{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => onPlay(video.url)}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
        >
          Watch on YouTube
        </button>
      </div>
    </div>
  );
}