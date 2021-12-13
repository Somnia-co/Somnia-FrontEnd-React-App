import React from "react";
import "./Dashboard.css";
import Card from "./Card/Card";
import ContentTitle from '../../ContentTitle/ContentTitle';

function Dashboard(props){
    return (
        <section id="Dashboard">
            <ContentTitle 
            onChange={props.onChange}
            title='Welcome Admin!'
            />
            <div className="CardsWrapper">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    );
}

export default Dashboard;