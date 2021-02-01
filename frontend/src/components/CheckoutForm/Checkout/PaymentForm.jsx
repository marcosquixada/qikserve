import React, { useState, useEffect } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import Review from './Review';

import api from '../../../services/api';

const PaymentForm = ({ cart, products }) => {
    let [totalPromos, setTotalPromos] = useState(0);

    /*async function getProductById(item) {
        try {
            console.log('Calling ' + item.id + '...');
            var response = await api.get('/products/' + item.id);
            if (response) {
                let price = response.data.price;
                let promotion = response.data.promotions[0];
                setTotalPromos(totalPromos => totalPromos + 1);
                return;
            }
            console.log("Not a valid response");
        } catch (error) {
            console.error(error);
        }
    }*/

    useEffect(() => {
        async function applyPromos() {
            for (let item of cart.items){
                let response = await api.get('/products/' + item.id);
                let price = response.data.price;
                let promotion = response.data.promotions[0];
                setTotalPromos(totalPromos => totalPromos + getPromotion(promotion, item, price));
            }
        }
        function getPromotion(promotion, item, price) {
            if(promotion && promotion.amount){
                return {
                    'QTY_BASED_PRICE_OVERRIDE': totalPromos + (Math.floor(item.qty / 2) * 399),
                    'BUY_X_GET_Y_FREE': totalPromos + (Math.floor(item.qty / 2) * price),
                    'FLAT_PERCENT': totalPromos + (item.qty * price * promotion.amount / 100)
                }[promotion.type];
            } else return 0;
        }
        applyPromos();
    }, [cart.items, totalPromos]);

    return (
        <>
            <Review cart={cart} products={products} totalPromos={totalPromos} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined">Back</Button>
                    <Button type="submit" variant="contained" color="primary">
                        Pay {cart.subtotal - totalPromos}￠
                    </Button>
                </div>
            </form>
        </>
    );
};
export default PaymentForm;