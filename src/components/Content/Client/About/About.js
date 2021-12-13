import React from "react";
import "./About.css";
import logo from "../../../../images/Logo/Somnialogo1.png";
import { GetTranslation } from "../../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../../globalContext/context/LanguageContext";
import ContentTitle from "../../ContentTitle/ContentTitle";
import { UseActiveContentContext } from "../../../../globalContext/context/ActiveContentContext";

export default function About(props) {
  const ActiveContent = UseActiveContentContext();
  const component = "About";
  const globalLanguage = UseLanguageContext();

  const translation = GetTranslation(component, globalLanguage.value);

  return (
    <div className="About">
      <ContentTitle
        onChange={props.onChange}
        title={translation.title}
      ></ContentTitle>
      <img src={logo} className="LogoAbout" alt="Somnia Logo"></img>
      <p className="AboutParagraph">{translation.description}</p>
      <div className="RowFlex">
        <div
          className="optionAbout"
          onClick={() => ActiveContent.HandleChange("Contact")}
        >
          {translation.contact}
        </div>
      </div>
    </div>
  );
}
