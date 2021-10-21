import React,{useEffect} from "react";
import './Search.css';




function Search(props){

    const [ActiveSearch, SetActiveSearch] = React.useState(false);

    //useEffect is envoked every time we update the component. Also when it mounts.
    useEffect(() => {
        
        const SearchInput = document.getElementById('SearchInput');
        SearchInput.classList.toggle('Hidden');

    })

    return(
        <div className='RowFlex'>
            <svg class='SearchIcon' id='SearchIcon' onClick={ () => SetActiveSearch(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            <input class='SearchInput' id='SearchInput' type='text'></input>
        </div>
    )
}



export default Search;