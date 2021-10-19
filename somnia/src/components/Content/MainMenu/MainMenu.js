import React from 'react';
import './MainMenu.css';
import logo from '../../../images/Logo/Somnialogo1.png'
import { render } from '@testing-library/react';

function MainMenu(props){
    return(
        <div className='MainMenu'>
            <img className='MainMenuLogo' src={logo} alt='Big Somnia Logo'></img>
            <h1 class='MenuItem'>ABOUT US</h1>
            <h1 class='MenuItem'>PRODUCTS</h1>
            <h1 class='MenuItem'>COLLECTIONS</h1>
        </div>
    )
}

export default MainMenu;