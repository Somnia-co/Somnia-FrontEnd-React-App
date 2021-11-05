import React from "react";
import './Collections.css';
import { GetCollections } from "../../../public/CollectionsList";
import CollectionButton from "./collection/CollectionButton.js";

export default function Collections(props){

    let collections = GetCollections();


    return(
        <div class='Collections'>
            <h1 className='CollectionsTitle'>Collections:</h1>
            {collections.map((collection) => {
                return <CollectionButton>{collection}</CollectionButton>
            })}
            <div className='RowFlex'>
                <div className='optionAbout' onClick={() => props.onChange({type: 'GetBack', value: 'MENU'})}>Previous Page</div>
                <div className='optionAbout'>Contact Us</div>
            </div>
        </div>
    )
}