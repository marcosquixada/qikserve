import React, {useState, useEffect} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

import api from '../../../services/api';

const CartItem = ({ item, handleAddToCart, handleSubFromCart, handleRemoveFromCart}) => {
    const classes = useStyles();
    const [totalItem, setTotalItem] = useState(0);
    const [name, setName] = useState('');
    let [icon, setIcon] = useState('');

    const fetchCart = async () => {
        const { data } = await api.get('/products/' + item.id);

        setTotalItem(item.qty * data.price);
        setName(data.name);

        let importedIcon = await import('../../../assets/' + data.name.replace('!', '') + '.jpg');
        setIcon(importedIcon.default);
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <Card>
            <CardMedia image={icon} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="h5">{totalItem}￠</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleSubFromCart(item.id)}>-</Button>
                    <Typography>{item.qty}</Typography>
                    <Button type="button" size="small" onClick={() => handleAddToCart(item.id)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;
