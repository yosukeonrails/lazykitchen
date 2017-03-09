var React = require('react');
import {connect} from 'react-redux';



export class Content2 extends React.Component{

  constructor(props){
    super(props);

  }

  render () {

  var content2_img="http://i1149.photobucket.com/albums/o592/Yosuke_Ayrton_Hishinuma/ivan-timov-138042_zpspaq99by4.jpg";

    return(

      <div className='content2'>

      <img src={content2_img}></img>
      <h1>Tomatoes 4 your Health!</h1>
      <div className="content-text">
        <p>Tomatoes are also an excellent source vitamin C, biotin, molybdenum and vitamin K. They are also a very good source of copper, potassium, manganese, dietary fiber, vitamin A (in the form of beta-carotene), vitamin B6, folate, niacin, vitamin E and phosphorus.</p>
          <button>read more..</button>
      </div>

      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var Content2Container= connect(mapStateToProps)(Content2)

module.exports = Content2Container;
