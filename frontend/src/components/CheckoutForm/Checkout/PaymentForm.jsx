import React, { useState, useEffect } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import Review from './Review';

const PaymentForm = ({ cart, products }) => {
    const [totalPromos, setTotalPromos] = useState(0);

    useEffect(() => {
        setTotalPromos(45);
    }, []);

    return (
        <>
            <Review cart={cart} products={products} totalPromos={totalPromos} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                {/* <CardElement /> */}
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined">Back</Button>
                    <Button type="submit" variant="contained" color="primary">
                Pay {cart.subtotal}￠
                    </Button>
                </div>
            </form>
        </>
    );
};
export default PaymentForm;