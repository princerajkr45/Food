import React, { useReducer, createContext } from 'react';
import { useContext } from 'react';

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: action.id, name: action.name, qty: action.qty ,size:action.size ,price: action.price ,img: action.img}]; 
       
        default:
            console.log("Erorr ")
            return state;
    }
}



export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};


export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)