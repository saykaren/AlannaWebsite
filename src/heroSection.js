import React from 'react';
import './App.css';

function HeroSection(){
  return(
    <div
      className={"heroSection"}
      id={"heroImage"}
    >
      
      <div
      id={"heroText"}
      >
        Alanna Everett
      <div id={"heroTitle"}>
        Psychologist
      </div>

      </div>

      <img src="https://images.unsplash.com/photo-1558962009-34fff2bd2e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Alanna Teaching" id="heroContactPic"/>
      <div id={"buttonSignUp"}>
                     <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" target="_blank" className={"button"} id={"buttonMain"}>IQ Testing Schedule</a>
      </div>

    </div>  
  );
}


export default HeroSection