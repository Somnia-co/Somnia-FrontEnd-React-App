import React from "react";
import './Collections.css';

export default function Collections(props){
    return(
        <div class='Collections'>
            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>Previous Page</div>
                <div className='optionAbout'>Contact Us</div>
            </div>
        </div>
    )
}