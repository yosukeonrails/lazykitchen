
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
import Content1Container from './content1.js';
import Content2Container from './content2.js';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';


export class Blog extends React.Component {

     constructor(props){
         super(props);
     }

    render(){

     return (

                <div className="content0">

                  <div className="Blog">

                    <Content1Container/>

                    <Content2Container/>

                  </div>
                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {

   }

}

  var BlogContainer= connect(mapStateToProps)(Blog)

export default BlogContainer;
