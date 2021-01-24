import React, {useState, useEffect} from 'react';

import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import api from './services/api';

const App = () => {
    const [products, setProducts] = useState([
        //{ id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://imgcentauro-a.akamaihd.net/500x500/94313702/tenis-nike-revolution-5-masculino-img.jpg' },
        //{ id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://imgcentauro-a.akamaihd.net/500x500/94313702/tenis-nike-revolution-5-masculino-img.jpg' },
        //{ id: 3, name: 'Printer', description: 'Hp Deskjet.', price: '$7', image: 'https://imgcentauro-a.akamaihd.net/500x500/94313702/tenis-nike-revolution-5-masculino-img.jpg' },
    ]);
    const [cart, setCart] = useState({items:[], quantity: 0, subtotal: 0});

    const fetchProducts = async () => {
        const {data} = await api.get('/products');

        //console.log(data.filter(item => item.id == 'Dwt5F7KAhi')[0].name);

        setProducts(data);
    }

    const handleAddToCart = async (productId) => {
        let items = cart.items;
        let item = items.filter(item => item.id === productId)[0];
        if(!item){
            item = { id: productId, qty: 1 };
            cart.items.push(item);
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
        let item = items.filter(item => item.id === productId)[0];
        if (item.qty == 1) {
            items = cart.items.map((i) => {
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

        setCart({ ...cart, items: items, quantity: cart.quantity - 1, subtotal: cart.subtotal - products.filter(item => item.id == productId)[0].price });
    }

    const handleRemoveFromCart = async (productId) => {
        let qty = 0, subtotal = 0;
        let items = cart.items.filter((i) => {
            if (i.id !== productId){
                qty = i.qty;
                subtotal = i.qty * products.filter(item => item.id == productId)[0].price;
                return i;
            }
        });

        setCart({ ...cart, items: items, quantity: cart.quantity - qty, subtotal: cart.subtotal - subtotal });
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
                </Switch>
            </Router>
        </div>
    )
}

export default App;
