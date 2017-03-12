
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
import ShopBrowserContainer from './shopbrowser.js'

export class Shop extends React.Component {

     constructor(props){
         super(props);
     }

    render(){

     return (

                <div className="content0">
              
                  <div className="shop">
                    <ShopBrowserContainer/>
                  </div>
                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {

   }

}

  var ShopContainer= connect(mapStateToProps)(Shop)

export default ShopContainer;
