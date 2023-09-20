import React, { useEffect, useState } from 'react';

const Counter = () => {
    // Number of days wanted for countdown
    const dayNum = 8;
    // Initial seconds of 8 days
    const initialSeconds = dayNum * 24 * 60 * 60;
    const [seconds, setSeconds] = useState(initialSeconds);
    const remainingSeconds = seconds % 60;

    // Format a number with a leading zero if it's a single digit
    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    // Converting seconds into Days
    const days = Math.floor(seconds / 86400);
    // Converting seconds into Hours
    const hours = Math.floor((seconds % 86400) / 3600);
    // Converting seconds into Minutes
    const minutes = Math.floor((seconds % 3600) / 60);
    // Converting seconds into Seconds


    /* Initalizing counter interval on page load */
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [seconds]);

    return (
        <div className='flex mt-24'>
            {/* Start : Days  */}
            <div className='flex flex-col items-center mx-1 md:mx-4 relative'>
                <div className="bg-timer relative flex justify-center items-center overflow-hidden rounded-md mx-2">
                    <div className="overlay"></div>
                    <div className={`flip-container ${hours === 0 ? 'drop1' : ''}`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(days)}</span>
                    </div>
                    <div className={`flip-container-bottom ${hours === 0 ? 'below1' : ''}`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(days)}</span>
                    </div>
                    <span className='text-rose-400 absolute text-timer'>{formatNumber(days)}</span>
                    <span className='text-rose-400 text-timer'>{formatNumber(days)}</span>
                </div>
                <span className='text-gray-500 text-[8px] sm:text-sm tracking-[5px] mt-10'>DAYS</span>
            </div>
            {/* End : Days  */}

            {/* Start : Hours  */}
            <div className='flex flex-col items-center mx-1 md:mx-4 relative'>
                <div className="bg-timer relative flex justify-center items-center overflow-hidden rounded-md mx-2">
                    <div className="overlay"></div>
                    <div className={`flip-container ${minutes === 0 ? 'drop1' : ''}`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(hours)}</span>
                    </div>
                    <div className={`flip-container-bottom ${minutes === 0 ? 'below1' : ''}`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(hours)}</span>
                    </div>
                    <span className='text-rose-400 absolute text-timer'>{formatNumber(hours)}</span>
                    <span className='text-rose-400 text-timer'>{formatNumber(hours)}</span>
                </div>
                <span className='text-gray-500 text-[8px] sm:text-sm tracking-[5px] mt-10'>HOURS</span>
            </div>
            {/* End : Hours  */}

            {/* Start : Minutes  */}
            <div className='flex flex-col items-center mx-1 md:mx-4 relative'>
                <div className="bg-timer relative flex justify-center items-center overflow-hidden rounded-md mx-2">
                    <div className="overlay"></div>
                    <div className={`flip-container ${remainingSeconds === 0 ? 'drop1' : ''}`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(minutes)}</span>
                    </div>
                    <div className={`flip-container-bottom ${remainingSeconds === 0 ? 'below1' : ''}`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(minutes)}</span>
                    </div>
                    <span className='text-rose-400 absolute text-timer'>{formatNumber(minutes)}</span>
                    <span className='text-rose-400 text-timer'>{formatNumber(minutes)}</span>
                </div>
                <span className='text-gray-500 text-[8px] sm:text-sm tracking-[5px] mt-10'>MINUTES</span>
            </div>
            {/* End : Minutes  */}

            {/* Start : Seconds  */}
            <div className='flex flex-col items-center mx-1 md:mx-4 relative'>
                <div className="bg-timer relative flex justify-center items-center overflow-hidden rounded-md mx-2">
                    <div className="overlay"></div>
                    <div className={`flip-container drop`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(remainingSeconds)}</span>
                    </div>
                    <div className={`flip-container-bottom below`}>
                        <span className='text-rose-400 absolute text-timer'>{formatNumber(remainingSeconds)}</span>
                    </div>
                    <span className='text-rose-400 absolute text-timer'>{formatNumber(remainingSeconds)}</span>
                    <span className='text-rose-400 text-timer'>{formatNumber(remainingSeconds)}</span>
                </div>
                <span className='text-gray-500 text-[8px] sm:text-sm tracking-[5px] mt-10'>SECONDS</span>
            </div>
            {/* End : Seconds  */}
        </div>
    );
};

export default Counter;