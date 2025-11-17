import React from 'react';

const VideoPlayer = ({ video, autoPlay }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Video player section */}
            <div className="aspect-video bg-black">
                <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoPlay={autoPlay}
                />
            </div>
            
            {/* Video details section */}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                
                {/* OLD WAY - if description was displayed as plain text */}
                {/* <p className="text-gray-600">{video.description}</p> */}
                
                {/* NEW WAY - render HTML formatted description */}
                <div 
                    className="video-description text-gray-600"
                    dangerouslySetInnerHTML={{ __html: video.description }}
                />
            </div>
            
            {/* Add styles for the formatted content */}
            <style jsx>{`
                .video-description h1 { font-size: 1.5em; font-weight: bold; margin: 0.5em 0; }
                .video-description h2 { font-size: 1.3em; font-weight: bold; margin: 0.5em 0; }
                .video-description h3 { font-size: 1.1em; font-weight: bold; margin: 0.5em 0; }
                .video-description p { margin: 0.5em 0; }
                .video-description ul, .video-description ol { 
                    margin-left: 1.5em; 
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                }
                .video-description li { margin: 0.25em 0; }
                .video-description strong { font-weight: 600; }
                .video-description em { font-style: italic; }
                .video-description blockquote { 
                    border-left: 4px solid #e5e7eb; 
                    padding-left: 1em; 
                    margin: 1em 0;
                    color: #6b7280;
                }
                .video-description pre {
                    background-color: #f3f4f6;
                    padding: 1em;
                    border-radius: 0.375rem;
                    overflow-x: auto;
                    margin: 0.5em 0;
                }
                .video-description code {
                    background-color: #f3f4f6;
                    padding: 0.2em 0.4em;
                    border-radius: 0.25rem;
                    font-family: monospace;
                }
                .video-description a {
                    color: #2563eb;
                    text-decoration: underline;
                }
                .video-description a:hover {
                    color: #1d4ed8;
                }
            `}</style>
        </div>
    );
};

export default VideoPlayer;
