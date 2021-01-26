import React, {useState, useEffect} from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, handleAddToCart}) => {
    const classes = useStyles();
    let [icon, setIcon] = useState('');

    useEffect(async () => {
        let importedIcon = await import('../../../assets/' + product.name.replace('!','') + '.jpg');
        setIcon(importedIcon.default);
    }, []);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={icon} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}￠
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product.id)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
