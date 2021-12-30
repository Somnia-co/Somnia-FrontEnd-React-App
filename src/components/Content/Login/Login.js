import React from "react";
import "./Login.css";
import logo from "../../../images/Logo/Somnialogo1.png";
import { GetTranslation } from "../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import { UseActiveContentContext } from "../../../globalContext/context/ActiveContentContext";

export default function Login(props) {
  async function LogIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = await fetch("http://localhost:8080/users/Login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.json());
    ActiveContent.HandleChange("MENU");
    return;
  }
  const globalLanguage = UseLanguageContext();
  const ActiveContent = UseActiveContentContext();
  const translation = GetTranslation("Login", globalLanguage.value);
  return (
    <div className="LoginForm">
      <img className="LoginLogo" src={logo} alt="Login Somnia logo"></img>

      <label className="LoginLabel">{translation.emailLogin}</label>
      <input
        id="username"
        className="LoginInput"
        type="text"
        placeholder={translation.emailPlaceHolder}
        name="loginOrPassword"
      ></input>

      <label className="LoginLabel">{translation.password}</label>
      <input
        id="password"
        className="LoginInput"
        type="password"
        placeholder={translation.password}
        name="password"
      ></input>

      <h3
        onClick={() => {
          ActiveContent.HandleChange("Register");
        }}
      >
        {translation.noAccount}
      </h3>
      <div onClick={() => ActiveContent.HandleChange("Admin")}>
        {" "}
        <button>Admin site</button>{" "}
      </div>
      <div onClick={() => ActiveContent.HandleChange("Menu")}>
        {" "}
        <button>Client site</button>{" "}
      </div>

      <div className="RowFlex">
        <div
          className="optionAbout"
          onClick={() => ActiveContent.HandleChange("MENU")}
        >
          {translation.cancel}
        </div>
        <div
          className="optionAbout"
          onClick={() => ActiveContent.HandleChange("MENU")}
        >
          {translation.login}
        </div>
      </div>
    </div>
  );
}
