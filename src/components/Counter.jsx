import React, { useEffect, useState } from 'react';

const Counter = () => {
    // Number of days wanted for countdown
    const dayNum = 8;
    // Initial seconds of 8 days
    const initialSeconds = dayNum * 24 * 60 * 60;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isTimeUp, setIsTimeUp] = useState(false);

    /* Initalizing counter interval on page load */
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                setIsTimeUp(true);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [seconds]);

    const timerClass = isTimeUp ? 'top-flip' : '';
    // Converting seconds into Days
    const days = Math.floor(seconds / 86400);
    // Converting seconds into Hours
    const hours = Math.floor((seconds % 86400) / 3600);
    // Converting seconds into Minutes
    const minutes = Math.floor((seconds % 3600) / 60);
    // Converting seconds into Seconds
    const remainingSeconds = seconds % 60;

    return (
        <div className='flex mt-24'>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className={`absolute bg-timer1 ${hours === 0 ? 'top-flip' : ''}`}></div>
                <div className="bg-timer relative rounded-md mx-2">
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <p className={`text-rose-400 text-8xl p-4 ${hours === 0 ? 'top-flip' : ''}`}>{days}</p>
                </div>
                <p className='text-gray-500 tracking-[5px] text-xs mt-4'>DAYS</p>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className={`absolute bg-timer1 ${minutes === 0 ? 'top-flip' : ''}`}></div>
                <div className="bg-timer relative rounded-md mx-2">
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <p className={`text-rose-400 text-8xl p-4 ${minutes === 0 ? 'top-flip' : ''}`}>{hours}</p>
                </div>
                <p className='text-gray-500 tracking-[5px] text-xs mt-4'>HOURS</p>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className={`absolute bg-timer1 ${remainingSeconds === 0 ? 'top-flip' : ''}`}></div>
                <div className={`bg-timer relative rounded-md mx-2`}>
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <p className={`text-rose-400 text-8xl p-4 ${remainingSeconds === 0 ? 'top-flip' : ''}`}>{minutes}</p>
                </div>
                <p className='text-gray-500 tracking-[5px] text-xs mt-4'>MINUTES</p>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className={`absolute bg-timer1 top-flip`}></div>
                <div className="bg-timer relative rounded-md mx-2">
                    <div className="absolute circle top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <p className='text-rose-400 text-8xl top-flip'>{remainingSeconds}</p>
                </div>
                <p className='text-gray-500 tracking-[5px] text-xs mt-4'>SECONDS</p>
            </div>
        </div>
    );
};

export default Counter;