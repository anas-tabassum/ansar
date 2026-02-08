import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddLesson from "./AddLesson";
import { useYearContext } from "../../store/YearContext";

const Lesson = () => {
        const [lessons, setLessons] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("");
        const [refreshTrigger, setRefreshTrigger] = useState(0);
        const [showYearModal, setShowYearModal] = useState(false);
        const [yearInput, setYearInput] = useState("");
        const [selectedYear, setSelectedYear] = useState("");
        const { years, addYear } = useYearContext();

        const modules = {
                  toolbar: [
                              [{ 'header': [1, 2, 3, false] }],
                              ['bold', 'italic', 'underline', 'strike'],
                              [{ 'color': [] }, { 'background': [] }],
                              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                              [{ 'align': [] }],
                              ['blockquote', 'code-block'],
                              ['link'],
                              ['clean']
                            ]
        };

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

        useEffect(() => {
                  fetchLessons();
        }, [refreshTrigger]);

        // Auto-select the first year when years load
        useEffect(() => {
                  if (years.length > 0 && !selectedYear) {
                              setSelectedYear(years[0]);
                  }
        }, [years, selectedYear]);

        const refreshData = () => {
                  setRefreshTrigger(prev => prev + 1);
        };

        const handleAddYear = () => {
                  if (yearInput.trim()) {
                              addYear(yearInput.trim());
                              setYearInput("");
                              setShowYearModal(false);
                  }
        };

        const handleUpdate = async (lesson) => {
                  try {
                              const token = sessionStorage.getItem("token");
                              await axios.post(`${process.env.REACT_APP_BACKEND_HOST}admin/lesson-update`, {
                                            id: lesson._id,
                                            title: lesson.title,
                                            url: lesson.url,
                                            description: lesson.description,
                                                                          year: lesson.year || selectedYear,
                              }, {
                                            headers: { Authorization: `Bearer ${token}` }
                              });
                              refreshData();
                  } catch (err) {
                              alert("Failed to update lesson.");
                  }
        };

        const handleDelete = async (id) => {
                  const isConfirmed = window.confirm("Are you sure you want to delete this lesson? This action cannot be undone.");
                  if (!isConfirmed) return;

                  try {
                              const token = sessionStorage.getItem("token");
                              await axios.get(`${process.env.REACT_APP_BACKEND_HOST}admin/lesson-delete/${id}`, {
                                            headers: { Authorization: `Bearer ${token}` }
                              });
                              refreshData();
                  } catch (err) {
                              alert("Failed to delete lesson.");
                  }
        };

        // Filter lessons by the selected year
        const filteredLessons = selectedYear
          ? lessons.filter((lesson) => lesson.year === selectedYear)
                  : lessons;

        return (
                  <div className="container mx-auto max-w-3xl px-4">
                        <h1 className="text-2xl font-semibold mb-6">Manage Lessons</h1>
   setYearInput               
                        {/* Add New Year Button Section */}
                        <div className="mb-6">
                                <button
                                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md mb-4"
                                                onClick={() => setShowYearModal(true)}
                                              >
                                          Add New Year
                                </button>
                        
                              {/* Year Modal */}
                              {showYearModal && (
                                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                                                            <h2 className="text-xl font-semibold mb-4">Add New Year</h2>
                                                            <input
                                                                                  type="text"
                                                                                  value={yearInput}
                                                                                  onChange={(e) => setYearInput(e.target.value)}
                                                                                  placeholder="Enter year (e.g., 2025)"
                                                                                  className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none mb-4"
                                                                                  onKeyPress={(e) => e.key === 'Enter' && handleAddYear()}
                                                                                />
                                                            <div className="flex justify-end gap-2">
                                                                            <button
                                                                                                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
                                                                                                    onClick={() => { setShowYearModal(false); setYearInput(""); }}
                                                                                                  >
                                                                                              Cancel
                                                                            </button>
                                                                            <button
                                                                                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                                                                                                    onClick={handleAddYear}
                                                                                                  >
                                                                                              Create
                                                                            </button>
                                                            </div>
                                              </div>
                                  </div>
                                )}
                        
                              {/* Year Links Display */}
                                <div className="flex flex-wrap gap-2">
                                      {years.map((year) => (
                                    <a
                                                        key={year}
                                                        href="#"
                                                        onClick={(e) => {
                                                                              e.preventDefault();
                                                                              setSelectedYear(year);
                                                        }}
                                                        className={`px-3 py-1 rounded-md transition ${
                                                                              selectedYear === year
                                                                                ? 'bg-blue-600 text-white'
                                                                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                        }`}
                                                      >
                                          {year}
                                    </a>
                                  ))}
                                </div>
                        </div>
                  
                        <AddLesson onLessonAdded={refreshData} />
                  
                        {loading ? (
                                <p>Loading...</p>
                              ) : error ? (
                                <p className="text-red-500">{error}</p>
                              ) : filteredLessons.length === 0 ? (
                                <p className="text-gray-500 mt-4">No lessons found for {selectedYear || 'this year'}.</p>
                              ) : (
                                filteredLessons.map((lesson) => (
                                                <div key={lesson._id} className="bg-white rounded-md shadow-md p-6 mb-6">
                                                            <div className="mb-4">
                                                                          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                                                          <input
                                                                                                className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none"
                                                                                                placeholder="Title"
                                                                                                value={lesson.title}
                                                                                                onChange={(e) =>
                                                                                                                        setLessons(
                                                                                                                                                  lessons.map(l =>
                                                                                                                                                                              l._id === lesson._id ? { ...l, title: e.target.value } : l
                                                                                                                                                                            )
                                                                                                                                                )
                                                                                                      }
                                                                                              />
                                                            </div>
                                                
                                                            <div className="mb-4">
                                                                          <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                                                                          <input
                                                                                                className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none"
                                                                                                placeholder="URL"
                                                                                                value={lesson.url}
                                                                                                onChange={(e) =>
                                                                                                                        setLessons(
                                                                                                                                                  lessons.map(l =>
                                                                                                                                                                              l._id === lesson._id ? { ...l, url: e.target.value } : l
                                                                                                                                                                            )
                                                                                                                                                )
                                                                                                      }
                                                                                              />
                                                            </div>
                                                
                                                            <div className="mb-4">
                                                                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                                                          <ReactQuill
                                                                                                theme="snow"
                                                                                                value={lesson.description || ''}
                                                                                                onChange={(content) =>
                                                                                                                        setLessons(
                                                                                                                                                  lessons.map(l =>
                                                                                                                                                                              l._id === lesson._id ? { ...l, description: content } : l
                                                                                                                                                                            )
                                                                                                                                                )
                                                                                                      }
                                                                                                modules={modules}
                                                                                                style={{ backgroundColor: 'white' }}
                                                                                              />
                                                            </div>
                                                
                                                            <div className="flex mt-12">
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
