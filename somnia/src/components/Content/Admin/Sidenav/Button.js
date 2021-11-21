import React from 'react';
//import menuButton from "../../../../images/Arrow/back.png";

function Button(props){



    /*
    if(props.imgPath !== ""){
        return (
            <input type="image" src={menuButton} alt="" className={props.className}></input>
        );
    }
    else{
    */
        return (
            <button className="rowFlex" onClick="">
                <span className={"material-icons-round " + props.alignIcon}>{props.icon}</span>
                <div className={props.alignText}>{props.text}</div>
            </button>
        );
    /*
    }
    */
    
}

export default Button;