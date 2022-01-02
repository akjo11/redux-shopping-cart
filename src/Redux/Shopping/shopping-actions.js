import * as ActionTypes from './shopping-types';


export const addToCart = (itemID) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : {
            id : itemID
        }
        
    }
};

export const removeFromCart = (itemID) => {
    return {
        type : ActionTypes.Remove_from_cart,
        payload : {
            id : itemID
        }
    }
};

export const AdjustQuantity = (itemID, value) => {
    return {
        type : ActionTypes.Adjust_quantity,
        payload : {
            id : itemID,
            qty : value
        }
    }
};

export const ShowItem = (item) => {
    return {
        type : ActionTypes.Show_item,
        payload : item
            
        
    }
};