import React from 'react';
import products from './Productdata';
import './Products.css';





const Products = () => {

  const ShowItem = (id,image,title,description,price) => {
    localStorage.setItem('item-id',id);
    localStorage.setItem('item-image',image);
    localStorage.setItem('item-title',title);
    localStorage.setItem('item-description',description);
    localStorage.setItem('item-price',price);
    window.location.href = '/product/' + id
  }

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
                           
                               <button className='view-item' onClick={() => ShowItem(item.id,item.image,item.title,item.description,item.price) }>View Item</button>
                           
                           
                               <button className='add-to-cart'>Add to cart</button>
                           
                           


                       </div>

                   </div>
                   );
                })
            }

        </div>
    )
}

export default Products

