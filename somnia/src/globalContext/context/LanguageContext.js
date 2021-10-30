import React,{useState} from "react";
const LanguageContext = React.createContext();

export function LanguageContextProvider(props){

    const [language, SetLanguage] = useState('EN');
    let toggleLanguage;

    //we can insert some code that calculates and changes the value here
    return(
        
        //here you can provide a new value for the context, also here you can
        //change the value of the global language
        <LanguageContext.Provider value={'EN'}>  
            {props.children}
        </LanguageContext.Provider>
    )

}

export const UseLanguageContext = () => React.useContext(LanguageContext);
