import React from "react";
import './Login.css';
import logo from '../../../images/Logo/Somnialogo1.png';
import {GetTranslation} from '../../../public/Dictionary.js';
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import {UseActiveContentContext} from "../../../globalContext/context/ActiveContentContext"


export default function Login(props){

    const globalLanguage = UseLanguageContext();
    const ActiveContent = UseActiveContentContext();
    const translation = GetTranslation('Login',globalLanguage.value);
    return(
        <div className='LoginForm'>
            <img className='LoginLogo' src={logo} alt='Login Somnia logo'></img>

            <label class='LoginLabel'>{translation.emailLogin}</label>
            <input class='LoginInput' type='text' placeholder={translation.emailPlaceHolder} name='loginOrPassword'></input>

            <label class='LoginLabel'>{translation.password}</label>
            <input class='LoginInput' type='password' placeholder={translation.password} name='password'></input>

            <h3 onClick={() => {ActiveContent.HandleChange('Register')}}>{translation.noAccount}</h3>

            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => ActiveContent.HandleChange('MENU')}>{translation.cancel}</div>
                <div className='optionAbout'>{translation.login}</div>
            </div>
        </div>
    )
}