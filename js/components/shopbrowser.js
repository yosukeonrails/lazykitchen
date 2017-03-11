
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
import veggieData from './saladdata.js';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import ItemRowContainer from './itemrow.js';

export class ShopBrowser extends React.Component {

     constructor(props){
         super(props);
     }

    render(){

var itemDataArray=veggieData;

var renderedRow=[];
var groupOfThree=[];
      var groupRow= function(from , array){
         				 if(!array[from]){
                         renderedRow.push(groupOfThree);
                         return renderedRow;
                      }
                 if(groupOfThree.length==3){
                          renderedRow.push(groupOfThree);
                          groupOfThree=[];
                           groupOfThree.push(array[from]);
                    }else{
                       groupOfThree.push(array[from]);
                    }
                    groupRow(from+1, array);
             			return renderedRow;
             } ;

      console.log(groupRow(0, itemDataArray));   

     return (

                <div className="content0">

                    <ItemRowContainer/>
                    <ItemRowContainer/>
                    <ItemRowContainer/>
                    <ItemRowContainer/>
                    <ItemRowContainer/>
                    <ItemRowContainer/>
                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {

   }

}

  var ShopBrowserContainer= connect(mapStateToProps)(ShopBrowser)

export default ShopBrowserContainer;
