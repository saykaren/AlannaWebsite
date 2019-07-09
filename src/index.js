import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './nav';
// import HeroSection from './heroSection';
// import ServiceSection from './serviceSection';
// import ReferenceSection from './reference';
// import ContactMe from './contact';
// import Credentials from './credentials';
// import FAQ from './FAQ';




// below worked fine but didn't do navigation 7.8.2019
ReactDOM.render(
  <div id="bodyContents">
    <NavigationBar />

  </div>, 
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
