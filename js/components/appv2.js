var React = require('react');
import {connect} from 'react-redux';



export class Appv2 extends React.Component{

  constructor(props){
    super(props);

  }

  render () {


    return(

      <div className='appv2'>

              <div className="headerv2">
              <h1>Lazy Kitchen</h1>
              </div>


              <div className="top-nav w3-panel w3-card-12">



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
              <div className="nav-menu">
              <div className="menu-container">

              <div className="nav-li-container">
                <li>About</li>
                  <li>Shop</li>
                    <li>Blog</li>
                </div>
                </div>
              </div>
                        <div className="main-content-container">
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
