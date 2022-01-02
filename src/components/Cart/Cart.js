import React,{useState,useEffect} from 'react';
import SingleCartItem from './SingleCartItem/SingleCartItem';
import './Cart.css';
import {connect} from 'react-redux';
import swal from 'sweetalert';



const Cart = ({cart}) => {

     const [Totalprice, setTotalPrice] = useState(0);
     const [Totalitems, setTotalitems] = useState(0);

     useEffect(
         () => {
             let total_price = 0;
             let total_items = 0;
             cart.forEach((item) => total_price += (item.price*item.qty) )
             cart.forEach((item) => total_items += item.qty )
             setTotalPrice(total_price);
             setTotalitems(total_items);
         },[cart,Totalprice,Totalitems,setTotalPrice,setTotalitems]
     )

     const OnCheckOut = ()  => {
                     swal({
                    title: "Payment Successful",
                    text: "Have a nice day!",
                    icon: "success",
                    button: "OK",
});
     }
    return (
       
           (<div className='cart-and-checkout'>
            <div className="cart">
                {
                    cart.map((obj) => {return <SingleCartItem key={obj.id} data={obj}/>})
                }
            </div>
            <div className="checkout">
                
                <h1>Cart Summary</h1>
                <br />
                <h3>Total Price : Rs. {Totalprice}</h3>
                <h3>Total Items : Rs. {Totalitems}</h3>
                
               <button onClick={OnCheckOut}>CHECK OUT</button>


            </div>
             

        </div>)
      
      )
}

const mapStateToProps = (state) => {
        return {
            cart : state.shop.cart
        }
}

export default connect(mapStateToProps)(Cart);
