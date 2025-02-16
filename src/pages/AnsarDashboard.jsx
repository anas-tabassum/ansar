import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const options = [
        { name: "Lesson", path: "/admin/lesson" },
        { name: "Umrah", path: "/admin/umrah" },
        { name: "Hajj", path: "/admin/hajj" }
    ];

    return (
        <div className="h-[90vh] flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Admin Dashboard
            </h1>
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                {options?.map((option, index) => (
                    <div
                        key={index}
                        className="p-8 text-gray-900 text-center bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => navigate(option.path)}
                    >
                        <h2 className="text-2xl font-semibold">{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
