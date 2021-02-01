import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE=[];
// const INITIAL_STATE = {
//     items: [],  
//     quantity: 0,
//     subtotal: 0,
//     products: []
// };

export const addProduct = createAction('ADD_PRODUCT');
export const listProducts = createAction('LIST_PRODUCTS');

export default createReducer(INITIAL_STATE, {
    [addProduct.type]: (state, action) => {
        state = {
            items: [],  
            quantity: 1,
            subtotal: 0,
            products: [...action.payload]
        }
        return [...state, action.payload];
    },
    [listProducts.type]: (state, action) => {
        state = {
            items: [],  
            quantity: 0,
            subtotal: 0,
            products: [...action.payload]
        }
        return state.products;
    }
});