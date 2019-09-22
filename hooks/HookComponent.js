import React, { useState } from 'react';

const HookComponent = () => {
    const [count, setCount] = useState(0);
    const counter = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={counter}>counter {count}</button>
        </div>
    )
}

export default HookComponent;