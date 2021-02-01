import React, { useEffect } from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { addItem } from '../../store/ducks/cart';


function handleEmptyCart(items) {
    return {
        type: 'HANDLE_EMPTY_CART'
    }
}

export default function Cart(){
    const cart = useSelector((state)=>state.cart);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    var count = {};
    cart.cart.forEach(function(i) { count[i] = (count[i]||0) + 1;});

    var novo = Object.entries(count).map((el)=>{
        console.log(products.filter((product)=>product.id === el[0]));
        return {
            "id": el[0], 
            "qty": el[1], 
            "name": products.filter((product)=>product.id === el[0]).name, 
            "subtotal": (el[1] * products.filter((product)=>product.id === el[0])[0].price)
        }
    });

    const isEmpty = cart.length === 0;
    const classes = useStyles();
    var count = [];

    function addItemCart(product){
        dispatch(addItem(product));
    }

    const EmptyCart = () => (
        <>
            <Typography variant="subtitle1">You have no items in your Shopping Cart,
                <Link to="/" className={classes.link}> start adding some!</Link>
            </Typography>
        </>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {novo.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} quantity={item.qty} addItemCart={addItemCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal}￠</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => handleEmptyCart()}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

//export default connect(state => ({ items: state.items, subtotal: state.subtotal }))(Cart);
