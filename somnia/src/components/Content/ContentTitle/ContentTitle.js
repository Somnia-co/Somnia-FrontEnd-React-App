import React from "react";
import './ContentTitle.css';
import {UseActiveContentContext} from '../../../globalContext/context/ActiveContentContext'

export default function ContentTitle(props){

    const ActiveContext = UseActiveContentContext();

    return(
        <div className='RowFlex'>
        <svg
          onClick={() => ActiveContext.HandleChange('MENU')}
          className='ContentTitleIcon'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" />
        </svg>
        <h1 className="ContentTitle">{props.title}</h1>
      </div>
    )
}