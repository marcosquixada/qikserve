import React, {useState, useEffect} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

const CartItem = ({ item, quantity, addItemCart, handleSubFromCart, handleRemoveFromCart}) => {
    const classes = useStyles();
    const [totalItem, setTotalItem] = useState(0);
    const [name, setName] = useState('');
    let [icon, setIcon] = useState('');

    useEffect(() => {
        async function fetchCart() {
        //     const { data } = await api.get('/products/' + item.id);

        //     setTotalItem(item.qty * data.price);
        //     setName(data.name);

            //let importedIcon = await import('../../../assets/' + item.name.replace('!', '') + '.jpg');
            //setIcon(importedIcon.default);
        }
        fetchCart();
    }, [item.id, item.qty]);

    return (
        <Card>
            <CardMedia image={icon} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.subtotal}￠</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleSubFromCart(item.id)}>-</Button>
                    <Typography>{item.qty}</Typography>
                    <Button type="button" size="small" onClick={() => addItemCart(item.id)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;
