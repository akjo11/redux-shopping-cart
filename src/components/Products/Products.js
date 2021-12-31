import React from 'react';
import products from './Productdata';
import './Products.css'



const Products = () => {
    return (
        

        <div className='product-list'>
           <br/>
           <br/>
            {
                products.map((item) => {
                   return (
                       <div key={item.id} className="product-card">
                       <div className="product-image">
                           <img src={item.image} height={300}  alt="" />
                       </div>
                       <div className="product-details">
                           <div className="product-title"><h2>{item.title}</h2></div>
                           <div className="product-desc">{item.description}</div>
                           <div className="product-price"><h3>{item.price}</h3></div>

                       </div>

                       <div className="btn-grp">
                           <div className="view-item">
                               <button >View Item</button>
                           </div>
                           <div className="add-to-cart">
                               <button>Add to cart</button>
                           </div>
                           


                       </div>

                   </div>
                   );
                })
            }

        </div>
    )
}

export default Products

