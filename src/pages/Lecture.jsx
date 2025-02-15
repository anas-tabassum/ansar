import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from "../components/VideoPlayer";
import VideoListItem from "../components/VideoListItem";

const Lecture = () => {
    const [videos, setVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [autoPlay, isAutoPlay] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setIsLoading(true);
                const { data: { data } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}lectures`);
                setVideos(data);
                if (data.length > 0 && !activeVideo) {
                    setActiveVideo(data[0]);
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const handleVideoSelect = (video) => {
        setActiveVideo(video);
        isAutoPlay(true)
    };

    if (isLoading) {
        return (
            <div className="container mx-auto p-6 flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600" />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main video player */}
                {videos.length > 0 && activeVideo && (
                    <div className="lg:w-3/4">
                        <VideoPlayer
                            key={activeVideo._id} // Add key to force remount
                            video={activeVideo}
                            autoPlay={autoPlay}
                        />
                    </div>
                )}

                {/* Video list */}
                <div className="lg:w-1/4 bg-white rounded-xl shadow-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">More Videos</h3>
                    <div className="space-y-4">
                        {videos.map((video) => (
                            <VideoListItem
                                key={video._id}
                                video={video}
                                isActive={activeVideo && video._id === activeVideo._id}
                                onClick={handleVideoSelect}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lecture;