import React from 'react';
import './App.css';

function ReferenceSection(){
  return(
    <div>
    <div id={"referenceTitle"}>
       Reference Section
    </div>
      <div id={"referenceSectionContainer"}>
        <div className={"reference"}>
          <img src="https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" 
            className={"referenceImage"}
          />
          "Alanna was amazing! I worried about my son sitting that long for a test but Alanna made it very entertaining. Highly recommend her." <strong>-Tina</strong> 
        </div>
        <div className={"reference"}>
          <div>
            <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80" 
              className={"referenceImage"}
            />
          </div>
          <div>
            "I was amazed at how easy it was to schedule this test. My son doesn't sit still very long but Alanna allowed him to take multiple breaks to ensure he was focused on each section to get the best grade." <strong>- Nina</strong> 
          </div>
        </div>
        <div className={"reference"}>
          <img src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1650&q=80" 
            className={"referenceImage"}
          />
          "Alanna did wonderful! I worried about my son sitting that long for a test but Alanna made it very entertaining. Highly recommend her." <strong> -Bob</strong> 
        </div>
        <div className={"reference"}>
          <div>
            <img src="https://images.unsplash.com/photo-1525792457256-7c13df50556f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1183&q=80" 
              className={"referenceImage"}
            />
          </div>
          <div>
            "I was amazed at how easy it was to schedule this test. My son doesn't sit still very long but Alanna allowed him to take multiple breaks to ensure he was focused on each section to get the best grade."<strong> - George</strong> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferenceSection