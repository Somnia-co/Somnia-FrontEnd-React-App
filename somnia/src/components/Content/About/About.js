import React from "react";
import './About.css';
import logo from '../../../images/Logo/Somnialogo1.png';

export default function About(props){
    return(
        <div className='About'>
            <img src={logo} className='LogoAbout'></img>
            <p className='AboutParagraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean dictum ultrices ligula a condimentum. Cras dapibus quam non ipsum ullamcorper, 
            ac consequat turpis sodales. Curabitur ut malesuada ex, sodales molestie purus. 
            Sed ut ante dignissim, condimentum libero et, ullamcorper leo. Maecenas in enim quis ligula 
            lobortis faucibus. Sed porttitor enim accumsan ipsum accumsan, non lacinia tortor viverra. 
            Praesent tempor, dui et aliquam euismod, risus ante dignissim eros, at volutpat ipsum enim sit amet erat.
             Ut eu pretium orci. Duis pulvinar eleifend justo, eget pulvinar urna gravida vel. 
             Maecenas in porta risus. Cras eget ipsum lectus. Vestibulum faucibus arcu justo, 
             quis sollicitudin nisi consequat id.
             Praesent faucibus imperdiet porta. Proin imperdiet consequat quam vitae tristique.
            </p>
            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>Previous Page</div>
                <div className='optionAbout'>Contact Us</div>
            </div>
        </div>
    )
}