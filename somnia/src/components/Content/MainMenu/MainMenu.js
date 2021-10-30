import React from "react";
import "./MainMenu.css";
import logo from "../../../images/Logo/Somnialogo1.png";
import { render } from "@testing-library/react";
import {GetTranslation} from '../../../public/Dictionary.js';
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";

function MainMenu(props) {

  const globalLanguage = UseLanguageContext();
  const translation = GetTranslation('MainMenu', globalLanguage.value);

  function ChooseOption(option) {
    props.onChange({ type: "MenuItemChoosen", value: option });
    
  }

  return (
    <div className="MainMenu">
      <img className="MainMenuLogo" src={logo} alt="Big Somnia Logo"></img>
      <h1 class="MenuItem" onClick={() => ChooseOption("ABOUT")}>
        {translation.about}
      </h1>
      <h1 class="MenuItem" onClick={() => ChooseOption("PRODUCTS")}>
        {translation.products}
      </h1>
      <h1 class="MenuItem" onClick={() => ChooseOption("COLLECTIONS")}>
        {translation.collections}
      </h1>
    </div>
  );
}

export default MainMenu;
