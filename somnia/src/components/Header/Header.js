import React, { useEffect } from 'react';
import './Header.css';
import logo from '../../images/Logo/Somnialogo1.png'
import Search from './Search/Search';
import Collection from './Collection/Collection';

function Header(props){


    //i think we should use that, we'll see, instead i think we should use
    //probably we should use context!!!
    const [HeaderLan, SetHeaderLan] = React.useState('EN');

    //we should set then active element in the language selection items
    useEffect(() => {
        let SelectedItem = document.getElementById(HeaderLan);
        SelectedItem.classList.add('Active');
        
    })
    
    
    function handleLanguageChange(argument){
        //let's envoke callback with new value
        //argument is EN or HU, depending what user click
        props.onChange(argument);
        //this.SetHeaderLan(argument);
    }

    let leftSide = <Collection></Collection>;
    if(props.search == true) leftSide = <Search></Search>
    
    return(
        <header lan={props.lan} onChange={handleLanguageChange} className='header'>
        {leftSide}
        <div class='RowFlex'>
            <div class='RowFlex lan'>
                <p class='lan option' id='HU' onClick={() => handleLanguageChange('HU')}>HU</p>
                <p class='lan'>/</p>
                <p class='lan option' id='EN' onClick={() => handleLanguageChange('EN')}>EN</p>
            </div>
            <svg class='loginIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z"/></svg>
        </div>
    </header>
    );
}

export default Header;