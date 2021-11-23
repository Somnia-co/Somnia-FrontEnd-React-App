import React from "react";
import "./ContentTitle.css";
import { UseActiveContentContext } from "../../../../globalContext/context/ActiveContentContext";
import arrow from "../../../../images/Arrow/back.png";

export default function ContentTitle(props) {
  const ActiveContext = UseActiveContentContext();

  return (
    <div className="ContentTitleDiv">
      <img
        onClick={() => ActiveContext.HandleChange("MENU")}
        className="ContentTitleIcon"
        src={arrow}
        alt='SomeArrow'
      ></img>

      <h1 className="ContentTitle">{props.title}</h1>
    </div>
  );
}
