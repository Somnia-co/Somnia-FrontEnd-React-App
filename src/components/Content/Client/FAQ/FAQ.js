import React from "react";
import './FAQ.css';
import ContentTitle from '../../ContentTitle/ContentTitle';
import Question from './question/question';


export default function FAQ(props){

    const questions = [{
        question: 'How can I order products?',
        answer: "Go to the products' page to look around, or simply just contact us by filling out the contact form.",
        id:1
    },{
        question: "Who's the main audience of the products?",
        answer: "Teenagers, young-adults or any other extravagant-styled, fashion-following people who would like to show the world a little part of their personal styles by wearing the Somnia brand.", 
        id:2
    },{
        question: "What material the products are made of?",
        answer: "Most of our products are made of 100% cotton.", 
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