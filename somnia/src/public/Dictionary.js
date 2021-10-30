export function GetTranslation(component, language){
    switch(language.toString().toUpperCase()){
        case 'EN':
            switch(component.toString().toUpperCase()){
                case 'MAINMENU':
                    return {
                        about: 'ABOUT US',
                        products: 'PRODUCTS',
                        collections: 'COLLECTIONS'
                    }
                case 'SEARCHBAR': return{placeHolder:'Search something here...'};
                default: return;

            }

            case 'HU':
                switch(component.toString().toUpperCase()){
                    case 'MAINMENU':
                        return {
                            about: 'ABOUT US',
                            products: 'PRODUCTS',
                            collections: 'COLLECTIONS'
                        }
                    case 'SEARCHBAR': return{placeHolder:'Keress valamit itt...'};
                    default: return;
    
                }

        default: return;
    }
}