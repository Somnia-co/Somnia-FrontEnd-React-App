import React, { useState } from "react";
const ActiveContentContext = React.createContext();

export function ActiveContentProvider(props) {
  const [activeContent, SetActiveContent] = useState("MENU");

  function ToggleActiveContext(newActiveContent) {
    SetActiveContent(newActiveContent.toString().toUpperCase());
  }
  let ActiveContentObject = {
    value: activeContent,
    HandleChange: ToggleActiveContext
  };

  return (
    <ActiveContentContext.Provider value={ActiveContentObject}>
      {props.children}
    </ActiveContentContext.Provider>
  );
}

export const UseActiveContentContext = () =>
  React.useContext(ActiveContentContext);
