import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { LanguageContextProvider } from "./globalContext/context/LanguageContext";
import { ActiveContentProvider } from "./globalContext/context/ActiveContentContext";

export default function App() {
  //here we have the state of our React function
  const [search, setSearch] = useState(true);
  const [login, SetLogin] = useState(false);
  const [ActiveContent, SetActiveContent] = useState("MENU");

  //it's simillar to ComponentDidMount, so it's envoked every
  //time state changes
  useEffect(() => {
    document.title = "Somnia";
  });

  //the function for changing React function state
  function handleChange(newStateValue) {
    switch (newStateValue.type.toUpperCase()) {
      case "LANCHANGE":
        break;
      case "LOGIN":
        SetLogin(newStateValue.value);
        SetActiveContent("LOGIN");
        break;

      case "REGISTER":
        SetLogin(false);
        SetActiveContent("REGISTER");
        break;
      default:
        SetActiveContent("MENU");
        SetLogin(false);
        break;
    }
  }

  //the main app
  return (
    <ActiveContentProvider>
      <LanguageContextProvider>
        <div className="App">
          <div className="content-wrapper">
            <Header search={search} onChange={handleChange}></Header>
            <Content
              activeContent={ActiveContent}
              onChange={handleChange}
            ></Content>
            <Footer></Footer>
          </div>
        </div>
      </LanguageContextProvider>
    </ActiveContentProvider>
  );
}
