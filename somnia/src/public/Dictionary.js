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
                case 'SEARCHBAR': 
                    return{placeHolder:'Search something here...'};
                case 'LOGIN': 
                    return {
                    emailLogin:'email or login',
                    emailPlaceHolder: 'email address',
                    password: 'password',
                    noAccount: "Don't have account yet? Sign up here...",
                    cancel: 'cancel',
                    login: 'login'
                }
                case 'REGISTER':
                    return{
                    emailLogin:'email or login',
                    email: 'email address',
                    password: 'password',
                    passwordAgain: 'password again',
                    cancel: 'cancel',
                    register: 'register'
                    }
                case 'FOOTER':
                    return{
                    contact:'Contact us',
                    terms: 'Terms and conditions',
                    privacy: 'Privacy Policy',
                    shipRet: 'Shipping&Returns',
                    faq: 'FAQ'
                    }
                default: return;

            }

            case 'HU':
                switch(component.toString().toUpperCase()){
                    case 'MAINMENU':
                        return {
                            about: 'Rólunk',
                            products: 'TERMÉKEK',
                            collections: 'KOLLEKTÁCIÓK'
                        }
                    case 'SEARCHBAR': return{placeHolder:'Keress valamit itt...'};
                    case 'LOGIN': 
                    return {
                    emailLogin:'email or login',
                    emailPlaceHolder: 'email address',
                    password: 'password',
                    noAccount: "Don't have account yet? Sign up here...",
                    cancel: 'cancel',
                    login: 'login'
                }
                case 'REGISTER':
                    return{
                    emailLogin:'email or login',
                    email: 'email address',
                    password: 'password',
                    passwordAgain: 'password again',
                    cancel: 'cancel',
                    register: 'register'
                    }
                case 'FOOTER':
                    return{
                    contact:'Contact us',
                    terms: 'Terms and conditions',
                    privacy: 'Privacy Policy',
                    shipRet: 'Shipping&Returns',
                    faq: 'FAQ'
                    }
                    default: return;
    
                }

        default: return;
    }
}