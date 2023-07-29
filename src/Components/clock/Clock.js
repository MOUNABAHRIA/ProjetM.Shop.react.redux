import React, { useEffect } from 'react'
import { useState } from 'react'
import '../clock/Clock.css'

const Clock = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [munites, setMunites] = useState()
    const [seconds, setSeconds] = useState()
    let interval;
    const CountDown = () =>{
    const destination= new Date('July 29, 2023').getTime()
         interval= setInterval(() => { 
        const now = new Date().getTime()
        const different= destination - now
        const days=Math.floor(different / (1000 * 60 * 60 * 24))
        console.log(days);
        const hours=Math.floor(different % (1000*60*60*24)/(1000*60*60))
        console.log(hours);
        const munites=Math.floor(different % (1000*60*60)/(1000*60))
        console.log(munites);
        const seconds=Math.floor(different % (1000*60)/(1000))
        console.log(seconds);
        if(destination < 0) clearInterval(interval.current)
         else {
            setDays(days)
            setHours(hours)
            setMunites(munites)
            setSeconds(seconds)

         }
    });
};
useEffect(() => {
    CountDown();
})
  return (
    <div className='clock_wapper'>
        <div className='clock_data'>
            <div className='data_clock'>
<h1 className='text_white'>{days}</h1>
<h5 className='text_white1'> days</h5>

            </div>
           <div><span className='clockk'>:</span></div>
        </div>
        <div className='clock_data'>
            <div className='data_clock'>
<h1 className='text_white'>{hours}</h1>
<h5 className='text_white'>hours</h5>

            </div>
            <span className='clockk'>:</span>
        </div>
        <div className='clock_data'>
            <div className='data_clock'>
<h1 className='text_white'>{munites}</h1>
<h5 className='text_white'>munites</h5>

            </div>
            <span className='clockk'>:</span>
        </div>
        <div className='clock_data'>
            <div className='data_clock'>
<h1 className='text_white'>{seconds}</h1>
<h5 className='text_white'>seconds</h5>

            </div>
            <span className='clockk'>:</span>

        </div>
    </div>
  )
}

export default Clock