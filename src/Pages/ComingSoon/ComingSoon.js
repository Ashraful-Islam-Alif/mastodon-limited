import React from 'react';
import './ComingSoon.css'
const ComingSoon = ({ hoursMinSecs }) => {
    const { days = 29, hours = 24, minutes = 0, seconds = 0 } = hoursMinSecs;
    const [[day, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);


    const tick = () => {
        if (day === 0 && hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([day - 1, hrs - 1, 59, 59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([day - 1, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([day, hrs, mins - 1, 59]);
        } else {
            setTime([day, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    return (
        <div id='offer' className='text-4xl text-center p-8 font-medium shadow-lg shadow-gray-300/80'>
            <h2 className='font-bold'><span className='text-rose-500'>Flat</span> <span className='text-emerald-500'>Discount</span></h2>
            <h2 className='text-lg text-amber-600'>Coming Soon</h2>
            <p className='p-4 sm:text-lg lg:text-7xl font-extrabold text-rose-400'>{`
            ${day.toString().padStart(2, '0')}
            :${hrs.toString().padStart(2, '0')}
            :${mins.toString().padStart(2, '0')}
            :${secs.toString().padStart(2, '0')}`}
            </p>
            <p className=' daydate sm:text-lg md:text-xl lg:text-2xl lg:pl-4 text-red-400'><span className='md:pl-2 lg:pr-16'>Day</span> <span className='md:pl-2 lg:pr-14'>Date</span> <span className='md:pl-2 lg:pl-4'>Min</span> <span className='md:pl-2 lg:pl-20'>Sec</span></p>
        </div>
    );
};

export default ComingSoon;