import {useState, useEffect} from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());

        },1000);

// When we use "return" inside useEffect callback, that is clean up. It will be call when component is destroyed.

        return() => clearInterval(timer);

    }, []);

  return (
    <div className='flex gap-3 justify-end mr-2 mb-1 text-blue-700 font-semibold md:font-bold md:mr-7'>
        
        <h1 className='hidden md:block'>{new Date().toLocaleDateString("en-GB")}</h1>
        <h1 className='hidden md:block'>{time}</h1>
    </div>
  )
}

export default Clock