import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import { BACKEND_HOST } from '../config';

const Lecture = () => {
    const { year } = useParams();
    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                setLoading(true);
                const url = year
                    ? `${BACKEND_HOST}lessons/${year}`
                    : `${BACKEND_HOST}lessons`;

                const { data: { data } } = await axios.get(url);
                setLessons(data);
                if (data && data.length > 0) {
                    setSelectedLesson(data[0]);
                } else {
                    setSelectedLesson(null);
                }
            } catch (err) {
                setError('Failed to load lessons');
            } finally {
                setLoading(false);
            }
        };

        fetchLessons();
    }, [year]);

    if (loading) {
        return <div className="p-6 text-center">Loading lessons...</div>;
    }
    
    if (error) {
        return <div className="p-6 text-center text-red-500">{error}</div>;
    }
    
    if (lessons.length === 0) {
        return <div className="p-6 text-center text-gray-500">No lessons available{year ? ` for ${year}` : ''}</div>;
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                    <VideoPlayer video={selectedLesson} autoPlay={false} />
                </div>
                <div className="lg:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">
                        {year ? `Lessons ${year}` : 'All Lessons'}
                    </h3>
                    <div className="space-y-2 max-h-[600px] overflow-y-auto">
                        {lessons.map((lesson) => (
                            <button
                                key={lesson._id}
                                onClick={() => setSelectedLesson(lesson)}
                                className={`w-full text-left p-4 rounded-lg transition-colors ${
                                    selectedLesson?._id === lesson._id
                                        ? 'bg-blue-100 border-2 border-blue-500'
                                        : 'bg-white border border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                <p className="font-medium truncate">{lesson.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lecture;
