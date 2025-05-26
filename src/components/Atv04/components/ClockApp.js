import { useState, useEffect } from 'react';
import Clock from './Clock.js';

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function ClockApp() {
    const time = useTime();
    return (
        <>
            <h1>Clock App</h1>
            <Clock time={time.toLocaleTimeString()}/>
        </>
    )
}