import React from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../../Redux/Shopping/shopping-actions';
import {Link} from 'react-router-dom';
import { ShowItem } from '../../Redux/Shopping/shopping-actions';

const Product = ({data,addToCart, ShowItem}) => {
    return (
         <div key={data.id} className="product-card">
                       <div className="product-image">
                           <img src={data.image} height={300}  alt="" />
                       </div>
                       <div className="product-details">
                           <div className="product-title"><h2>{data.title}</h2></div>
                           <div className="product-desc">{data.description}</div>
                           <div className="product-price"><h3> Rs. {data.price}</h3></div>

                       </div>

                       <div className="btn-grp">
                           
                               
                               <Link to = {`/product/${data.id}`}>
                                 <button onClick={() => ShowItem(data)} className='view-item' >View Item</button>
                               </Link>
                           
                           
                               <button className='add-to-cart' onClick={() => addToCart(data.id)} >Add to cart</button>
                           
                           


                       </div>

                   </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
       addToCart : (id) => dispatch(addToCart(id)),
       ShowItem : (item) => dispatch(ShowItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Product);
