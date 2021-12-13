import React from "react";
import "./Section.css";

export default function Section(props) {

    let titleID = 'sectionTitle' + props.id;
    let contentID = 'sectionContent' + props.id;

    function ShowAnswer(){
          let answer = document.getElementById(contentID);
          answer.classList.toggle('Hidden');
    }

  return (
    <div className="section">
      <div className="section_wrapper">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg> */}
        <h2 onClick={() => ShowAnswer()} id={titleID}>{props.title}</h2>
      </div>
      <h3 id={contentID} className="Hidden">
        {props.content}  
      </h3>    
    </div>
  );
}
