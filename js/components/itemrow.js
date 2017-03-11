
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
import ItemContainer from './item.js'

export class ItemRow extends React.Component {

     constructor(props){
         super(props);
     }

    render(){

     return (

                <div className="item-row">

                        <div className="row">
                        <div className="col-md-4"><ItemContainer/></div>
                        <div className="col-md-4"><ItemContainer/></div>
                        <div className="col-md-4"><ItemContainer/></div>
                        </div>

                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {

   }

}

  var ItemRowContainer= connect(mapStateToProps)(ItemRow)

export default ItemRowContainer;
