import React, { useEffect, useRef, useContext } from "react";
import "./Search.css";
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import {GetTranslation} from '../../../public/Dictionary.js';
import {UseActiveContentContext} from "../../../globalContext/context/ActiveContentContext";


function Search(props) {

  let ActiveContent = UseActiveContentContext();
  function Search(){
    let searchButton = document.getElementById('SearchIcon');
    searchButton.addEventListener('click',function(){
        let inputField = document.getElementById('SearchInput');
        if(inputField){
          let searchQuery = inputField.value;
          ActiveContent.HandleChange('Products', searchQuery);
        }
    })
  }

  const [ActiveSearch, SetActiveSearch] = React.useState(false);

  const globalLanguage = UseLanguageContext();
  const translation = GetTranslation('SearchBar', globalLanguage.value);

  useEffect(() => {
    const SearchInput = document.getElementById("SearchInput");
    const SearchInputAbort = document.getElementById("SearchInputSvg");

    if (ActiveSearch) {
      SearchInput.classList.remove("Hidden");
      SearchInputAbort.classList.remove("Hidden");
    } else {
      SearchInput.classList.add("Hidden");
      SearchInputAbort.classList.add("Hidden");
    }
  }, [ActiveSearch]);

  return (
      <div className="RowFlex">
        <svg
          className="SearchIcon"
          id="SearchIcon"
          onClick={() => SetActiveSearch(true)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
        </svg>
        <input
          className="SearchInput Hidden"
          id="SearchInput"
          type="text"
          onChange={() => Search()}
          placeholder={translation.placeHolder.toString()}
        ></input>
        <svg
          className="SearchInput Hidden"
          id="SearchInputSvg"
          onClick={() => SetActiveSearch(false)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div>
  );
}

export default Search;
