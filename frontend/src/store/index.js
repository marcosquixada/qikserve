import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './ducks/products';
import cartReducer from './ducks/cart';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

/*
function updateCartQuantity(items){
    let qty = 0;

    for(let item of items){
        qty += item.qty;
    }

    return qty;
}

async function updateCartAmount(items){
    let amount = 0;
    
    let {data} = await api.get('/products');

    for (let item of items) {
        let price = data.filter(product => product.id === item.id)[0].price;

        amount += (item.qty * price);

        return amount;
    }
}

function reducer(state = INITIAL_STATE, action){
    if (action.type === 'TOGGLE_LESSON') {
        console.log(state.items.push({}));
        return {
            items: [{}, {}],
            quantity: 0,
            subtotal: 0
        }
    } else if (action.type === 'HANDLE_ADD_TO_CART') {
        //let response = await api.get('/products');

        return { ...state, items: [], quantity: 45, subtotal: 0 }

        /*console.log(state);
        let items = state.items;
        let item = items.filter(item => item.id === action.productId)[0];

        //console.log(item);
        if (!item) {
            item = { id: action.productId, qty: 1 }
            items.push(item);
        } else {
            item = { id: action.productId, qty: (item.qty + 1) }

            items = items.map((i) => {
                if (i.id === action.productId)
                    return item;
                return i;
            });
        }

        var valorInicial = 0;
        var soma = data.reduce(function (acumulador, valorAtual) {
            return acumulador + valorAtual.price;
        }, valorInicial);

        //console.log(soma);

        //let qty = updateCartQuantity(items);

        //return { ...state, items: [...items], quantity: qty, subtotal: soma }

    } else if (action.type === 'HANDLE_SUB_FROM_CART') {
        let items = state.items;
        let item = items.filter(item => item.id === action.productId)[0];
        if (item.qty === 1) {
            items = state.items.filter((i) => {
                if (i.id !== action.productId)
                    return i;
            });
        } else {
            item = { id: action.productId, qty: item.qty - 1 };

            items = items.map((i) => {
                if (i.id === action.productId)
                    return item;
                return i;
            });
        }

        let subtotal = updateCartAmount(items);
        let qty = updateCartQuantity(items);

        return { ...state, items: [...items], quantity: qty, subtotal: subtotal }

    } else if (action.type === 'HANDLE_REMOVE_FROM_CART') {
        let items = state.items.filter((i) => {
            if (i.id !== action.productId) {
                return i;
            }
        });

        let subtotal = updateCartAmount(items);
        let qty = updateCartQuantity(items);

        return { ...state, items: items, quantity: qty, subtotal: subtotal }
    } else if (action.type === 'HANDLE_EMPTY_CART') {
        return { ...state, items: [], quantity: 0, subtotal: 0 }
    }
    return state;
}

const store = createStore(reducer);

export default store;*/