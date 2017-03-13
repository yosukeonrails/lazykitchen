
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

        console.log(cartArray);


     return (

                <div  className="tray-item">
                <div  style={{backgroundImage:'url('+cartArray.info.pictureUrl+')'}} className="item-image"></div>
                  <div className="item-info">

                        <li className="item-name">{cartArray.info.name.eng}</li>
                        <div  className="item-price"><span>{cartArray.info.pricePerUnit}</span><span>{cartArray.info.stnCurrency}</span>

                          <span>{cartArray.info.stnUnit} </span></div>
                          <div className="item-quantity"><span>{this.props.cartArray[this.props.index].quantity}</span> lb
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

  var TrayItemContainer= connect(mapStateToProps)(TrayItem)

export default TrayItemContainer;
