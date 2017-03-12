
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

var rowArray=[];
var renderedRowArray=[];
var groupOfThree=[];

      var groupRow= function(from , array){



         				 if(!array[from]){
                         rowArray.push(groupOfThree);
                         return rowArray;
                      }

                        array[from].orderIndex = from;



                 if(groupOfThree.length==3){
                          rowArray.push(groupOfThree);

                          groupOfThree=[];
                           groupOfThree.push(array[from]);

                    }else{
                       groupOfThree.push(array[from]);
                    }

                    groupRow(from+1, array);

             			return rowArray;
             } ;

      var makeRenderedRowArray= function(index, rowArray){

            if(!rowArray[index]){
              return  renderedRowArray  ;
            }


            renderedRowArray.push(  <ItemRowContainer rowData={ rowArray[index] } />);

              makeRenderedRowArray(index+1 , rowArray);

            return renderedRowArray
      };

      console.log(groupRow(0, itemDataArray))
      console.log( makeRenderedRowArray(0 , rowArray))


     return (

                <div className="content0">

                    {renderedRowArray}

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
