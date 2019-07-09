import React from 'react';
import './App.css';


function Footer(){
  return(
    <div>
      <div
        className={"footer"}
      >
        <div
          id={"footer"}
          className={"footerDetails"}
        >
          Website created by:
          <a 
            href={"http://saykaren.com"} 
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <strong>sayKaren</strong>
            </a>
        </div>  
  
      </div>
    </div>
  );
}



export default Footer