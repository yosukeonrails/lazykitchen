
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


export class Item extends React.Component {

     constructor(props){
         super(props);
     }

     render(){

       var picture;
        console.log(this.props.itemData);

     return (



                <div style={{padding:'0px'}} className="item-div w3-panel w3-card-8">

                    <div  style={{backgroundImage:'url('+this.props.itemData.pictureUrl+')'}}className="item-image"></div>
                      <div className="item-info">
                            <li className="item-name">Cherry Tomato</li>
                            <div className="item-price"><span>2 USD$</span><span> lb </span></div>
                            <div className="item-quantity"><input type="number"></input> lb <span className="shopping-cart"><img src="http://i1149.photobucket.com/albums/o592/Yosuke_Ayrton_Hishinuma/1489142454_meanicons_59_zpsiacry9ga.png"></img></span></div>

                      </div>
                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {

   }

}

  var ItemContainer= connect(mapStateToProps)(Item)

export default ItemContainer;
