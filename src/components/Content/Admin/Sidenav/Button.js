import React from "react";
//import menuButton from "../../../../images/Arrow/back.png";
import Feedback from "../Feedback/Feedback";
import Dashboard from "../Dashboard/Dashboard";
import ProductManagement from "../ProductManagement/ProductManagement";
import Collections from "../Collections/Collections";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

function Button(props) {
  let button;

  const pages = {
    dashboard: "DASHBOARD",
    feedback: "FEEDBACK",
    collections: "COLLECTIONS",
    prodmgmt: "PRODUCT MANAGEMENT",
    profileSettings: "PROFILE",
  };

  switch (props.text.toUpperCase()) {
    case pages.feedback:
      button = <Feedback />;
      break;
    case pages.dashboard:
      button = <Dashboard />;
      break;
    case pages.prodmgmt:
      button = <ProductManagement />;
      break;
    case pages.collections:
      button = <Collections />;
      break;
    case pages.profileSettings:
      button = <ProfileSettings/>;
      break;
    default:
      <Dashboard />;
  }
  return (
    <button onClick={() => props.onChange(button)} className="rowFlex">
      <span className={"material-icons-round " + props.alignIcon}>
        {props.icon}
      </span>
      <div className={props.alignText}>{props.text}</div>
    </button>
  );
}

export default Button;
