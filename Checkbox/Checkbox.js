import React from 'react';

const Checkbox = ({ type = "checkbox", name, checked, onChange }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                checked={checked}
                onChange={onChange}
            /> {name}
        </div>
    )
}

export default Checkbox;