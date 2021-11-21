import React, { useState } from "react";
import "./Sidenav.css";
import Button from "./Button";

function Sidenav(props) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="cloumnFlex" id={`Sidenav${isHidden ? "Closed" : "Open"}`}>
      {/* fragment */}
      <div className="top columnFlex">
        <button
          className="material-icons-round menuIcon"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? "menu" : "menu_open"}
        </button>
      </div>
      <menu className={`columnFlex ${isHidden ? "closedMenu" : "openMenu"}`}>
        <div className="middle columnFlex">
          <Button
            text="Dashboard"
            icon="home"
            imgPath=""
            onChange={props.onChange}
            alignIcon="align-left align-v-center"
            alignText="align-left align-v-center"
          />
          <Button
            text="Feedback"
            icon="mail"
            imgPath=""
            onChange={props.onChange}
            alignIcon="align-left align-v-center"
            alignText="align-left align-v-center"
          />
          <Button
            text="Collections"
            icon="all_inbox"
            imgPath=""
            onChange={props.onChange}
            alignIcon="align-left align-v-center"
            alignText="align-left align-v-center"
          />
          <Button
            text="Product Management"
            icon="all_inbox"
            imgPath=""
            onChange={props.onChange}
            alignIcon="align-left align-v-center"
            alignText="align-left align-v-center"
          />
        </div>
        <div className="bottom columnFlex">
          <Button
            className="profile"
            text="Profile"
            imgPath=""
            onChange={props.onChange}
            alignText="align-center align-v-center"
          />
        </div>
      </menu>
    </div>
  );
}

export default Sidenav;
