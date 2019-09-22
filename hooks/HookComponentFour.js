import React, { useState } from 'react';

const HookComponentFour = () => {
    const [list, updateList] = useState([]);
    const update = () => {
        updateList([...list, { id: list.length, value: "jagath" }])
    }
    return (
        <div>
            <button onClick={update}>Add the Details</button>
            <ul>
                {
                    list.map(data => <li key={data.id}>{data.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookComponentFour;