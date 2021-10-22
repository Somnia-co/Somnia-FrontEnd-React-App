import React, { useEffect,useRef } from 'react';
import './Header.css';
import logo from '../../images/Logo/Somnialogo1.png'
import Search from './Search/Search';
import Collection from './Collection/Collection';
import Login from './Login/Login';

function Header(props){


    //i think we should use that, we'll see, instead i think we should use
    //probably we should use context!!!
    const [HeaderLan, SetHeaderLan] = React.useState('EN');

    // let SelectedItem = document.getElementById(HeaderLan);
    //     SelectedItem.classList.add('Active');
    //we should set then active element in the language selection items
    useEffect(() => {

        //desactivete old items.
        let OldSelectedItem = document.getElementById('HU');
        OldSelectedItem.classList.remove('Active');

        OldSelectedItem = document.getElementById('EN');
        OldSelectedItem.classList.remove('Active');

        let SelectedItem = document.getElementById(HeaderLan);
        SelectedItem.classList.add('Active');

        //let's envoke callback with new value
        //newLanguage is EN or HU, depending what user click
        props.onChange({type: 'LanChange', value: HeaderLan});
        //this.SetHeaderLan(newLanguage);
    },[HeaderLan])
    
  

    let leftSide = <Collection></Collection>;
    if(props.search == true) leftSide = <Search></Search>
    
    return(
        <header lan={props.lan} className='header'>
        {leftSide}
        <div class='RowFlex'>
            <div class='RowFlex lan'>
                <p className='lan option' id='HU' onClick={() => SetHeaderLan('HU')}>HU</p>
                <p className='lan'>/</p>
                <p className='lan option' id='EN' onClick={() => SetHeaderLan('EN')}>EN</p>
            </div>
            <Login SetLoginAttempt={props.onChange}></Login>
        </div>
    </header>
    );
}

export default Header;