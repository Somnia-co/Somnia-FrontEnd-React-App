import React from "react";
import './Terms.css';
import {UseActiveContentContext} from "../../../globalContext/context/ActiveContentContext";
import ContentTitle from '../ContentTitle/ContentTitle';


export default function Terms(props){

    let ActiveContent = UseActiveContentContext();

    return(
        <div className="TermsContent">
            <ContentTitle
                onChange={props.onChange}
                title='Terms And Conditions'
            ></ContentTitle>
            <p>termsContent</p>
        </div>
    )
}