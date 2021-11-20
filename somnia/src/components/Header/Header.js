import React, { useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../images/Logo/Somnialogo1.png";
import Search from "./Search/Search";
import Collection from "./Collection/Collection";
import Login from "./Login/Login";
import { UseLanguageContext } from "../../globalContext/context/LanguageContext";

function Header(props) {
  
  const globalLanguage = UseLanguageContext();

  useEffect(() => {

    //change active item
    let OldSelectedItem = document.getElementById("HU");
    OldSelectedItem.classList.remove("Active");

    OldSelectedItem = document.getElementById("EN");
    OldSelectedItem.classList.remove("Active");

    let SelectedItem = document.getElementById(globalLanguage.value);
    SelectedItem.classList.add("Active");

  }, [globalLanguage.value]);


  let leftSide = <Search></Search>;

  return (
    <header className="header">
      {leftSide}
      <div className="RowFlex">
        <div className="RowFlex lan">
          <p className="lan option" id="HU" onClick={() => globalLanguage.HandleLanChange('HU')}>
            HU
          </p>
          <p className="lan">/</p>
          <p className="lan option" id="EN" onClick={() => globalLanguage.HandleLanChange('EN')}>
            EN
          </p>
        </div>
        <Login></Login>
      </div>
    </header>
  );
}

export default Header;
