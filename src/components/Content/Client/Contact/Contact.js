import React from "react";
import "./Contact.css";
import ContentTitle from "../../ContentTitle/ContentTitle";

export default function Contact(props) {
  return (
    <div class="ContactUs">
            <ContentTitle onChange={props.onChange} title="Contact Us"></ContentTitle>
            <div className='SendButton'>
                Send
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
            </div>
      <div class="ContactForm">
        <label>Your message</label>
        <input class="Message"></input>
      </div>
      <div class="ContactForm">
        <label>Your email address</label>
        <input class="EmailInput"></input>
      </div>
    </div>
  );
}
