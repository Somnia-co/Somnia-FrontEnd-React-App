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
import Categories from "./Client/Categories/Categories";
//--------------------
import { UseActiveContentContext } from "../../globalContext/context/ActiveContentContext";

function Content(props) {
  const ActiveContentContext = UseActiveContentContext();
  let ActiveContent = GetActiveElement();

  function GetActiveElement() {
    switch (ActiveContentContext.value) {
      case "LOGIN":
        return <Login />;
      case "MENU":
        return <MainMenu />;
      case "ABOUT":
        return <About />;
      case "COLLECTIONS":
        return <Collections />;
      case "CATEGORIES":
        return <Categories />;
      case "PRODUCTS":
        return <Products />;
      case "REGISTER":
        return <Register />;
      case "CONTACT":
        return <Contact />;
      case "FAQ":
        return <FAQ />;
      case "TERMS":
        return <Terms />;
      case "PRIVACY":
        return <Privacy />;
      case "SHIPRET":
        return <ShipRet />;
      case "ADMIN":
        return <Admin />;
      default:
        console.log("default");
        break;
    }
  }

  return (
    <div className="Content">
      {/* <video autoplay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4" />
      </video> */}
      {ActiveContent}
    </div>
  );
}

export default Content;
