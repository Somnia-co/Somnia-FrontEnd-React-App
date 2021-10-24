import React,{useEffect,useState} from "react";
import './Content.css';
import MainMenu from "./MainMenu/MainMenu";
import Login from "./Login/Login";


function Content(props){

    const [ActiveItem, SetActiveItem] = useState(props.activeContent.toUpperCase());

    function GetActiveElement(componentProps){
        switch(componentProps.activeContent.toUpperCase()){
            case 'LOGIN': return <Login onChange={HandleChange}></Login>;
            case 'MENU' : return <MainMenu onChange={HandleChange}></MainMenu>;
        }
    }

    function HandleChange(newStateValue)
    {
        switch(newStateValue.type.toString().toUpperCase()){
            case 'MENUITEMCHOOSEN':{
                switch(newStateValue.value.toString().toUpperCase()){
                    case 'ABOUT': SetActiveItem(newStateValue.value.toString().toUpperCase());
                    case 'COLLECTIONS': SetActiveItem(newStateValue.value.toString().toUpperCase());
                    case 'PRODUCTS' : SetActiveItem(newStateValue.value.toString().toUpperCase());
                }
            }
        }
    }
    useEffect(()=>{
    })
    let ActiveContent = GetActiveElement(props);

    return(
        <div class='Content'>
            {ActiveContent}
        </div>
    )
}

export default Content;