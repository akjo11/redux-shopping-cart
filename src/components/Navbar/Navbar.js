import React from 'react';
import './Navbar.css';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
           <Link to ='/'> <h2 className='shopping-cart'>Shopping Cart</h2></Link>

            <Badge className='badge' color="secondary" badgeContent={2}>
          <div className="cart-icon"><ShoppingCartIcon fontSize='large' />{' '}</div>
        </Badge>
        </div>
    )
}

export default Navbar
