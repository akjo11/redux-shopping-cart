import React from 'react'
import './ViewItem.css';

const ViewItem = () => {
    return (
         <div key={localStorage.getItem('item-id')} className="item-card">
                       <div className="product-image">
                           <img src={localStorage.getItem('item-image')} height={300}  alt="" />
                       </div>
                       <div className="product-details">
                           <div className="product-title"><h2>{localStorage.getItem('item-title')}</h2></div>
                           <div className="product-desc">{localStorage.getItem('item-description')}</div>
                           <div className="product-price"><h3>{localStorage.getItem('item-price')}</h3></div>

                       </div>

                       <div className="btn-grp">
                           
                              
                           
                           
                               <button className='add-to-cart'>Add to cart</button>
                           
                           


                       </div>

                   </div>
    )
}

export default ViewItem
