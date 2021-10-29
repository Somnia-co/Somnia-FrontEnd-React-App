import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  //here we have the state of our React function
  const [lan, setLan] = useState("EN");
  const [search, setSearch] = useState(true);
  const [login, SetLogin] = useState(false);
  const [ActiveContent, SetActiveContent] = useState("MENU");

  //it's simillar to ComponentDidMount, so it's envoked every
  //time state hanges
  useEffect(() => {
    document.title = "Somnia";
  });

  //the function for changing React function state
  function handleChange(newStateValue) {
    switch (newStateValue.type.toUpperCase()) {
      case "LANCHANGE":
        setLan(newStateValue.value);
        break;
      case "LOGIN":
        SetLogin(newStateValue.value);
        SetActiveContent("LOGIN");
        break;
      default:
        SetActiveContent("MENU");
        SetLogin(false);
        break;
    }
  }

  //the main app
  return (
    <div className="App">
      <Header lan={lan} search={search} onChange={handleChange}></Header>
      <Content lan={lan} activeContent={ActiveContent} onChange={handleChange}></Content>
      <Footer lan={lan}></Footer>
    </div>
  );
}

export default App;
