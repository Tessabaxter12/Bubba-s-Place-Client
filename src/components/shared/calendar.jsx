import React from 'react';
import './Calendar.css';

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="header">
                <span className="prev-month">&lt;</span>
                <span className="month">February 2024</span>
                <span className="next-month">&gt;</span>
            </div>
            <div className="days">
            {Array.from({ length: 31 }, (_, index) => (
                <div key={index + 1} className="day">{index + 1}</div>
            ))}
            </div>
        </div>
    );
};

export default Calendar;