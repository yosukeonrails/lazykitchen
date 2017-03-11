var React = require('react');
import {connect} from 'react-redux';



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


    return(

      <div className='appv2'>

              <div className="headerv2">
              <h1>Lazy Kitchen</h1>
              </div>


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
              <div className="footer">

              </div>
      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var Appv2Container= connect(mapStateToProps)(Appv2)

module.exports = Appv2Container;
