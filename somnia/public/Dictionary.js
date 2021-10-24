function GetTranslation(component, language){
    switch(language.toUpperCase()){
        case 'EN':
            switch(component.toUpperCase()){
                case 'HEADER':
                    return {
                        
                    }
                case 'CONTENT':{
                    
                }

            }
            break;

        case 'HU':
            switch(component.toUpper()){

            }
            break;

        default:
            return null;
    }
}