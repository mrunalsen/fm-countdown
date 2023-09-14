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
            } else {
                clearInterval(timer);
                setIsTimeUp(true);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [seconds]);
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
    const remainingSeconds = seconds % 60;

    return (
        <div className='flex mt-24'>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative rounded-md mx-2  ">
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <span className={`text-rose-400 text-8xl p-4 ${hours === 0 ? '' : ''}`}>{formatNumber(days)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>DAYS</span>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative rounded-md mx-2  ">
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <span className={`text-rose-400 text-8xl p-4 ${minutes === 0 ? '' : ''}`}>{formatNumber(hours)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>HOURS</span>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className={`bg-timer relative rounded-md mx-2  `}>
                    <div className={`flip-container ${remainingSeconds === 0 ? 'drop' : ''}`}>
                        <span className={`text-rose-400 absolute text-8xl${remainingSeconds === 0 ? 'drop' : ''}`}>{formatNumber(minutes)}</span>
                    </div>
                    <span className={`text-rose-400 text-8xl p-4 ${remainingSeconds === 0 ? '' : ''}`}>{formatNumber(minutes)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>MINUTES</span>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative overflow-hidden rounded-md mx-2  ">
                    <div className={`flip-container ${remainingSeconds === 0 ? 'drop' : ''}`}>
                        <span className={`text-rose-400 absolute text-8xl ${remainingSeconds === 0 ? 'drop' : ''}`}>{formatNumber(minutes)}</span>
                    </div>
                    <span className={`text-rose-400 text-8xl${remainingSeconds === 0 ? 'fade' : ''}`}>{formatNumber(minutes)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>SECONDS</span>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative flex justify-center items-center overflow-hidden rounded-md mx-2  ">
                    <div className="flip-container drop">
                        <span className='text-rose-400 absolute fade text-8xl'>{formatNumber(remainingSeconds)}</span>
                    </div>
                    <div className="flip-container-bottom below">
                        <span className='text-rose-400 absolute text-8xl'>{formatNumber(remainingSeconds)}</span>
                    </div>
                    <span className='text-rose-400 absolute text-8xl'>{formatNumber(remainingSeconds)}</span>
                    <span className='text-rose-400 fade text-8xl'>{formatNumber(remainingSeconds)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>SECONDS</span>
            </div>
        </div>
        // <div className='flex mt-24'>
        //     <div className='flex flex-col items-center mx-4 relative'>
        //         <div className={`absolute bg-timer1 ${hours === 0 ? '' : ''}`}></div>
        //         <div className="bg-timer relative rounded-md mx-2  ">
        //             <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
        //             <p className={`text-rose-400 text-8xl p-4 ${hours === 0 ? '' : ''}`}>{formatNumber(days)}</p>
        //         </div>
        //         <p className='text-gray-500 tracking-[5px] text-xs mt-10'>DAYS</p>
        //     </div>
        //     <div className='flex flex-col items-center mx-4 relative'>
        //         <div className={`absolute bg-timer1 ${minutes === 0 ? '' : ''}`}></div>
        //         <div className="bg-timer relative rounded-md mx-2  ">
        //             <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
        //             <p className={`text-rose-400 text-8xl p-4 ${minutes === 0 ? '' : ''}`}>{formatNumber(hours)}</p>
        //         </div>
        //         <p className='text-gray-500 tracking-[5px] text-xs mt-10'>HOURS</p>
        //     </div>
        //     <div className='flex flex-col items-center mx-4 relative'>
        //         <div className={`absolute bg-timer1 ${remainingSeconds === 0 ? '' : ''}`}></div>
        //         <div className={`bg-timer relative rounded-md mx-2  `}>
        //             <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
        //             <p className={`text-rose-400 text-8xl p-4 ${remainingSeconds === 0 ? '' : ''}`}>{formatNumber(minutes)}</p>
        //         </div>
        //         <p className='text-gray-500 tracking-[5px] text-xs mt-10'>MINUTES</p>
        //     </div>
        //     <div className='flex flex-col items-center mx-4 relative'>
        //         <div className={`absolute bg-timer1 `}></div>
        //         <div className="bg-timer relative rounded-md mx-2  ">
        //             <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
        //             <p className='text-rose-400 text-8xl '>{formatNumber(remainingSeconds)}</p>
        //         </div>
        //         <p className='text-gray-500 tracking-[5px] text-xs mt-10'>SECONDS</p>
        //     </div>
        // </div>
    );
};

export default Counter;