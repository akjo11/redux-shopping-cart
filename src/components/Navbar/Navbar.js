import React from 'react';
import {useState,useEffect} from 'react';
import './Navbar.css';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Navbar = ({cart}) => {

 
  
   const [cartCount, setCartCount] = useState(0)
   useEffect(() => {
   let count = 0;
    cart.forEach((item) => {count += item.qty})
    setCartCount(count)
 },[cart, cartCount])
 
    return (
        <div className="navbar">
           <Link to ='/' style={{textDecoration:"none"}}> <h2  className='shopping-cart'>Shopping Cart</h2></Link>

           
           <Link to = '/cart' style={{color:'yellow'}}>
            <Badge className='badge' color="secondary" badgeContent={cartCount}>
          <div className="cart-icon"><ShoppingCartIcon fontSize='large' />{' '}</div>
        </Badge></Link>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    cart : state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar);
