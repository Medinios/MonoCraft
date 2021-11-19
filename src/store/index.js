import React, { useReducer } from 'react';
const Context = React.createContext();


// Application state initial value
const initialState = {
    amount: 0,
    bars: {},
    weapons: [],
    prices: {},
    totalPrice: 0
}

const addWeapon = (state, newWeapon) => {
    const weapons = [...state.weapons, newWeapon];
    let total = state.bars;
    let sumOfWeapons = state.amount;

    const weapon = weapons[weapons.length - 1];
    sumOfWeapons += weapon.amount;
    const weaponKeys = Object.keys(weapon.data[0].bars);
    weaponKeys.map((key) => {
        if(weapons.hasOwnProperty(key)) {
            total[key] += weapon.data[0].bars[key];
        } else {
            total[key] = weapon.data[0].bars[key];
        }
    });
    return {...state, weapons: weapons, amount: sumOfWeapons, bars: total};
}

const changePrices = (state, prices) => {
    const barsKeys = Object.keys(state.bars);
    let sumPrice = 0;
    debugger
    barsKeys.map((key) => {
        sumPrice += (state.bars[key] * 1.5) * prices[key];
    });
    return {...state , prices: prices, totalPrice: sumPrice}; 
}

export const ApplicationContext = React.createContext();
export const ApplicationContextProvider = ({ children }) => {
    const reducer = (state = initialState, { type, payload }) => {
        let newState;
        switch(type) {
            case 'add_weapon':
                newState = addWeapon(state, payload);
                return newState;
            case 'clear_all_list':
                return initialState;
            case 'change_prices':
                 newState = changePrices(state, payload);
                return newState;
            default:
                return state;    
        }
    }

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <ApplicationContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </ApplicationContext.Provider>
    )
}
export default Context;
