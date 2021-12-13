import React from "react";
import "./Terms.css";
import { UseActiveContentContext } from "../../../../globalContext/context/ActiveContentContext";
import ContentTitle from "../../ContentTitle/ContentTitle";

export default function Terms(props) {
  let ActiveContent = UseActiveContentContext();

  return (
    <div className="TermsContent">
      <ContentTitle
        onChange={props.onChange}
        title="Terms And Conditions"
      ></ContentTitle>
      <div class='TermsAndConditions'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
        </svg>
        <p>Click here to download terms and conditions</p>
      </div>
    </div>
  );
}
