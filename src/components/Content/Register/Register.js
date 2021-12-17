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

  async function onRegister(){
    const username = document.getElementById('RegLog').value;
        const password = document.getElementById('RegPas').value;
        const response = await fetch("http://localhost:8080/users/Register", {
            method: 'POST',
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        console.log(response.json());
        ActiveContent.HandleChange('MENU')
        return;
  }
  return (
    <div className="RegisterForm">
      <img className="LoginLogo" src={logo} alt="Register Somnia logo"></img>

      <label class="RegisterLabel">{transaltion.emailLogin}</label>
      <input
      id='RegLog'
        class="RegisterInput"
        type="text"
        placeholder={transaltion.email}
        name="loginOrPassword"
      ></input>

      <label class="RegisterLabel">{transaltion.password}</label>
      <input
      id='RegPas'
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
        <div onClick={() => onRegister()} className="optionAbout">{transaltion.register}</div>
      </div>
    </div>
  );
}
