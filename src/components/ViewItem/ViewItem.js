import React from 'react'
import './ViewItem.css';
import {connect} from 'react-redux';
import { addToCart } from '../../Redux/Shopping/shopping-actions';

const ViewItem = ({currentItem, addToCart}) => {
    return (
         <div key={currentItem.id} className="item-card">
                       <div className="product-image">
                           <img src={currentItem.image} height={300}  alt="" />
                       </div>
                       <div className="product-details">
                           <div className="product-title"><h2>{currentItem.title}</h2></div>
                           <div className="product-desc">{currentItem.description}</div>
                           <div className="product-price"><h3> Rs. {currentItem.price}</h3></div>

                       </div>

                       <div className="btn-grp">
                           
                              
                           
                           
                               <button onClick={() => {addToCart(currentItem.id)}} className='add-to-cart'>Add to cart</button>
                           
                           


                       </div>

                   </div>
    )
}

  const mapStateToProps = (state) => {
    return {
        currentItem : state.shop.currentItem,
    }
  }
  const mapDispatchToProps = (dispatch) => {
      return {
          addToCart : (id) => dispatch(addToCart(id)),
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)( ViewItem);
