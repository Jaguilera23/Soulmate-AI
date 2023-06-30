import { useState } from 'react';



const Counter = () => {

    const [counter, setCounter] = useState(0);
    const isValidCounter = counter > 0;
    const incrementCounter = () => setCounter((prevCounter) => prevCounter + 1 );
    const decrementCounter = () => {
        if(!isValidCounter){
            return;
        }
        setCounter((prevCounter) => prevCounter - 1)
        };

    return (
        <div className=' flex '>
            <button type="button" onClick={decrementCounter} className='border w-6 h-6 border-borderCard rounded flex items-center justify-center clash-regular' disabled={!isValidCounter} >
                -
            </button>
            <span className='px-3 clash-regular'>{counter}</span>
            <button type="button" className='border w-6 h-6 border-borderCard rounded flex items-center justify-center clash-regular' onClick={incrementCounter}>
                +
            </button>
        </div>
    )
}

export default Counter;