import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ video, autoPlay }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        }
    }, [video, autoPlay]);

    // Guard clause - handle missing video data
    if (!video) {
        return (
            <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden p-6">
                <p className="text-gray-500">Select a lesson to watch</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="aspect-video relative bg-black">
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    src={video.url}
                    controls
                    playsInline
                    key={video._id}
                    muted={autoPlay}
                />
            </div>
            <div className="p-6 space-y-4">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {video.title || 'Untitled'}
                    </h2>
                </div>
                <div className="prose max-w-none">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Description</h3>
                        <div 
                            className="text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: video.description || 'No description available' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
