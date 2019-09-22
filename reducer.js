import { initialState } from './initialState';
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_ALL_CHANGE':
            const allAegions =
                state.regionsDetails.regions.map(region => {
                    if (region.region_id === action.value) {
                        const country =
                            region.countries.map(country => { return { ...country, checked: !country.checked } })
                        return { ...region, checked: !region.checked, countries: country };
                    }
                    else {
                        return { ...region };
                    }
                })
            return {
                ...state,
                regionsDetails: {
                    ...state.regionsDetails,
                    regions: allAegions,
                }

            };
        case 'IS_ATLEAST_ONE':
            const atleastRegion = state.regionsDetails.regions.map(region => {
                let length = 0;
                if (region.region_id === action.value.split('_')[0]) {
                    const country = region.countries.map(country => {
                        if (country.country_id === action.value.split('_')[1]) {
                            if (!country.checked)
                                length++;
                            return { ...country, checked: !country.checked };
                        }
                        else {
                            if (country.checked)
                                length++;
                            return { ...country };
                        }
                    })
                    return { ...region, checked: region.countries.length === length, countries: country }
                }
                else {
                    return { ...region };
                }
            })
            return {
                ...state,
                regionsDetails: {
                    ...state.regionsDetails,
                    regions: atleastRegion
                }
            };
        default:
            return state;
    }
}

export { reducer };