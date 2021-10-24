import React from "react";
import './Products.css';

export default function Products(props){
    return(
        <div class='Collections'>
            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>Previous Page</div>
                <div className='optionAbout'>Contact Us</div>
            </div>
        </div>
    )
}