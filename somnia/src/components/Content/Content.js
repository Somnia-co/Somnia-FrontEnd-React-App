import React, { useEffect, useState } from "react";
import "./Content.css";
import MainMenu from "./MainMenu/MainMenu";
import Login from "./Login/Login";
import About from "./About/About";
import Collections from "./Collections/Collections";
import Products from "./Products/Products";
import Register from "./Register/Register";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Terms from "./Terms/Terms";
import Privacy from "./Privacy/Privacy";
import ShipRet from "./ShippingReturns/ShipRet";
import { UseActiveContentContext } from "../../globalContext/context/ActiveContentContext";

function Content(props) {
  const ActiveContentContext = UseActiveContentContext();
  let ActiveContent = GetActiveElement();

  function GetActiveElement() {
    switch (ActiveContentContext.value) {
      case "LOGIN":
        return <Login></Login>;
      case "MENU":
        return <MainMenu></MainMenu>;
      case "ABOUT":
        return <About></About>;
      case "COLLECTIONS":
        return <Collections></Collections>;
      case "PRODUCTS":
        return <Products></Products>;
      case "REGISTER":
        return <Register></Register>;
      case "CONTACT":
        return <Contact></Contact>;
      case "FAQ":
        return <FAQ></FAQ>;
      case "TERMS":
        return <Terms></Terms>;
      case "PRIVACY":
        return <Privacy></Privacy>;
      case "SHIPRET":
        return <ShipRet></ShipRet>;
      default:
        console.log("default");
        break;
    }
  }

  return <div class="Content">{ActiveContent}</div>;
}

export default Content;
