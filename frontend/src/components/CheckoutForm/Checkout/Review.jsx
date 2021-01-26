import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ cart, products, totalPromos }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>Order summary</Typography>
            <List disablePadding>
                {cart.items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={products.filter(item => item.id === product.id)[0].name} secondary={`Quantity: ${product.qty}`} />
                        <Typography variant="body2">{products.filter(item => item.id === product.id)[0].price}￠</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="Total" secondary="Promos" />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        {cart.subtotal} ￠
                        <br />
                        -{totalPromos} ￠
                    </Typography>
                </ListItem>
            </List>
        </>
    );
}
export default Review;