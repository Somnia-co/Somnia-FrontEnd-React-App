import React from "react";
import "./Privacy.css";
import logo from "../../../images/Logo/Somnialogo1.png";
import ContentTitle from "../ContentTitle/ContentTitle";

export default function Privacy(props) {
  return (
    <div className="PrivacyContent">
      <ContentTitle
        onChange={props.onChange}
        title="Privacy Policy"
      ></ContentTitle>
      <div class='Privacy'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
        </svg>
        <p>Click here to download privacy policy</p>
      </div>
    </div>
  );
}
