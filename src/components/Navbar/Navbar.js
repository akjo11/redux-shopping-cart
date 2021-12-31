import React from 'react';
import './Navbar.css';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Shopping Cart</h2>

            <Badge color="secondary" badgeContent={2}>
          <ShoppingCartIcon fontSize='large' />{" "}
        </Badge>
        </div>
    )
}

export default Navbar
