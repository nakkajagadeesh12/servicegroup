import regionsCountries from './Regions';
import service from './Service';


const initialState = {
    regionsDetails: regionsCountries,
    serviceDetails: service,
    isAll: true,
}

export { initialState };