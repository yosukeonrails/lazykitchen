

var React = require('react');
var ReactDOM = require('react-dom');
import Content1Container from './content1.js';
import Content2Container from './content2.js';
import Content3Container from './content3.js';
import Content4Container from './content4.js';
var MainApp= function(){

var paddingZero= {
   padding:'0px'
};

  return(
       <div>

       <div className="row">
          <div className="col-md-8">
                <div className="content3">
                    <Content3Container/>
                </div>
          </div>
      <div className="col-md-4">
                <Content4Container/>
      </div>
</div>


        </div>
  );
};


export default MainApp;
