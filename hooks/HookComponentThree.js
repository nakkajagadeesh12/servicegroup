import React,{useState} from 'react';

const HookComponentThree = () => {
    const [details, updateDetails] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <input
                type="text"
                value={details.firstName}
                onChange={e => updateDetails({ ...details, firstName: e.target.value })} />
            <input type="text"
                value={details.lastName}
                onChange={e => updateDetails({ ...details, lastName: e.target.value })} />

            <h3>my name is {details.firstName} and my initial is {details.lastName}</h3>
        </div>
    )
}

export default HookComponentThree;