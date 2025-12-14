import React from 'react';

const VideoPlayer = ({ video, autoPlay }) => {
    // Guard clause - handle missing video data
    if (!video) {
        return (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
                <p className="text-gray-500">Video not available</p>
            </div>
        );
    }

    const getVideoUrl = () => {
        if (!video.url) return '';
        if (!autoPlay) return video.url;
        
        try {
            const url = new URL(video.url);
            url.searchParams.set('autoplay', '1');
            return url.toString();
        } catch (e) {
            // Handle invalid URLs gracefully
            return video.url;
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-black">
                <iframe
                    src={getVideoUrl()}
                    title={video.title || 'Video'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{video.title || 'Untitled'}</h2>
                
                {video.description && (
                    <div 
                        className="video-description text-gray-600"
                        dangerouslySetInnerHTML={{ __html: video.description }}
                    />
                )}
            </div>
            
            {/* styles unchanged */}
        </div>
    );
};

export default VideoPlayer;
