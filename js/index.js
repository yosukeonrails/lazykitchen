require('babel-polyfill');
  console.log('js Works');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var router = require('react-router');
  var Router = router.Router;
  var Route = router.Route;
  var hashHistory = router.hashHistory;
  var IndexRoute = router.IndexRoute;

  import MainContent from './components/maincontent.js';
  import Appv2Container from './components/appv2.js';
 import BrowserContainer from './components/browser.js';
  import { Provider } from 'react-redux';
  import store from './store';
  console.log('react is working')

  var routes = (
      <Router history={hashHistory}>
         <Route path="/" component={Appv2Container}>

             <IndexRoute component={MainContent} />
               <Route path="/browser" component={BrowserContainer} />


             </Route>
     </Router>
  );


  document.addEventListener('DOMContentLoaded', function(){

   ReactDOM.render(

  <Provider store={store}>
   {routes}
  </Provider>,

     document.getElementById('app'));

  });
