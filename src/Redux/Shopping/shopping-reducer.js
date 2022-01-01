import * as ActionTypes from './shopping-types';
import products from '../../components/Products/Productdata';

const initial_state = {
    products : products,
    cart : [],
    currentItem : []
}

const shopReducer = (state = initial_state, action) => {
    switch (action.types) {
        case ActionTypes.Add_to_cart :
            return {};
        case ActionTypes.Remove_from_cart :
            return {};
        case ActionTypes.Adjust_quantity : 
        return {};
        case ActionTypes.Show_item : 
        return {};
        default :
        return state;
    }
};

export default shopReducer;
