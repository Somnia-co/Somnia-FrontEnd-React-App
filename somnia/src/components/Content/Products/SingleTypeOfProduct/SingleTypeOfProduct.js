import React from 'react';
import './SingeTypeStyle.css'

export default function SingleTypeComponent(props){

    let OneTypeProducts = props.products;
    console.log(OneTypeProducts);

    return(
        <div className="SingleType">
            <h2>{props.type}</h2>
            <img src={OneTypeProducts[0].img}></img>
            <h3>{OneTypeProducts[0].name}</h3>
        </div>
    );
}