import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const YearContext = createContext();

export const YearProvider = ({ children }) => {
    const [years, setYears] = useState([]);

    // Fetch distinct years from the backend lessons API on mount
    useEffect(() => {
        const fetchYears = async () => {
            try {
                const { data: { data } } = await axios.get(
                    `${process.env.REACT_APP_BACKEND_HOST}lessons`
                );
                // Extract unique years from lesson data
                const apiYears = [...new Set(
                    data.map(lesson => lesson.year).filter(Boolean)
                )].sort();

                // Merge with any locally stored years (admin may have added years with no lessons yet)
                const storedYears = localStorage.getItem('lessonYears');
                const localYears = storedYears ? JSON.parse(storedYears) : [];
                const merged = [...new Set([...apiYears, ...localYears])].sort();

                setYears(merged);
                localStorage.setItem('lessonYears', JSON.stringify(merged));
            } catch (err) {
                // Fallback to localStorage if API fails
                const storedYears = localStorage.getItem('lessonYears');
                if (storedYears) {
                    setYears(JSON.parse(storedYears));
                }
            }
        };

        fetchYears();
    }, []);

    const addYear = (year) => {
        if (year && !years.includes(year)) {
            const updated = [...years, year].sort();
            setYears(updated);
            localStorage.setItem('lessonYears', JSON.stringify(updated));
        }
    };

    const removeYear = (year) => {
        const updated = years.filter(y => y !== year);
        setYears(updated);
        localStorage.setItem('lessonYears', JSON.stringify(updated));
    };

    return (
        <YearContext.Provider value={{ years, addYear, removeYear }}>
            {children}
        </YearContext.Provider>
    );
};

export const useYearContext = () => {
    const context = React.useContext(YearContext);
    if (!context) {
        throw new Error('useYearContext must be used within a YearProvider');
    }
    return context;
};
