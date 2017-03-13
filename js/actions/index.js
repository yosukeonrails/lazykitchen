
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
