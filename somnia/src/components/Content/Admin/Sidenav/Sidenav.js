import React from "react";
import "./Sidenav.css";
import Button from "./Button";

function Sidenav(){
    return (
        <menu className="columnFlex" id="Sidenav">
            <div className="top columnFlex">
                {/*<Button imgPath="../../../../images/Arrow/back.png" className="btn"></Button>*/}
                <span className="material-icons-round menuIcon">menu</span>
            </ div>
            <div className="middle columnFlex">
                <Button text="Dashboard" icon="home" imgPath="" alignIcon="" alignText="align-left align-v-center"/>
                <Button text="Feedback" icon="mail" imgPath="" alignIcon="" alignText="align-left align-v-center"/>
                <Button text="Categories" icon="all_inbox" imgPath="" alignIcon="" alignText="align-left align-v-center"/>
            </ div>
            <div className="bottom columnFlex">
                <Button className="profile" text="Profile" imgPath="" alignText="align-center align-v-center"/>
            </div>
            
        </menu>
    );
}

export default Sidenav;