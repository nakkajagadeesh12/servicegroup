import React, { useReducer, useMemo } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';

const Store = React.createContext();

const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, "state");
    const value = useMemo(() => {
        return { state, dispatch };
    }, [state]);
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}


export { Store, StoreProvider };