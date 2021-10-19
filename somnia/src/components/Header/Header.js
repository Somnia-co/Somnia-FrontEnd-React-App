import React from 'react';
import './Footer.css';
import logo from '../../images/Logo/Somnialogo1.png'

function Header(){
    return(
        <header className='header'>
            <div className = 'RowFlex'>
                <img className='logo' alt='Somnia Logo' src={logo}></img>
                <h1 class='logo'>SEASON II</h1>
        </div>
        <div class='RowFlex'>
            <div class='RowFlex lan'onclick="ChangeLanguage()">
                <p class='lan'>HU</p>
                <p class='lan'>/</p>
                <p class='lan'>EN</p>
            </div>
            <svg class='loginIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z"/></svg>
        </div>
    </header>
    );
}

export default Header;