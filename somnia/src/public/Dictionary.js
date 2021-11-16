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
                case 'COLLECTIONS':
                    return{
                        title: 'Collections:',
                        previous: 'Previous page',
                        contact: 'Contact us'
                    }
                case 'ABOUT':
                    return{
                        description:   'Some description dsadasda desc',
                        previous: 'Previous page',
                        contact: 'Contact us',
                        title: 'About us'
                    }
                case 'PRODUCTS':
                    return{
                        title: 'Products',
                        previous: 'Previous page',
                        contact: 'Contact us'
                    }
                default: return;

            }

            case 'HU':
                switch(component.toString().toUpperCase()){
                    case 'MAINMENU':
                        return {
                            about: 'RÓLUNK',
                            products: 'TERMÉKEK',
                            collections: 'KOLLEKCIÓK'
                        }
                    case 'SEARCHBAR': return{placeHolder:'Keress valamit itt...'};
                case 'LOGIN': 
                    return {
                    emailLogin:'felhasználónév',
                    emailPlaceHolder: 'email cím',
                    password: 'jelszó',
                    noAccount: "Nincs még fiókod? Regisztrálj itt!",
                    cancel: 'mégsem',
                    login: 'bejelentkezés'
                }
                case 'REGISTER':
                    return{
                    emailLogin:'felhasználónév',
                    email: 'email cím',
                    password: 'jelszó',
                    passwordAgain: 'jelszó újra',
                    cancel: 'mégsem',
                    register: 'regisztráció'
                    }
                case 'FOOTER':
                    return{
                    contact:'Kapcsolat',
                    terms: 'Feltételek',
                    privacy: 'Adatkezelési nyilatkozat',
                    shipRet: 'Szállítás és visszaküldés',
                    faq: 'GYIK'
                    }
                case 'COLLECTIONS':
                    return{
                        title: 'Kollekciók:',
                        previous: 'Előző oldal',
                        contact: 'Kapcsolat'
                    }
                case 'ABOUT':
                    return{
                        description:   'Some description',
                        previous: 'Előző oldal',
                        contact: 'Kapcsolat',
                        title: 'Rólunk'
                    }
                case 'PRODUCTS':
                    return{
                        title: 'Termékek',
                        previous: 'Előző oldal',
                        contact: 'Kapcsolat'
                    }
                default: return;
    
                }

        default: return;
    }
}