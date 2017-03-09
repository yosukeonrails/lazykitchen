

var React = require('react');
var ReactDOM = require('react-dom');
import Content1Container from './content1.js';
import Content2Container from './content2.js';
import Content3Container from './content3.js';
import Content4Container from './content4.js';
var SiteContent=''
import About from './about.js';
import ShopContainer from './shop.js';
import BlogContainer from './blog.js';
var MainApp= function(props){

console.log(props);



var paddingZero= {
   padding:'0px'
};

  return(
       <div>
          <div className="main-content-container">
                {props.content}
         </div>


        </div>
  );
};


export default MainApp;
