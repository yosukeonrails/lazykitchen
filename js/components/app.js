var React = require('react');
import {connect} from 'react-redux';



export class App extends React.Component{

  constructor(props){
    super(props);

  }

  render () {


    return(

      <div className='app'>

                <div className="header">

                                  <div className="logo-container">

                                        <div className="circle">
                                          <div className="circle1">
                                            <div className="circle2">

                                                <p>Lazy Kitchen!</p>

                                            </div>
                                          </div>
                                        </div>

                                  </div>

                    </div>

                        <div>
                          {this.props.children}
                        </div>

      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var AppContainer= connect(mapStateToProps)(App)

module.exports = AppContainer;
