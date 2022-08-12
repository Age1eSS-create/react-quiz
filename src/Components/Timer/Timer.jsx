import React, { useState , useEffect } from 'react';
import './Timer.scss';

const Timer = ({ initialMin,initialSec,flagFinish }) => {
    const [minutes , setMinutes] = useState(initialMin)
    const [seconds, setSeconds ] =  useState(initialSec);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });

  return (
    <div className='Timer'>
        <img src="./timer.gif" alt="" />
        <p>{minutes} : {seconds < 10 ?"0"+seconds : seconds}</p>
    </div>
  );
}

export default Timer;
