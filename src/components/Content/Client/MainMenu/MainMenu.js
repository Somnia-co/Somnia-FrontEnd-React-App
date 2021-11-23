import React from "react";
import "./MainMenu.css";
import logo from "../../../../images/Logo/Somnialogo1.png";
import { render } from "@testing-library/react";
import { GetTranslation } from "../../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../../globalContext/context/LanguageContext";
import { UseActiveContentContext } from "../../../../globalContext/context/ActiveContentContext";

//props are those strange properties in tags: <div props-'props'></div>
function MainMenu(props) {

  const globalLanguage = UseLanguageContext();
  const ActiveContent = UseActiveContentContext();
  const translation = GetTranslation("MainMenu", globalLanguage.value);

  return (
    <div className="MainMenu">
      <img className="MainMenuLogo" src={logo} alt="Big Somnia Logo"></img>
      <h1 className="MenuItem" onClick={() => ActiveContent.HandleChange("ABOUT")}>
        {translation.about}
      </h1>
      <h1
        className="MenuItem"
        onClick={() => ActiveContent.HandleChange("PRODUCTS")}
      >
        {translation.products}
      </h1>
      <h1
        className="MenuItem"
        onClick={() => ActiveContent.HandleChange("COLLECTIONS")}
      >
        {translation.collections}
      </h1>
    </div>
  );
}

export default MainMenu;
