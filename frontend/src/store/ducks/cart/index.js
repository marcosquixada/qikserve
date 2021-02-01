import { createAction, createReducer }  from '@reduxjs/toolkit';

const INITIAL_STATE = {
    cart: [],
    quantity: 0,
    subtotal: 0
};

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => {
        return {...state, 
            cart: [...state.cart, action.payload.id], 
            quantity: state.quantity + 1,
            subtotal: state.subtotal + action.payload.price
        }
    },
    [removeItem.type]: (state, action) => state.filter((item) => item.id !== action.payload)
});