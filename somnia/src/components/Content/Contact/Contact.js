import React from "react";
import './Contact.css';
import ContentTitle from '../ContentTitle/ContentTitle';

export default function Contact(props){
    return(
        <div class='ContactUs'>
            <ContentTitle
                onChange={props.onChange}
                title='Contact Us'
            ></ContentTitle>
            <label>Message</label>
            <input class = 'Message'></input>
            <label>Email address</label>
            <input class = 'EmailInput'></input>
        </div>
    )
}