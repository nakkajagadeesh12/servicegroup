import React, { useContext } from 'react';
import CheckboxList from './CheckboxList';
import Checkbox from './Checkbox';
import { Store } from '../store';

const MainCheckbox = () => {

    const { state, dispatch } = useContext(Store)
    const { regionsDetails: { regions } } = state;
    return (
        <div className="container-fluid">
            {console.log(regions, "------>")}
            <div className="row">
                {
                    regions.map(region => {
                        return (
                            <div className="col-sm-2" key={region.region_id}>
                                <CheckboxList
                                    name={region.region_name}
                                    checked={region.checked}
                                    onChange={() => dispatch({ type: 'IS_ALL_CHANGE', value: region.region_id })}
                                >
                                    {
                                        region.countries.map(country => {
                                            return (
                                                <div key={country.country_id}>
                                                    <Checkbox
                                                        name={country.country_name}
                                                        checked={country.checked}
                                                        onChange={() => dispatch({ type: 'IS_ATLEAST_ONE', value: `${region.region_id}_${country.country_id}` })}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </CheckboxList>

                            </div>
                        );
                    })

                }
            </div>
        </div>
    )
}

export { MainCheckbox };