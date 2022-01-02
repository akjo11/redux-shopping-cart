import * as ActionTypes from './shopping-types';
import products from '../../components/Products/Productdata';


const initial_state = {
    products : products,
    cart : [],
    currentItem : null
}

const shopReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART :
            const item = state.products.find(item => item.id === action.payload.id);
            const inCart = state.cart.find((obj) => obj.id === action.payload.id ? true : false);
            
            
            return {
                ...state,
                cart : inCart ? state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item ) : [...state.cart, {...item,qty:1} ],
            };
        case ActionTypes.Remove_from_cart :

            return {
                ...state, cart : state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ActionTypes.Adjust_quantity : 
        return {
            ...state,
            cart : state.cart.map((item) => item.id === action.payload.id ? {...item, qty : + action.payload.qty} : item),
        };
        case ActionTypes.Show_item : 
        return {
            ...state,
            currentItem : action.payload
        };
        default :
        return state;
    }
};

export default shopReducer;
