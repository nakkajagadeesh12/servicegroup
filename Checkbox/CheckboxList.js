import React from 'react';
import './CheckboxList.scss';

const CheckboxList = ({ type = "checkbox", name, children, checked ,onChange}) => {
    return (
        <div>
            <div style={{ backgroundColor: "purple" }}>
                <input type={type} name={name} checked={checked} onChange={onChange}/> {name}
            </div>
            {children}
        </div>
    )
}

export default CheckboxList;