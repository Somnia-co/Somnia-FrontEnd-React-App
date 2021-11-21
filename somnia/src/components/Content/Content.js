import React, { useEffect, useState } from "react";
import "./Content.css";
//-------------------
//universal imports
import Register from "./Register/Register";
import Login from "./Login/Login";
//-------------------
//Client imports
import MainMenu from "./Client/MainMenu/MainMenu";
import About from "./Client/About/About";
import Collections from "./Client/Collections/Collections";
import Products from "./Client/Products/Products";
import Contact from "./Client/Contact/Contact";
import FAQ from "./Client/FAQ/FAQ";
import Terms from "./Client/Terms/Terms";
import Privacy from "./Client/Privacy/Privacy";
import ShipRet from "./Client/ShippingReturns/ShipRet";
import Admin from "./Admin/Admin";
//--------------------
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
      case "ADMIN":
        return <Admin />;
      default:
        console.log("default");
        break;
    }
  }

  return <div className="Content">{ActiveContent}</div>;
}

export default Content;
