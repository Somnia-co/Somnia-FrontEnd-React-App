import React, { useEffect, useState } from "react";
import "./Content.css";
import MainMenu from "./MainMenu/MainMenu";
import Login from "./Login/Login";
import About from "./About/About";
import Collections from "./Collections/Collections";
import Products from "./Products/Products";

function Content(props) {
  const [ActiveItem, SetActiveItem] = useState(
    props.activeContent.toString().toUpperCase()
  );

  function GetActiveElement() {
    switch (props.activeContent) {
      case "LOGIN":
        return <Login onChange={HandleChange}></Login>;

      case "MENU":
        return <MainMenu onChange={HandleChange}></MainMenu>;

      case "ABOUT":
        return <About onChange={HandleChange}></About>;

      case "COLLECTIONS":
        return <Collections onChange={HandleChange}></Collections>;

      case "PRODUCTS":
        return <Products onChange={HandleChange}></Products>;

      default:
        console.log("default");
        break;
    }
  }

  function HandleChange(newStateValue) {
    switch (newStateValue.type.toString().toUpperCase()) {
      case "MENUITEMCHOOSEN":
        switch (newStateValue.value.toString().toUpperCase()) {
          case "ABOUT":
            SetActiveItem(newStateValue.value.toString().toUpperCase());
            break;
          case "COLLECTIONS":
            SetActiveItem(newStateValue.value.toString().toUpperCase());
            break;
          case "PRODUCTS":
            SetActiveItem(newStateValue.value.toString().toUpperCase());
            break;
          default:
            return;
        }
        break;
      case "GETBACK":
        switch (newStateValue.value.toString().toUpperCase()) {
          case "MENU":
            SetActiveItem(newStateValue.value.toString().toUpperCase());
            break;
          default:
            return;
        }
        break;
      default:
        return;
    }
  }
  let ActiveContent = GetActiveElement();

  useEffect(() => {
  });

  return <div class="Content">{ActiveContent}</div>;
}

export default Content;
