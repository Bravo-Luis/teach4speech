import { useState, useEffect, useRef } from 'react';


const CircularCountdown = ({ duration } : any) => {
    const [startTime, setStartTime] = useState(0);
    const [timeLeft, setTimeLeft] = useState(duration);
    const requestRef = useRef(0);

    useEffect(() => {
        setStartTime(Date.now());
        const updateCountdown = () => {
            const elapsedTime = Date.now() - startTime;
            const timeLeftInSeconds = Math.max(0, duration - elapsedTime / 1000);
            setTimeLeft(timeLeftInSeconds);
            if (timeLeftInSeconds > 0) {
                requestRef.current = requestAnimationFrame(updateCountdown);
            }
        };

        requestRef.current = requestAnimationFrame(updateCountdown);

        return () => cancelAnimationFrame(requestRef.current);
    }, [startTime, duration]);

    const strokeDashoffset = () => {
        const totalLength = 283; 
        return totalLength * (1 - timeLeft / duration);
    };

    return (
        <div className="countdown-wrapper">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="white"
                    stroke="white"
                    strokeWidth="10"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="purple"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset={strokeDashoffset()}
                    transform="rotate(-90 50 50)"
                />
                <text x="50%" y="58%" textAnchor="middle" fill="black" style={{
                    fontSize: "1.5em",
                    fontWeight: "bold"
                }}>
                    {Math.ceil(timeLeft)}s
                </text>
                
            </svg>
        </div>
    );
};

export default CircularCountdown;
