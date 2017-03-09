var React = require('react');
import {connect} from 'react-redux';



export class Content1 extends React.Component{

  constructor(props){
    super(props);

  }

  render () {

    var content1_img="http://i1149.photobucket.com/albums/o592/Yosuke_Ayrton_Hishinuma/isidor-emanuel-111677_zpsvr0ebkhu.jpg";


    return(

      <div className='content1'>

      <img src={content1_img}></img>
        <h1>Trending Salad Recepe! </h1>
        <div className="content-text">
        <p>Toss sliced fennel, fennel fronds, celery root, radicchio, celery leaves, parsley, and marjoram in a large bowl to combine; season with salt and pepper. Drizzle with oil and lemon juice and toss to coat; taste and season with more salt and pepper if needed. Pile salad lightly onto plates.</p>
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

var Content1Container= connect(mapStateToProps)(Content1)

module.exports = Content1Container;
