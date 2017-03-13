
require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var visibility;
import ReactPhoneInput from 'react-phone-input';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import {addToShoppingCart,updateCartLength} from '../actions/index.js';
import CheckOutItemContainer from './checkoutitem.js'

export class CheckOut extends React.Component {

     constructor(props){
         super(props);

     }


     render(){

       $('.appv2').css("right", "0px");
       $('.shopping-tray').css("width", "0px");

       var rowArray=[];
       var renderedRowArray=[];
       var groupOfThree=[];
       var trayItemArray=[];
       var cartTotal=0;

       if(this.props.cartArray.length > 0 ){
         console.log(this.props.cartArray);
           for(var i=0; i<this.props.cartArray.length; i++ ){

               cartTotal=Math.round((cartTotal+this.props.cartArray[i].itemTotal) * 100) / 100 ;

               trayItemArray.push(<CheckOutItemContainer  index={i} />)
           }

       }


     return (

                <div  className="checkout">
                <h1> Review your cart</h1>
                <div className="checkout-tray">
                 {trayItemArray}
                </div>
                    <div className="checkout-total">
                     <span>Your Total is : </span><span><b>{cartTotal} </b></span>$<span>USD</span>
                    </div>

                        <div className="checkout-form">
                            <div className="form-group">
                              <label for="usr">Name:</label>
                              <input type="text" className="form-control" id="usr" required></input>
                            </div>

                             <ReactPhoneInput defaultCountry={'hk'} />

                            <div className="form-group">
                              <label for="usr">Email:</label>
                              <input type="email" className="form-control" id="usr" required></input>
                            </div>
                        </div>

                           <button type="submit" class="btn btn-default">Submit Order</button>
                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {
       cartLength:state.shopping.cartLength,
       cartArray: state.shopping.cartArray
   }

}

  var CheckOutContainer= connect(mapStateToProps)(CheckOut)

export default CheckOutContainer;
