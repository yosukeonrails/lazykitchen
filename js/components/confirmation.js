
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

var InvoiceItem=function(props){

  var totalSum=props.quantity*props.price;
  return(
      <div className="invoice-item-div">
        <span>{props.name} </span>  <span>{props.quantity} X {props.price}${props.currency} </span> = {totalSum}${props.currency}   <span>{props.name} </span>
      </div>
  );
};

var Invoice= function(props){
  var cartTotal=0;
  var InvoiceItems=[];
     for(var i=0 ; i<props.cartArray.length ; i++){
        InvoiceItems.push( <InvoiceItem name= {props.cartArray[i].info.name.eng} quantity={props.cartArray[i].quantity} price={props.cartArray[i].info.pricePerUnit} unit={props.cartArray[i].info.stnUnit} currency={props.cartArray[i].info.stnCurrency} /> )
           cartTotal=Math.round((cartTotal+props.cartArray[i].itemTotal) * 100) / 100 ;
     }

    return(
        <div className="invoice-div">
          <h1>Name:{props.orderInfo.name}</h1>
          <h2> Invoice sent to: {props.orderInfo.email}</h2>
            {InvoiceItems}
        <h2>Total: {cartTotal} ${props.cartArray[0].info.stnCurrency} </h2>
        </div>
    );
};

export class Confirmation extends React.Component {

     constructor(props){
         super(props);
          this.continueShopping=this.continueShopping.bind(this);
     }

     continueShopping(){
       var newCartArray=[];
      this.props.dispatch(addToShoppingCart(newCartArray));
       hashHistory.push('/');
     }

     render(){


          var email_subject= "Hello!"+this.props.orderInfo.name+"! Here is your order confirmation!";
         emailjs.send("default_service","lazyorder",{
         email_to: this.props.orderInfo.email,
         email_subject:email_subject,
         order_name:this.props.orderInfo.name,
         order_confirmation:this.props.orderInfo.confirmationCode,
         order_email:this.props.orderInfo.email,
         order_list: this.props.invoiceLog,
         order_total:this.props.orderInfo.cartTotal

         })
         .then(
         function(response) {
         console.log(" EMAIL SUCCESS", response);
         },
         function(error) {
         console.log("FAILED", error);
         }
        );

       window.scroll(0, 200)

     return (
            <div>
                <div  className="confirmation">

                <div className="alert alert-success">
                <strong>Success!</strong> Your Order was successful!.
                </div>

                  <h2>Here is your confirmation code: </h2>

                  <h1>{this.props.orderInfo.confirmationCode}</h1>

                  <Invoice cartArray={this.props.cartArray} orderInfo={this.props.orderInfo} />

                    <div className="thankyou-message">

                      <h1>Thank you for shopping with</h1>
                       <h2>LazyKitchen!</h2>

                    </div>
                      <Link to='/'> <button onClick={this.continueShopping} type="button" className="btn btn-info">Continue Shopping</button></Link>
                </div>

          </div>
     );
   }
}

var mapStateToProps=function(state){

   return {
       cartLength:state.shopping.cartLength,
       cartArray: state.shopping.cartArray,
       orderInfo:state.shopping.orderInfo,
       invoiceLog:state.shopping.invoiceLog
   }

}

  var ConfirmationContainer= connect(mapStateToProps)(Confirmation)

export default ConfirmationContainer;
