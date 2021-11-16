import React from "react";
import './ShipRet.css';
import ContentTitle from '../ContentTitle/ContentTitle';


export default function ShipRet(props){
    

    
    return(
        <div className="ShipRet">
            <ContentTitle
                onChange={props.onChange}
                title='Terms And Conditions'
            ></ContentTitle>
            <p>The content of Shipping and returns</p>
        </div>
    )

}