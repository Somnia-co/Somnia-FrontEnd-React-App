import React from "react";
import "./question.css";

export default function Question(props) {

    let questionID = 'question' + props.id;
    let answerID = 'answer' + props.id;

    function ShowAnswer(){
          let answer = document.getElementById(answerID);
          answer.classList.toggle('Hidden');
    }

  return (
    <div className="question">
      <div className="question_wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
        <h2 onClick={() => ShowAnswer()} id={questionID}>{props.question}</h2>
      </div>
      <h3 id={answerID} className="Hidden">
        {props.answer}  
      </h3>    
    </div>
  );
}
