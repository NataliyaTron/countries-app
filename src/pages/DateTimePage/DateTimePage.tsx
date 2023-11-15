import React, { useEffect, useState } from "react";
import "./style.scss";

const DateTimePage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const currentDate = new Date().toLocaleDateString();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="time">
            <h2>Текущая дата: {currentDate}</h2>
            <h2>Текущее время: {currentTime.toLocaleTimeString()}</h2>
        </div>
    );
};

export default DateTimePage;
