import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

import { connect, useSelector } from 'react-redux';

const Navbar = ({items, quantity}) => {
    const classes = useStyles();
    const location = useLocation();

    const length = useSelector((state)=>state.cart.quantity);

    return (
        <>
          <AppBar position="fixed" className="classes.appBar" color="inherit">
              <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                      QikServe
                  </Typography>
                  <div className={classes.grow} />
                  {location.pathname === '/' && (
                  <div className={classes.button}>
                      <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={length} color="secondary">
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                    </div>) }
              </Toolbar>
          </AppBar>
        </>
    )
}

export default connect(state => ({
    items: state.items,
    quantity: state.quantity
}))(Navbar);
