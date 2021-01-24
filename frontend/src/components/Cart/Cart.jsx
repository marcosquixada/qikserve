import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleAddToCart, handleSubFromCart, handleRemoveFromCart, handleEmptyCart}) => {
    const isEmpty = cart.quantity === 0;
    const classes = useStyles();

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
                {cart.items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleAddToCart={handleAddToCart} handleSubFromCart={handleSubFromCart} handleRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal}￠</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
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

export default Cart
