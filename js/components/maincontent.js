

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import MainApp from './mainapp.js'
var mainContent= <ShopContainer/>;
import About from './about.js';
import ShopContainer from './shop.js';
import BlogContainer from './blog.js';

export class MainContent extends React.Component {
  constructor(props){
   super(props);

         this.gotoAbout= this.gotoAbout.bind(this);
         this.gotoShop= this.gotoShop.bind(this);
         this.gotoBlog= this.gotoBlog.bind(this);


  }



gotoAbout(){

    var dis=this;

        $('.liSelector').animate({marginLeft:"0px"}, 100 , function(){
             $('.liSelector').css("margin-left", "0px");
        });


        $('.content0').animate({left: "140px" , opacity:"0"}, 200 , function(){


              console.log('animated content');
                mainContent= <About/>;
               dis.setState({selectedContent:'about'});

              $('.content0').css("opacity", "0px");
                 $('.content0').css("left", "-140px");

              $('.content0').animate({left:"0px", opacity:"1"}, 200 , function(){
                 console.log ('shop ready');
              });


        });



}
gotoShop(){

        $('.liSelector').animate({marginLeft:"70px"}, 100 , function(){
             $('.liSelector').css("margin-left", "70px");
        });

        var dis=this;

        $('.content0').animate({left: "-140px" , opacity:"0"}, 200 , function(){

              console.log('animated content');
              mainContent= <ShopContainer/>;
              dis.setState({selectedContent:'shop'});
              $('.content0').css("opacity", "0px");
                 $('.content0').css("left", "140px");

              $('.content0').animate({left:"0px", opacity:"1"}, 200 , function(){
                 console.log ('shop ready');
              });


        });


}
gotoBlog(){

    var dis=this;

        $('.liSelector').animate({marginLeft:"140px"},100 , function(){
             $('.liSelector').css("margin-left", "140px");
        });



        $('.content0').animate({left: "-140px" , opacity:"0"}, 200 , function(){

              console.log('animated content');
                  mainContent= <BlogContainer/>;
                dis.setState({selectedContent:'blog'});
              $('.content0').css("opacity", "0px");
                 $('.content0').css("left", "140px");

              $('.content0').animate({left:"0px", opacity:"1"}, 200 , function(){
                 console.log ('shop ready');
              });


        });



}

  render(){


    return (
      <div>
      <div className="nav-menu">
      <div className="menu-container">

      <div className="nav-li-container">

        <a><li onClick={this.gotoAbout}>About</li></a>
        <a><li onClick={this.gotoShop}>Shop</li></a>
          <a><li onClick={this.gotoBlog}>Blog</li></a>

        <div className="liSelector"></div>

        </div>
        </div>
      </div>

         <MainApp content={ mainContent}/>

       </div>
    );
  }
}


var mapStateToProps= function(state){
   return {

   }
}

var MainContentContainer= connect(mapStateToProps)(MainContent)

module.exports = MainContentContainer;
