
import { push } from 'react-router-redux';

require('isomorphic-fetch');

export var ADD_TO_SHOPPING_CART='ADD_TO_SHOPPING_CART';

export var addToShoppingCart= function(cartArray){

      return{
        type:ADD_TO_SHOPPING_CART,
        cartArray:cartArray
      };

};


export var UPDATE_CART_LENGTH='UPDATE_CART_LENGTH';

export var updateCartLength= function(cartLength){

      return{
        type:UPDATE_CART_LENGTH,
        cartLength:cartLength
      };

};


export var SET_INVOICE_LOG='SET_INVOICE_LOG';

export var setInvoiceLog= function(invoiceLog){

      return{
        type:SET_INVOICE_LOG,
        invoiceLog:invoiceLog
      };

};



export var SUBMIT_ORDER_INFO='SUBMIT_ORDER_INFO';

export var submitOrderInfo= function(orderInfo){

      return{
        type:SUBMIT_ORDER_INFO,
        orderInfo:orderInfo
      };

};
