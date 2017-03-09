
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


export class Dashboard extends React.Component {

     constructor(props){
     }

    render(){

     return (

                <div>


                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {

   }

}

  var DashboardContainer= connect(mapStateToProps)(Dashboard)

export default DashboardContainer;
