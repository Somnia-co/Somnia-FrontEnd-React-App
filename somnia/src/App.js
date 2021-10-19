import React, { useEffect } from "react";
import Header from './components/Header/Header'

function App() {

  //here we have the state of our React function
  const [value, setValue] = React.useState({lan: 'EN'});

  //it's simillar to ComponentDidMount, so it's envoked every
  //time state hanges
  useEffect(() => {
    document.title='Hello Somnia';
  })

  //the function for changing React function state
  function handleChange(newStateValue){
    setValue(newStateValue);
  }

  //the main app
  return (
    <div className="App">
      <Header value={value} onChange={handleChange}></Header>
    </div>
  );
}

export default App;
