import React from "react";
import "./Register.css";
import logo from "../../../images/Logo/Somnialogo1.png";

export default function Register(props) {
  return (
    <div className="RegisterForm">
      <img className="LoginLogo" src={logo} alt="Register Somnia logo"></img>

      <label class="RegisterLabel">email or login</label>
      <input
        class="RegisterInput"
        type="text"
        placeholder="email adress"
        name="loginOrPassword"
      ></input>

      <label class="RegisterLabel">password</label>
      <input
        class="RegisterInput"
        type="password"
        placeholder="password"
        name="password"
      ></input>

      <label class="RegisterLabel">password again</label>
      <input
        class="RegisterInput"
        type="password"
        placeholder="password again"
        name="passwordAgain"
      ></input>

      <div className="RowFlex">
        <div
          className="optionAbout"
          onClick={() => props.onChange({ type: "GetBack", value: "LOGIN" })}
        >
          Cancel
        </div>
        <div className="optionAbout">Login</div>
      </div>
    </div>
  );
}
