import React from 'react';

import './Products.css';
import Product from './Product';
import {connect} from 'react-redux';





const Products = ({products}) => {

  

    return (
        

        <div className='product-list'>
           <br/>
           <br/>
            {
                products.map((item) => {
                   return (
                      <Product key={item.id} data = {item} />
                   );
                })
            }

        </div>
    )
}

const mapStateToProps = (state)  => {
    return {
        products : state.shop.products
    };
};

export default connect(mapStateToProps) (Products);

