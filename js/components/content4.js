var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
import {connect} from 'react-redux';
var hashHistory = router.hashHistory;
var Link = router.Link;


export class Content4 extends React.Component{

  constructor(props){
    super(props);

  }

  render () {

  var content4_img="http://i1149.photobucket.com/albums/o592/Yosuke_Ayrton_Hishinuma/20170127_1150482_zpsvabqj2ik.jpg";

    return(

      <div className='content4'>



      <h1> Order, Pick Up & Eat!</h1>

      <div className="content4-text">

      <p>
          Eating healthy had become easier than ever! With Lazy Kitchen you can start your healthy diet in really quick and easy steps!
          Choose your vegetables and add them to the cart. Then choose a pick up location closest to you and vuala! You are all set !

       </p>
       <Link to={'browser'}>
        <button>Order Now!</button>
         </Link>
       </div>



      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var Content4Container= connect(mapStateToProps)(Content4)

module.exports = Content4Container;
