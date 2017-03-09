
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var logInBox;
    var allGroupsContainer;
var currentGroupData={
  groupName:'placeholder',
  groupOwner:'monkeyman'
};
var groupsArray=[];
var myGroupsArray;
import FooterContainer from './footer.js';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import AllGroupsContainer from './allgroups.js';
import {getAllGroups, getMygroup, getUser} from '../actions/index.js'
import MyGroupContainer from './mygroup.js'
import {Button, ButtonGroup,DropdownButton, MenuItem } from 'react-bootstrap';
var selectedWindow='none'
var renderedContent='';
var responsiveMenuBoolean=false;
  var renderResponsive='none';
var  mygroupColor='#1a1a1a';
var  allgroupColor='#262626';

export class Dashboard extends React.Component {

     constructor(props){
     }

    render(){

     return (

                <div className="dashboard-menu" styles={{color:'white'}}>


                </div>
     );
   }
}

var mapStateToProps=function(state){

   return {
        currentGroup:state.main.currentGroup,
          allGroups:state.main.allGroups,
          currentUser:state.main.currentUser,
          currentUserGroups:state.main.currentUserGroups,
          loggedUser:state.main.loggedUser
   }

}

  var DashboardContainer= connect(mapStateToProps)(Dashboard)

export default DashboardContainer;
