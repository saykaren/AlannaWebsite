import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HeroSection from './heroSection';
import ServiceSection from './serviceSection';
import ReferenceSection from './reference';
import ContactMe from './contact';
import Credentials from './credentials';
import FAQ from './FAQ';
// import IQtestingPage from './IQtestingpage.js';
// import {Link} from "react-router";

function NavigationBar(){
  return(
     <Router> 
        <div>
          <nav className={"navBar"}>
            <div className={"navLink"}>
              <Link to="/">Home</Link>
            </div>
            <div className={"navLink"}>
              <Link to="/Services">Services/Testing</Link>
            </div>
            <div className={"navLink"}> 
              <Link to="/Credentials">Credentials</Link>
            </div>
            <div className={"navLink"}>
              <Link to="/Schedule">Schedule</Link>
            </div>
            <div className={"navLink"}>
              <Link to="/contact">Contact Me</Link>
            </div>
          </nav>
        
          <Route path="/" component={HeroSection}/>
          <Route path={'./serviceSection'} component={ServiceSection}/>
          <Route path={'./reference'} component={ReferenceSection}/>
          <Route path={'./credentials'} component={Credentials}/>
          <Route path={'./FAQ'} component={FAQ}/>
          <Route path={'.coutact'} component={ContactMe}/>
            
        </div>
     </Router>
  
      
  );
};


export default NavigationBar