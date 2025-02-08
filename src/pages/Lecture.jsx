import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from "../components/VideoPlayer";
import VideoListItem from "../components/VideoListItem";

const Lecture = () => {
    const [videos, setVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [mainVideoLoaded, setMainVideoLoaded] = useState(false);
    const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const { data: { data } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}lectures`);
                setVideos(data);
                if (data.length > 0 && !activeVideo) {
                    setActiveVideo(data[0]);
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, [activeVideo]);

    const handleVideoSelect = (video) => {
        setActiveVideo(video);
        setShouldAutoPlay(true);
    };

    const handleMainVideoLoad = () => {
        setMainVideoLoaded(true);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main video player */}
                {videos.length > 0 && activeVideo && (
                    <div className="lg:w-3/4">
                        <VideoPlayer
                            video={activeVideo}
                            onLoad={handleMainVideoLoad}
                            autoPlay={shouldAutoPlay}
                        />
                    </div>
                )}

                {mainVideoLoaded && (
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
                )}
            </div>
        </div>
    );
};

export default Lecture;