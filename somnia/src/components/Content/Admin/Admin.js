import React from "react";
import "./Admin.css";
import Sidenav from "./Sidenav/Sidenav";
import Dashboard from "./Dashboard/Dashboard";

function Admin(){
    return (
        <section className="rowFlex" id="Admin">
            <Sidenav />
            <Dashboard />
        </section>
    );
}

export default Admin;