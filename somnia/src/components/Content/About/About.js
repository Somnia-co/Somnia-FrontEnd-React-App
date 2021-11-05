import React from "react";
import "./About.css";
import logo from "../../../images/Logo/Somnialogo1.png";
import { GetTranslation } from "../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import ContentTitle from "../ContentTitle/ContentTitle.js";

export default function About(props) {
  const component = "About";
  const title = "About us";
  const globalLanguage = UseLanguageContext();

  const translation = GetTranslation(component, globalLanguage.value);

  return (
    <div className="About">
      <img src={logo} className="LogoAbout"></img>
      <ContentTitle
        onChange={props.onChange}
        title={translation.title}
      ></ContentTitle>
      <p className="AboutParagraph">{translation.description}</p>
      <div className="RowFlex">
        <div className="optionAbout">{translation.contact}</div>
      </div>
    </div>
  );
}
