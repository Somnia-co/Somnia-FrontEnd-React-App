import React, { useEffect } from "react";
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import Footer from './components/Footer/Footer';

function App() {

  //here we have the state of our React function
  const [lan, setLan] = React.useState('EN');
  const [search,setSearch] = React.useState(true);

  //it's simillar to ComponentDidMount, so it's envoked every
  //time state hanges
  useEffect(() => {
    document.title='Somnia';
  })

  //the function for changing React function state
  function handleChange(newStateValue){
    setLan(newStateValue);
  }

  //the main app
  return (
    <div className="App">
      <Header lan={lan} search={search} onChange={handleChange}></Header>
      <Content lan = {lan}></Content>
      <Footer lan={lan}></Footer>
    </div>
  );
}

export default App;
