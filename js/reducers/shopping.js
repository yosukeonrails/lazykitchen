import {handle} from 'redux-pack';
import {ADD_TO_SHOPPING_CART, UPDATE_CART_LENGTH,SET_INVOICE_LOG, CREATE_DIALOG,SUBMIT_ORDER_INFO} from '../actions/index.js';


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


    case SET_INVOICE_LOG:

        state.invoiceLog= action.invoiceLog;

        break;


  case SUBMIT_ORDER_INFO:

      state.orderInfo= action.orderInfo;

      break;
      }

  return {...state}
};
