var React = require('react');
import {connect} from 'react-redux';



export class Content3 extends React.Component{

  constructor(props){
    super(props);

  }

  render () {

  var content3_img="http://i1149.photobucket.com/albums/o592/Yosuke_Ayrton_Hishinuma/20170127_1150482_zpsvabqj2ik.jpg";

    return(

      <div className='content3'>

      <img src={content3_img}></img>

      <h1>The best quality at the best price!</h1>

      <div className="content3-text">

      <p>
      When it comes to making the healthy choice and buying the best quality ingredients for your favorite dish, it&rsquo;s not uncommon to have to pick
      between the cheap but mediocre and the best but expensive. Well, here at Lazy Kitchen, you do not need to make that choice!
       We are commited to deliver the freshest , the best quality vegetables at the lowest price, so you can concentrate more in enjoying healthy and delicious meals and less on your budget!
       </p>
              <button>know more!</button>
       </div>



      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var Content3Container= connect(mapStateToProps)(Content3)

module.exports = Content3Container;
