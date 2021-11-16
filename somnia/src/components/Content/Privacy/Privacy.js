import React from "react";
import './Privacy.css';
import logo from "../../../images/Logo/Somnialogo1.png";
import ContentTitle from '../ContentTitle/ContentTitle';

export default function Privacy(props){
    return(
        <div className="PrivacyContent">
            <ContentTitle
                onChange={props.onChange}
                title='Privacy Policy'
            ></ContentTitle>
            <img src={logo}></img>
            <p>The content of Privacy page</p>
        </div>
    )
}