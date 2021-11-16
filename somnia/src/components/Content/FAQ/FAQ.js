import React from "react";
import './FAQ.css';
import ContentTitle from '../ContentTitle/ContentTitle';


export default function FAQ(props){


    return(
        <div className="FAQContent">
            <ContentTitle
                onChange={props.onChange}
                title='Frequently Asked Questions'
            ></ContentTitle>
            <p>The content of FAQ</p>
        </div>
    )

}