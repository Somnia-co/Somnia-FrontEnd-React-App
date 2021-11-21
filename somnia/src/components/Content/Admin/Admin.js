import React, { useState } from "react";
import "./Admin.css";
import Sidenav from "./Sidenav/Sidenav";
import Dashboard from "./Dashboard/Dashboard";

function Admin() {
  const [adminContent, SetAdminContent] = useState(<Dashboard />);

  return (
    <section className="rowFlex" id="Admin">
      <Sidenav onChange={SetAdminContent}></Sidenav>
      {adminContent}
    </section>
  );
}

export default Admin;
