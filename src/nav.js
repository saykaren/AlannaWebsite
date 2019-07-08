import React from 'react';
import './App.css';
// import IQtestingPage from './IQtestingpage.js';
// import {Link} from "react-router";

function NavigationBar(){
  return(
      <div className={"navBar"}>
        <div className={"navLink"}><a href="./IQtestingpage.js" >IQ Testing</a></div>
        <div className={"navLink"}> <a href="https://apps.colorado.gov/cde/licensing/Lookup/LicenseLookup.aspx" target="_blank">Credentials</a></div>
        <div className={"navLink"}><a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" target="_blank">Schedule</a></div>
        <div className={"navLink"}><a href="">Contact Me</a></div>
      </div>      
  );
};



export default NavigationBar