import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/fetchActions';
import { addItem } from '../../store/ducks/cart';

const Products = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    function addItemCart(product){
        dispatch(addItem(product));
    }

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} addItemCart={addItemCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;