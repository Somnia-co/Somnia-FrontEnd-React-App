import React,{useEffect} from "react";
import './Content.css';
import MainMenu from "./MainMenu/MainMenu";
import Login from "./Login/Login";


function Content(props){

    function GetActiveElement(componentProps){
        switch(componentProps.activeContent.toUpperCase()){
            case 'LOGIN': return <Login></Login>;
            case 'MENU' : return <MainMenu></MainMenu>;
        }
    }

    useEffect(()=>{
        console.log(ActiveContent);
    })
    let ActiveContent = GetActiveElement(props);

    return(
        <div class='Content'>
            {ActiveContent}
        </div>
    )
}

export default Content;