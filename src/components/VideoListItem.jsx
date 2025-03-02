import React from "react";

const VideoListItem = ({ video, isActive, onClick }) => {
    return (
        <div
            className={`flex gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded-lg ${
                isActive ? 'bg-gray-100' : 'bg-white'
            }`}
            onClick={() => onClick(video)}
        >
            <div className="relative w-40 h-24 flex-shrink-0 relative">
                <video
                    className="w-full h-full object-cover rounded-lg"
                    src={video.url}
                    preload="metadata"
                    muted
                    onLoadedData={(e) => {
                        e.target.currentTime = 0.1;
                    }}
                />
                <img width="100" height="100" src="/video-icon.svg" alt="video" className="block md:hidden absolute -top-1"/>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1 truncate">{video.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{video.description}</p>
            </div>
        </div>
    );
};

export default VideoListItem;