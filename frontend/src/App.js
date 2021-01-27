import React, {useState, useEffect} from 'react';

import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import api from './services/api';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({items:[], quantity: 0, subtotal: 0});

    const fetchProducts = async () => {
        const {data} = await api.get('/products');

        setProducts(data);
    }

    const handleAddToCart = async (productId) => {
        let items = cart.items;
        let item = items.filter(item => item.id === productId)[0];
        //if it´s not there, add
        if(!item){
            item = { id: productId, qty: 1 };
            cart.items.push(item);
        //else, increase qty
        } else {
            let qty = item.qty;
            item = {id: productId, qty: qty + 1};

            items = cart.items.map((i) => {
                if (i.id === productId)
                    return item;
                return i;
            });
        }

        setCart({ ...cart, items: items, quantity: cart.quantity + 1, subtotal: cart.subtotal + products.filter(item => item.id === productId)[0].price });
    }

    const handleSubFromCart = async (productId) => {
        let items = cart.items;
        console.log(items);
        let item = items.filter(item => item.id === productId)[0];
        console.log(item);
        if (item.qty === 1) {
            items = cart.items.filter((i) => {
                if (i.id !== productId)
                    return i;
            });
        } else {
            let qty = item.qty;
            item = { id: productId, qty: qty - 1 };

            items = cart.items.map((i) => {
                if (i.id === productId)
                    return item;
                return i;
            });
        }

        console.log(items);

        setCart({ ...cart, items: items, quantity: cart.quantity - 1, subtotal: cart.subtotal - products.filter(item => item.id === productId)[0].price });
    }

    const handleRemoveFromCart = async (productId) => {
        let qty = 0, price = 0;

        for(let item of cart.items){
            if (item.id == productId) {
                qty = item.qty;
                price = products.filter(item => item.id == productId)[0].price;
                break;
            }
        }
        let items = cart.items.filter((i) => {
            if (i.id !== productId){
                return i;
            }
        });

        setCart({ ...cart, items: items, quantity: cart.quantity - qty, subtotal: (cart.subtotal - (qty*price)) });

        if(items.length === 0)
            handleEmptyCart();
    }

    const handleEmptyCart = async () => {
        setCart({ items: [], quantity: 0, subtotal: 0 });
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    return (
        <div>
            <Router>
                <Navbar totalItems={cart.quantity} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} handleAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart}
                            handleAddToCart={handleAddToCart}
                            handleSubFromCart={handleSubFromCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} products={products}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
