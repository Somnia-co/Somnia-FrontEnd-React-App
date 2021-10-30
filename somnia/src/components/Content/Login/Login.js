import React from "react";
import './Login.css';
import logo from '../../../images/Logo/Somnialogo1.png';
import {GetTranslation} from '../../../public/Dictionary.js';
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";


export default function Login(props){

    const globalLanguage = UseLanguageContext();
    const transaltion = GetTranslation('Login',globalLanguage.value);
    return(
        <div className='LoginForm'>
            <img className='LoginLogo' src={logo} alt='Login Somnia logo'></img>

            <label class='LoginLabel'>{transaltion.emailLogin}</label>
            <input class='LoginInput' type='text' placeholder={transaltion.emailPlaceHolder} name='loginOrPassword'></input>

            <label class='LoginLabel'>{transaltion.password}</label>
            <input class='LoginInput' type='password' placeholder={transaltion.password} name='password'></input>

            <h3 onClick={() => props.onChange({type:'MenuItemChoosen',value: 'REGISTER'})}>{transaltion.noAccount}</h3>

            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>{transaltion.cancel}</div>
                <div className='optionAbout'>{transaltion.login}</div>
            </div>
        </div>
    )
}