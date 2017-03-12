
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
import {addToShoppingCart} from '../actions/index.js'

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

        var findSameAndUpdate= function(cartArray , itemData){
            console.log(itemData);
            if(cartArray[itemData.cartArrayIndex].id === itemData.id){

                  cartArray[itemData.cartArrayIndex] = itemData;
               console.log('UPDATED ONE');
            }

        };
        var cartArray= this.props.cartArray;

         if( !this.state.itemQuantity){

           return;
         }

        if(this.props.itemData.cartArrayIndex <= 0){

            this.props.itemData.quantity= this.state.itemQuantity;
              findSameAndUpdate(cartArray , this.props.itemData);
               this.props.dispatch(addToShoppingCart(cartArray));
              return;
        }

            this.props.itemData.cartArrayIndex= this.props.cartArray.length;
            this.props.itemData.quantity= this.state.itemQuantity;
            cartArray.push(this.props.itemData);
            this.props.dispatch(addToShoppingCart(cartArray));
            return;
     }

     render(){

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

                    <div  style={{backgroundImage:'url('+this.props.itemData.pictureUrl+')'}}className="item-image"></div>
                      <div className="item-info">

                            <li className="item-name">{this.props.itemData.name.eng}</li>
                            <div  className="item-price"><span>{this.props.itemData.pricePerUnit}</span><span>{this.props.itemData.stnCurrency}</span>

                              <span>{this.props.itemData.stnUnit} </span></div>
                              <div className="item-quantity"><input onChange={this.setQuantity} type="number"></input> lb

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
