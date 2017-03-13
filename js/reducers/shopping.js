import {handle} from 'redux-pack';
import {ADD_TO_SHOPPING_CART, UPDATE_CART_LENGTH, CREATE_DIALOG} from '../actions/index.js';


var stateDefault = {

    cartArray:[]
};

export default function shopping(state, action) {

      state = state || stateDefault;
      switch (action.type) {


  
    case ADD_TO_SHOPPING_CART:

        state={
          cartArray:action.cartArray
        };

        break;

        case UPDATE_CART_LENGTH:

            state.cartLength= action.cartLength;

            break;

      }

  return {...state}
};
