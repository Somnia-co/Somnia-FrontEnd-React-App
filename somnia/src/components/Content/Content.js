import React,{useEffect,useState} from "react";
import './Content.css';
import MainMenu from "./MainMenu/MainMenu";
import Login from "./Login/Login";
import About from "./About/About";


function Content(props){

    const [ActiveItem, SetActiveItem] = useState(props.activeContent.toString().toUpperCase());

    function GetActiveElement(){
        switch(ActiveItem){
            case 'LOGIN': return <Login onChange={HandleChange}></Login>;
            case 'MENU' : return <MainMenu onChange={HandleChange}></MainMenu>;
            case 'ABOUT' : return<About  onChange={HandleChange}></About>;
            case 'COLLECTIONS': return;
            case 'PRODUCTS':return;
            
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
            case 'GETBACK':{
                switch(newStateValue.value.toString().toUpperCase()){
                    case 'MENU': SetActiveItem(newStateValue.value.toString().toUpperCase());
                }

            }
        }
    }
    let ActiveContent = GetActiveElement();
    useEffect(()=>{
       
    })

    return(
        <div class='Content'>
            {ActiveContent}
        </div>
    )
}

export default Content;