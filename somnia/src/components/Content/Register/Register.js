import React from "react";
import "./Register.css";
import logo from "../../../images/Logo/Somnialogo1.png";
import {GetTranslation} from '../../../public/Dictionary.js';
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import {UseActiveContentContext} from "../../../globalContext/context/ActiveContentContext"

export default function Register(props) {
  const ActiveContent = UseActiveContentContext();
  const globalLanguage = UseLanguageContext();
  const transaltion = GetTranslation('register',globalLanguage.value);

  return (
    <div className="RegisterForm">
      <img className="LoginLogo" src={logo} alt="Register Somnia logo"></img>

      <label class="RegisterLabel">{transaltion.emailLogin}</label>
      <input
        class="RegisterInput"
        type="text"
        placeholder={transaltion.email}
        name="loginOrPassword"
      ></input>

      <label class="RegisterLabel">{transaltion.password}</label>
      <input
        class="RegisterInput"
        type="password"
        placeholder={transaltion.password}
        name="password"
      ></input>

      <label class="RegisterLabel">{transaltion.passwordAgain}</label>
      <input
        class="RegisterInput"
        type="password"
        placeholder={transaltion.passwordAgain}
        name="passwordAgain"
      ></input>

      <div className="RowFlex">
        <div
          className="optionAbout"
          onClick={() => ActiveContent.HandleChange('Login')}
        >
          {transaltion.cancel}
        </div>
        <div className="optionAbout">{transaltion.register}</div>
      </div>
    </div>
  );
}
