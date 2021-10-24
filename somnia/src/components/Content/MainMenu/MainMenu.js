import React from 'react';
import './MainMenu.css';
import logo from '../../../images/Logo/Somnialogo1.png'
import { render } from '@testing-library/react';

function MainMenu(props){

    function ChooseOption(option){
        props.onChange({type: 'MenuItemChoosen', value: option});
    }

    return(
        <div className='MainMenu'>
            <img className='MainMenuLogo' src={logo} alt='Big Somnia Logo'></img>
            <h1 class='MenuItem' onClick={() => ChooseOption('ABOUT')}>ABOUT US</h1>
            <h1 class='MenuItem' onClick={() => ChooseOption('PRODUCTS')}>PRODUCTS</h1>
            <h1 class='MenuItem' onClick={() => ChooseOption('COLLECTIONS')}>COLLECTIONS</h1>
        </div>
    )
}

export default MainMenu;