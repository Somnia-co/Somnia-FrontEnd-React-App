import React,{useState} from "react";
const LanguageContext = React.createContext();

export function LanguageContextProvider(props){

    const [language, SetLanguage] = useState('EN');

    function toggleLanguage(){
        if(language === 'EN') SetLanguage('HU');
        else SetLanguage('EN');
    }
    let lanContextValue={value: language, HandleLanChange: toggleLanguage}
    //we can insert some code that calculates and changes the value here
    return(
        
        //here you can provide a new value for the context, also here you can
        //change the value of the global language
        <LanguageContext.Provider value={lanContextValue}>  
            {props.children}
        </LanguageContext.Provider>
    )

}

export const UseLanguageContext = () => React.useContext(LanguageContext);
