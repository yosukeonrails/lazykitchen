
import {connect} from 'react-redux';

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;

export class Appv2 extends React.Component{

  constructor(props){
    super(props);

  }

      gotoAbout(){

        this.props.dispatch(aboutview());
      }
      gotoShop(){
        this.props.dispatch(shopview());
      }
      gotoOrder(){
        this.props.dispatch(orderview());
      }

  render () {


    var cartTotal=0;
    console.log('BEFORE');

      if(this.props.cartArray.length > 0 ){
        console.log(this.props.cartArray);
          for(var i=0; i<this.props.cartArray.length; i++ ){

              cartTotal=Math.round((cartTotal+this.props.cartArray[i].itemTotal) * 100) / 100 ;
          }

      }

    return(

      <div className='appv2'>

              <div className="headerv2">
              <h1>Lazy Kitchen</h1>
            <Link to='/checkout'>   <div className="check-out"><span>total: </span><span><b>{cartTotal} </b></span>$<span>USD</span> <i className="fa fa-shopping-cart" aria-hidden="true"></i> checkout ( {this.props.cartLength} )</div></Link>
              </div>

            <div className="app-container">
                  <div className="top-nav">

                          <div className="logo-container">

                            <div className="circle">
                              <div className="circle1">
                                <div className="circle2">

                                <p>Lazy Kitchen</p>
                                <h4>懶人廚房</h4>

                                </div>
                              </div>
                            </div>

                          </div>

                  </div>

                  <div className="main-app-container">
                  {this.props.children}
                  </div>
          </div>
              <div className="footer">

              </div>
      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {
     cartLength:state.shopping.cartLength,
     cartArray:state.shopping.cartArray
   }
}

var Appv2Container= connect(mapStateToProps)(Appv2)

module.exports = Appv2Container;
