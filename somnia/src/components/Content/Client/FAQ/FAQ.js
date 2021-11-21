import React from "react";
import './FAQ.css';
import ContentTitle from '../ContentTitle/ContentTitle';
import Question from './question/question';


export default function FAQ(props){

    const questions = [{
        question: 'Who is the author?',
        answer: "It's none of your business.",
        id:1
    },{
        question: "Does santa exist?",
        answer: "Oh again, go to mummy", 
        id:2
    },{
        question: "Can i get some for free?",
        answer: "Unless you pay for it", 
        id: 3
    }]


    return(
        <div className="FAQContent">
            <ContentTitle
                onChange={props.onChange}
                title='Frequently Asked Questions'
            ></ContentTitle>
            {
                questions.map(faq =>{
                    return <Question question={faq.question} answer={faq.answer} id={faq.id}></Question>
                })
            }
        </div>
    )

}