import React from "react";
import './Collections.css';

export default function Collections(props){

    return(
        <div className='Collections'>
        
            <div classNameName='RowFlex'>
                <div classNameName='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>Previous Page</div>
                <div classNameName='optionAbout'>Contact Us</div>
            </div>
        </div>
        
    )
}