import React, { createContext, useContext, useState, useEffect } from 'react';

const YearContext = createContext();

export const YearProvider = ({ children }) => {
    const [years, setYears] = useState([]);

    // Load years from localStorage on component mount
    useEffect(() => {
        const storedYears = localStorage.getItem('lessonYears');
        if (storedYears) {
            setYears(JSON.parse(storedYears));
        }
    }, []);

    // Save years to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('lessonYears', JSON.stringify(years));
    }, [years]);

    const addYear = (year) => {
        if (year && !years.includes(year)) {
            setYears([...years, year]);
        }
    };

    const removeYear = (year) => {
        setYears(years.filter(y => y !== year));
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
