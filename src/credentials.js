import React from 'react';
import './App.css';

function Credentials(){
  return(
    <div
      className={"credentials"}
      
    >
      <div
        id={"credentialTitle"}
      >
        <strong>Psychologis</strong> 
      </div>
      
      <div
        id={"licenseNumber"}
        className={"credentialTitle"}
      >
        <strong>License Number:</strong> 152423
      </div>
      <div
      id={"credentialTitle"}
      className={"credentialTitle"}
      >
        <strong>Occupation:</strong> Psychologist
      </div>
     <div
     id={"address"}
     className={"credentialTitle"}
     >
        <strong>Address:</strong> Thornton, CO
      </div>
    </div>

  );
}



export default ContactMe