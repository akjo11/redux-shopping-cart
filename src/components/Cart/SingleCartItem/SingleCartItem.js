import React,{useState} from 'react'
import '../../../components/Products/Products.css';
import './SingleCartItem.css';
import Delete from "@material-ui/icons/Delete";
import {connect} from 'react-redux';
import { AdjustQuantity , removeFromCart} from '../../../Redux/Shopping/shopping-actions';

const SingleCartItem = ({data,adjst_qty,remove}) => {
     const [input, setInput] = useState(data.qty)
     const eventHandler = (e) => {
           setInput(e.target.value);
           adjst_qty(data.id,e.target.value);



     }
    return (
        
        <div>
            <br />
            <br />
            <div key={data.id} className="product-card">
           
                       <div className="product-image">
                           <img src={data.image} height={300}  alt="asdf" />
                       </div>
                       <div className="product-details">
                           <div className="product-title"><h2>{data.title}</h2></div>
                           <div className="product-desc">{data.description}</div>
                           <div className="product-price"><h3>Rs. {data.price}</h3></div>

                       </div>

                       <div className="CartItemInput">
                                <label htmlFor={<h3> Qty.</h3>}></label>
                                <input type="number" min='1'  id = 'qty' name ='qty' value = {input} onChange={(eventHandler)} />
                

                       </div>

                       <div className="delete">
                            <Delete onClick = {() => remove(data.id)} style={{color: 'red'}} className='trash'/>
                       </div>

                   </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return{
         adjst_qty : (id,value) => dispatch(AdjustQuantity(id,value)),
         remove : (id) => dispatch( removeFromCart(id))
  }     
}

export default connect(null,mapDispatchToProps)(SingleCartItem);
