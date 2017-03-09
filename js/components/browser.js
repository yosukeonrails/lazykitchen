var React = require('react');
import {connect} from 'react-redux';



export class Browser extends React.Component{

  constructor(props){
    super(props);

  }

  render () {

    return(

      <div className='browser'>

      <div className="row">

          <div className="col-md-6">

                <div className="inside"> Content 1  </div>

          </div>


          <div className="col-md-6">

                <div className="inside"> Content 2 </div>

          </div>

            </div>

      </div>
    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var BrowserContainer= connect(mapStateToProps)(Browser)

module.exports = BrowserContainer;
