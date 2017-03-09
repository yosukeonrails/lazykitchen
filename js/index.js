require('babel-polyfill');
  console.log('js Works');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var router = require('react-router');
  var Router = router.Router;
  var Route = router.Route;
  var hashHistory = router.hashHistory;
  var IndexRoute = router.IndexRoute;

  import MainApp from './components/mainapp.js';
  import AppContainer from './components/app.js';
 import BrowserContainer from './components/browser.js';
  import { Provider } from 'react-redux';
  import store from './store';
  console.log('react is working')

  var routes = (
      <Router history={hashHistory}>
         <Route path="/" component={AppContainer}>
         
             <IndexRoute component={MainApp} />
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
