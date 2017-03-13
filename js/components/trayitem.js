
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



export class TrayItem extends React.Component {

     constructor(props){
         super(props);

     }


     render(){

        var cartArray= this.props.cartArray[this.props.index];

        console.log(this.props.cartArray[this.props.index].quantity);


     return (

                <div  className="tray-item">
                <div  style={{backgroundImage:'url('+cartArray.info.pictureUrl+')'}} className="item-image"></div>
                  <div className="item-info">

                        <li className="item-name"><b>{cartArray.info.name.eng}</b></li>
                        <div  className="item-price"><span><b>{cartArray.info.pricePerUnit}</b></span><span> ${cartArray.info.stnCurrency}</span>

                          <span> per {cartArray.info.stnUnit} </span></div>
                          <div className="item-tray-quantity"><span><b>{this.props.cartArray[this.props.index].quantity}</b></span> lb
                        </div>

                  </div>
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

  var TrayItemContainer= connect(mapStateToProps)(TrayItem)

export default TrayItemContainer;
