import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CssBaseline } from '@material-ui/core';

import useStyles from './styles';
import PaymentForm from './PaymentForm';

const steps = ['Shipping Address', 'Payment details'];

const Checkout = ({cart, products}) => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={1} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <PaymentForm cart={cart} products={products}/>
                </Paper>
            </main>
        </>
    )
}

export default Checkout
