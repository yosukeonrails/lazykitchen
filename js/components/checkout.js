
require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var visibility;
var cartTotal=0;
import ReactPhoneInput from 'react-phone-input';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import {addToShoppingCart,updateCartLength, submitOrderInfo, setInvoiceLog} from '../actions/index.js';
import CheckOutItemContainer from './checkoutitem.js';
var emailWarning='none';
var nameWarning='none';
var rowArray=[];
var renderedRowArray=[];
var groupOfThree=[];
var trayItemArray=[];

var makeid=  function()  {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  };




var invoiceLog= function(array , index , lastItem){

        if(!array[index]){

            console.log('no more index');

            return lastItem ;
        }

    var log= ""+lastItem+" "+ array[index].info.name.eng + " X "+ array[index].quantity + " "+array[index].info.stnUnit + " X "+ array[index].info.pricePerUnit + " " +array[index].info.stnCurrency+ "$" +  " , ";
      console.log(log);

    return invoiceLog(array, index+1 , log);

};


export class CheckOut extends React.Component {



     constructor(props){



         super(props);




    if(this.props.cartArray.length > 0 ){
      console.log(this.props.cartArray);
        for(var i=0; i<this.props.cartArray.length; i++ ){

            cartTotal=Math.round((cartTotal+this.props.cartArray[i].itemTotal) * 100) / 100 ;

            trayItemArray.push(<CheckOutItemContainer  index={i} />)
        }

    }


         this.submitOrder=this.submitOrder.bind(this);
            this.fillEmail=this.fillEmail.bind(this);
               this.fillName=this.fillName.bind(this);
                  this.fillPhone=this.fillPhone.bind(this);

     }
     componentDidMount(){
       console.log('component Mounted');

       this.setState({
         email:'',
         name:''
       });
     }
     submitOrder(event){

  var log= invoiceLog(this.props.cartArray , 0 , "");
  console.log(log);
      this.props.dispatch( setInvoiceLog( log ) )  ;

        event.preventDefault();

          if(this.state.email.length ===0){
            emailWarning='block';
          }
          if(this.state.name.length === 0){
            nameWarning='block';
          }

          if(this.state.email.length > 0 || this.state.name.length > 0){

            var confirmationCode= makeid();
            console.log(confirmationCode);
            console.log(cartTotal);

            var userInfo={
              name:this.state.name,
              email:this.state.email,
              confirmationCode:confirmationCode,
              cartTotal:cartTotal.toString()+" USD$"
            };




            this.props.dispatch(submitOrderInfo(userInfo));

            this.setState({
                  email:'',
                  name:''
            });
                emailWarning='none';
              nameWarning='none';
             hashHistory.push('/confirmation');
              return;
          }

          console.log(emailWarning);
          this.setState({
            ramdom:"random"
          });
     }

        fillEmail(event){
           this.setState({
              email:event.target.value
           });
        }
        fillName(event){

          this.setState({
            name:event.target.value
          });

        }

        fillPhone(event){



        }



     render(){
       console.log(emailWarning);
       $('.appv2').css("right", "0px");
       $('.shopping-tray').css("width", "0px");






     return (

                <div  className="checkout">
                <h1> Review your cart</h1>
                <div className="checkout-tray">
                 {trayItemArray}
                 </div>
                    <div className="checkout-total">
                     <span>Your Total is : </span><span><b>{cartTotal} </b></span>$<span>USD</span>
                    </div>

                        <form>
                        <div className="checkout-form">
                            <div className="form-group">
                              <label for="usr">Name:</label>
                              <input type="text" onChange={this.fillName} className="form-control" id="usr" ></input>
                              <div style={{ display:nameWarning}} className="alert alert-danger">
                              <strong>Sorry</strong> You must fill out your name before submitting.
                            </div>
                            </div>

                          <ReactPhoneInput  defaultCountry={'hk'} />

                            <div className="form-group">
                              <label for="usr">Email:</label>
                                <input type="email" onChange={this.fillEmail} className="form-control" id="usr" ></input>
                                  <div style={{ display:emailWarning}} className="alert alert-danger">
                                  <strong>Sorry</strong> You must fill out an email before submitting.
                                </div>
                            </div>
                        </div>
                            <button onClick={this.submitOrder} type="submit" className="btn btn-default">Submit Order</button>
                        </form>

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
