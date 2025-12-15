import React from "react";

const VideoCard = ({ video }) => {
    // Guard clause - handle missing video data
    if (!video) {
        return (
            <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4">
                <p className="text-gray-500">Video not available</p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <video
                preload="metadata"
                className="w-full h-48 object-cover"
                src={video.url || ''}
                controls
                muted={true}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title || 'Untitled'}</h3>
            </div>
        </div>
    );
};

export default VideoCard;
