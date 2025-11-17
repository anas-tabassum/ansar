import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddLesson = ({onLessonAdded}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const quillRef = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        if (isOpen && quillRef.current && !quillInstance.current) {
            // Initialize Quill editor
            quillInstance.current = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
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
                },
                placeholder: 'Enter lesson description...'
            });

            // Set initial content if editing
            if (description) {
                quillInstance.current.root.innerHTML = description;
            }

            // Update state when content changes
            quillInstance.current.on('text-change', () => {
                const html = quillInstance.current.root.innerHTML;
                setDescription(html === '<p><br></p>' ? '' : html);
            });
        }

        // Cleanup
        return () => {
            if (!isOpen && quillInstance.current) {
                quillInstance.current = null;
            }
        };
    }, [isOpen]);

    const toggleModal = () => {
        if (isOpen && quillInstance.current) {
            quillInstance.current = null;
        }
        setIsOpen(!isOpen);
    };

    // Create a new lesson
    const handleCreate = async () => {
        try {
            try {
                new URL(url);
            } catch (err) {
                alert('Invalid URL');
                return;
            }
            const token = sessionStorage.getItem('token');
            await axios.post(
                `${process.env.REACT_APP_BACKEND_HOST}admin/lesson-add`,
                {
                    title,
                    url,
                    description,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setTitle('');
            setUrl('');
            setDescription('');
            if (quillInstance.current) {
                quillInstance.current.setText('');
            }
            toggleModal();
            onLessonAdded();
        } catch (err) {
            alert('Failed to create lesson.');
        }
    };

    return (
        <div>
            <div className="flex items-center justify-end">
                <button
                    className="py-2 px-6 bg-primary-btn hover:bg-primary-btn-hover text-white rounded transition font-medium duration-500"
                    onClick={toggleModal}
                >
                    Add new lesson
                </button>
            </div>

            <div className={`fixed z-50 overflow-y-auto top-0 w-full left-0 ${!isOpen ? 'hidden' : ''}`}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    {/* Overlay */}
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>

                    {/* Centering trick */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                    {/* Modal */}
                    <div
                        className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <label className="font-medium text-gray-800">Title</label>
                            <input
                                type="text"
                                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <label className="font-medium text-gray-800">Url</label>
                            <input
                                type="url"
                                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />

                            <label className="font-medium text-gray-800">Description</label>
                            <div className="mt-2 mb-3">
                                <div 
                                    ref={quillRef}
                                    className="bg-white rounded"
                                    style={{ minHeight: '150px' }}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button
                                type="button"
                                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                                onClick={toggleModal}
                            >
                                <i className="fas fa-times"></i> Cancel
                            </button>
                            <button
                                type="button"
                                className="py-2 px-4 bg-primary-btn hover:bg-primary-btn-hover text-white rounded font-medium mr-2 transition duration-500"
                                onClick={handleCreate}
                            >
                                <i className="fas fa-plus"></i> Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Quill styles customization */}
            <style jsx global>{`
                .ql-toolbar {
                    border-top-left-radius: 0.25rem;
                    border-top-right-radius: 0.25rem;
                    background-color: #f9fafb;
                }
                .ql-container {
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    font-size: 14px;
                }
                .ql-editor {
                    min-height: 120px;
                    max-height: 300px;
                    overflow-y: auto;
                }
                .ql-editor.ql-blank::before {
                    font-style: normal;
                    color: #9ca3af;
                }
            `}</style>
        </div>
    );
};

export default AddLesson;
