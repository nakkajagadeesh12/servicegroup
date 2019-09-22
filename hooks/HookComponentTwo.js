import React, { useState } from 'react';

const HookComponentTwo = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
        </div>
    )
}

export default HookComponentTwo;