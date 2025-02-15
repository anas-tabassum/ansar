import React, { useState } from 'react';

const CustomDropdown = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select a service');

    const options = [
        { value: 'ticket', label: 'Réserver un billet' },
        { value: 'umra', label: 'Réserver une Omra' },
        { value: 'hajj', label: 'Réserver un Hajj' }
    ];

    const handleSelect = (value, label) => {
        setSelected(value);
        setIsOpen(false);
        onSelect?.(value);
    };

    return (
        <div className="relative w-full md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700"
            >
                <span className="font-medium">{selected}</span>
                <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-2 space-y-2 border border-gray-200 dark:border-gray-700">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleSelect(option.value, option.label)}
                            className="w-full px-4 py-3 text-left text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 flex items-center justify-between group"
                        >
                            <span className="font-medium">{option.label}</span>
                            <span className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">→</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;