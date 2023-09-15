import React, { useEffect, useState } from 'react';

const Counter = () => {
    // Number of days wanted for countdown
    const dayNum = 8;
    const initialSeconds = dayNum * 24 * 60 * 60;
    const [seconds, setSeconds] = useState(initialSeconds);
    const remainingSeconds = seconds % 60;
    const [animationClass, setAnimationClass] = useState('drop')
    const [animationClass1, setAnimationClass1] = useState('below')
    const [resetAnimation, setResetAnimation] = useState(false)

    // Initial seconds of 8 days
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
                setAnimationClass((prevClass) => (prevClass === 'drop'? 'drop1' : 'drop'))
                setAnimationClass1((prevClass) => (prevClass === 'below'? 'below1' : 'below'))
                setResetAnimation(true)
            } else {
                clearInterval(timer);
            }
        }, 1000);
    
        return () => {
            clearInterval(timer);
        };
    }, [seconds]);
    
    const onANimationEnd = () => {
    setResetAnimation(false)
    }


    return (
        <div className='flex mt-24'>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative rounded-md mx-2">
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <span className={`text-rose-400 text-8xl p-4 ${hours === 0 ? '' : ''}`}>{formatNumber(days)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>DAYS</span>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative rounded-md mx-2">
                    <div className="absolute top-0 right-0 bottom-1/2 left-0 bg-[#252737] opacity-50"></div>
                    <span className={`text-rose-400 text-8xl p-4 ${minutes === 0 ? '' : ''}`}>{formatNumber(hours)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>HOURS</span>
            </div>
            <div className='flex flex-col items-center mx-4 relative'>
                <div className={`bg-timer relative rounded-md mx-2`}>
                    <div className={`flip-container ${remainingSeconds === 0 ? 'drop' : ''}`}>
                        <span className={`text-rose-400 absolute text-8xl${remainingSeconds === 0 ? 'drop' : ''}`}>{formatNumber(minutes)}</span>
                    </div>
                    <span className={`text-rose-400 text-8xl p-4 ${remainingSeconds === 0 ? '' : ''}`}>{formatNumber(minutes)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>MINUTES</span>
            </div>
            {/* Start : main working  */}
            <div className='flex flex-col items-center mx-4 relative'>
                <div className="bg-timer relative flex justify-center items-center overflow-hidden rounded-md mx-2">
                    <div className={`flip-container ${animationClass} ${resetAnimation ? 'pause-animation' : ''}`}>
                        <span className='text-rose-400 absolute text-8xl'>{formatNumber(remainingSeconds)}</span>
                    </div>
                    <div className={`flip-container-bottom ${animationClass1} ${resetAnimation ? 'pause-animation' : ''}`} onAnimationEnd={onANimationEnd}>
                        <span className='text-rose-400 absolute text-8xl'>{formatNumber(remainingSeconds)}</span>
                    </div>
                    <span className='text-rose-400 absolute text-8xl'>{formatNumber(remainingSeconds)}</span>
                    <span className='text-rose-400 text-8xl'>{formatNumber(remainingSeconds)}</span>
                </div>
                <span className='text-gray-500 tracking-[5px] text-xs mt-10'>SECONDS</span>
            </div>
            {/* End : main working  */}
        </div>
    );
};

export default Counter;