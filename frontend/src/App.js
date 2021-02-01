import React from 'react';

import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Products />
                        </Route>
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                        <Route exact path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default App;
