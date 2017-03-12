
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
import ItemContainer from './item.js';

export class ItemRow extends React.Component {

     constructor(props){
         super(props);
     }

    render(){

      var rowData= this.props.rowData;
  var groupOfThree=[];
  var rowArray=[];
      var groupRow= function(from , array){

                  if(!array[from]){
                         rowArray.push(groupOfThree);
                         return rowArray;
                      }

                 if(groupOfThree.length==3){
                          rowArray.push(groupOfThree);
                          groupOfThree=[];
                           groupOfThree.push( <div className="col-md-4"><ItemContainer itemData={array[from]} /></div>);

                    }else{
                       groupOfThree.push(  <div className="col-md-4"><ItemContainer itemData={array[from]} /></div>);
                    }
                    groupRow(from+1, array);

                   return rowArray;
             } ;


         groupRow(0, rowData);
              var renderedItemArray=rowArray[0];
              console.log(renderedItemArray);
     return (

                <div className="item-row">

                <div className="row">
                      {renderedItemArray}
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
