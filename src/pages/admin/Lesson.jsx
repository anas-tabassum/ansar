import React, { useEffect, useState } from "react";
import axios from "axios";
import AddLesson from "./AddLesson";

const Lesson = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    // Function to fetch lessons
    const fetchLessons = async () => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem("token");
            const { data: { data } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}lessons`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setLessons(data);
            setError("");
        } catch (err) {
            setError("Failed to load lessons");
        } finally {
            setLoading(false);
        }
    };

    // Use effect to fetch lessons when component mounts or refreshTrigger changes
    useEffect(() => {
        fetchLessons();
    }, [refreshTrigger]);

    // Function to refresh data
    const refreshData = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const handleUpdate = async (lesson) => {
        try {
            const token = sessionStorage.getItem("token");
            await axios.post(`${process.env.REACT_APP_BACKEND_HOST}admin/lesson-update`,
                { id: lesson._id, title: lesson.title, url: lesson.url, description: lesson.description },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            refreshData(); // Refresh data after successful update
        } catch (err) {
            alert("Failed to update lesson.");
        }
    };

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this lesson? This action cannot be undone.");

        if (!isConfirmed) {
            return;
        }
        try {
            const token = sessionStorage.getItem("token");
            await axios.get(`${process.env.REACT_APP_BACKEND_HOST}admin/lesson-delete/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            refreshData(); // Refresh data after successful deletion
        } catch (err) {
            alert("Failed to delete lesson.");
        }
    };

    return (
        <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-2xl font-semibold mb-6">Manage Lessons</h1>
            <AddLesson onLessonAdded={refreshData} />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                lessons.map((lesson) => (
                    <div key={lesson._id} className="bg-white rounded-md shadow-md p-6 mb-6">
                        <div className="mb-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none placeholder-gray-500"
                                placeholder="Title"
                                value={lesson.title}
                                onChange={(e) => setLessons(
                                    lessons.map(currentLesson => currentLesson._id === lesson._id ?
                                        { ...currentLesson, title: e.target.value } : currentLesson)
                                )}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none placeholder-gray-500"
                                placeholder="URL"
                                value={lesson.url}
                                onChange={(e) => setLessons(
                                    lessons.map(currentLesson => currentLesson._id === lesson._id ?
                                        { ...currentLesson, url: e.target.value } : currentLesson)
                                )}
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none placeholder-gray-500"
                                placeholder="Description"
                                rows={3}
                                value={lesson.description}
                                onChange={(e) => setLessons(
                                    lessons.map(currentLesson => currentLesson._id === lesson._id ?
                                        { ...currentLesson, description: e.target.value } : currentLesson)
                                )}
                            />
                        </div>
                        <div className="flex">
                            <button
                                className="px-4 py-2 bg-primary-btn hover:bg-primary-btn-hover text-white rounded-md"
                                onClick={() => handleUpdate(lesson)}
                            >
                                Update
                            </button>
                            <button
                                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-md ml-4"
                                onClick={() => handleDelete(lesson._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Lesson;