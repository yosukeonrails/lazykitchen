
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var visibility;
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import {addToShoppingCart , updateCartLength} from '../actions/index.js';


var findOneAndUpdate= function( index, newCartArray, addedItemData){

          if(!newCartArray[index]){
            console.log('could not find , adding item');
                newCartArray.push(addedItemData);
            return;
          }

          if(newCartArray[index].info.id === addedItemData.info.id){

             newCartArray[index] = addedItemData;
                var cartCopy= newCartArray;
                newCartArray=[];

                for(var i=0; cartCopy.length; i++){
                  newCartArray.push(cartCopy[i]);
                  return;

                }

            return;
          }

          return findOneAndUpdate(index+1 , newCartArray , addedItemData);

};

export class Item extends React.Component {

     constructor(props){
         super(props);

         this.setQuantity= this.setQuantity.bind(this);
         this.addToCart= this.addToCart.bind(this);
     }

     setQuantity(event){

       this.setState({
          itemQuantity:event.target.value
       });
       console.log(event.target.value);
       console.log(this.state);
     }

     addToCart(){
        this.setState({random:'random'});

        if(!this.state.itemQuantity){
          console.log('nothing to add');
        }

          var newCartArray= this.props.cartArray;

          var addedItemData= {
            info:this.props.itemData,
            quantity:this.state.itemQuantity,
            itemTotal:Math.round((this.state.itemQuantity * this.props.itemData.pricePerUnit) * 100) / 100,

          };

          findOneAndUpdate( 0 , newCartArray , addedItemData);

            var cartLength= newCartArray.length;
            this.props.dispatch(addToShoppingCart(newCartArray));
            this.props.dispatch(updateCartLength(cartLength));
            console.log('added');
            return;

     }

     render(){


var inputType="";
       $(document).ready(function () {
         $("#quantity").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                      return false;
           }
          });
       });

   if( this.props.itemData.stnUnit ==="pack"){
        inputType="quantity";
   }

       var picture;

      var id='#'+this.props.itemData.id;

        function show(){

             $(id).animate({
                opacity:'1'
             });

        }
        var exitTimeOut= function(){
          clearTimeout(fadein);
        };

        var fadein=  function(orderIndex){
                var time= orderIndex*100;

              setTimeout( show, time , exitTimeOut);
          };

          fadein(this.props.itemData.orderIndex);

     return (

                <div style={{padding:'0px' }} id={this.props.itemData.id} className="item-div w3-panel w3-card-8">

                    <div  style={{backgroundImage:'url('+this.props.itemData.pictureUrl+')'}} className="item-image"></div>
                      <div className="item-info">

                            <li className="item-name"><b>{this.props.itemData.name.eng}</b></li>
          <div  className="item-price"><span className="price"><b>{this.props.itemData.pricePerUnit}</b></span><span> ${this.props.itemData.stnCurrency} </span><span> per {this.props.itemData.stnUnit} </span></div>


                              <div className="item-quantity"  ><input  min="0" type="text"  name="quantity" id={inputType}  onChange={this.setQuantity} type="number"></input> <span>{this.props.itemData.stnUnit} </span>
                              <span  onClick={this.addToCart} className="shopping-cart">
                              <img src="http://i1149.photobucket.com/albums/o592/Yosuke_Ayrton_Hishinuma/1489142454_meanicons_59_zpsiacry9ga.png">
                              </img>
                              </span>

                            </div>

                      </div>
                </div>
     );
   }
}

var mapStateToProps=function(state){
   return {
     cartArray: state.shopping.cartArray
   }

}

  var ItemContainer= connect(mapStateToProps)(Item)

export default ItemContainer;
