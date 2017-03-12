
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;

import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import ItemContainer from './item.js';

export class CartTray extends React.Component {

     constructor(props){
         super(props);
     }

    render(){

var trayArray=[];
        for(var i=0; i<this.props.cartArray.length; i++){
             trayArray.push( <ItemContainer itemData={this.props.cartArray[i]}/> );
        }
        console.log(this.props.cartArray);

     return (

                <div className="item-row">

                  {trayArray}

                </div>
     );
   }
}

var mapStateToProps=function(state){
console.log(state);
   return {
      cartArray:state.shopping.cartArray
   }

}

  var CartTrayContainer= connect(mapStateToProps)(CartTray)

export default CartTrayContainer;
