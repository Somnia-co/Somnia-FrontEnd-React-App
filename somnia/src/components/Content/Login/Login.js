import React from "react";
import './Login.css';
import logo from '../../../images/Logo/Somnialogo1.png';


export default function Login(props){
    return(
        <div className='LoginForm'>
            <img className='LoginLogo' src={logo} alt='Login Somnia logo'></img>

            <label class='LoginLabel'>email or login</label>
            <input class='LoginInput' type='text' placeholder='email adress' name='loginOrPassword'></input>

            <label class='LoginLabel'>password</label>
            <input class='LoginInput' type='password' placeholder='password' name='password'></input>

            <h3 onClick={() => props.onChange({type:'MenuItemChoosen',value: 'REGISTER'})}>Don't have account yet? Sign up here...</h3>

            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>Cancel</div>
                <div className='optionAbout'>Login</div>
            </div>
        </div>
    )
}