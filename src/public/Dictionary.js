export function GetTranslation(component, language) {
  switch (language.toString().toUpperCase()) {
    case "EN":
      switch (component.toString().toUpperCase()) {
        case "MAINMENU":
          return {
            about: "ABOUT US",
            // products: "PRODUCTS",
            collections: "COLLECTIONS",
            categories: "PRODUCTS",
          };
        case "SEARCHBAR":
          return { placeHolder: "Search something here..." };
        case "LOGIN":
          return {
            emailLogin: "email or login",
            emailPlaceHolder: "email address",
            password: "password",
            noAccount: "Don't have account yet? Sign up here...",
            cancel: "cancel",
            login: "login",
          };
        case "REGISTER":
          return {
            emailLogin: "email or login",
            email: "email address",
            password: "password",
            passwordAgain: "password again",
            cancel: "cancel",
            register: "register",
          };
        case "FOOTER":
          return {
            contact: "Contact us",
            terms: "Terms and conditions",
            privacy: "Privacy Policy",
            shipRet: "Shipping&Returns",
            faq: "FAQ",
          };
        case "COLLECTIONS":
          return {
            title: "Collections:",
            previous: "Previous page",
            contact: "Contact us",
          };
        case "ABOUT":
          return {
            description:
              "The designers of the Somnia Co. team typically follow the design form and pattern of extravagant, minimalist-style products, thus moving forward with an everyday yet special, youthful fashion line. Return to the main page and take a look at our products!",
            previous: "Previous page",
            contact: "Contact us",
            title: "About us",
          };
        case "PRODUCTS":
          return {
            title: "Products",
            previous: "Previous page",
            contact: "Contact us",
          };
        case "CATEGORIES":
          return {
            title: "Categories",
          };
        default:
          return;
      }

    case "HU":
      switch (component.toString().toUpperCase()) {
        case "MAINMENU":
          return {
            about: "R??LUNK",
            // products: "TERM??KEK",
            collections: "KOLLEKCI??K",
            categories: "TERM??KEK",
          };
        case "SEARCHBAR":
          return { placeHolder: "Keress valamit itt..." };
        case "LOGIN":
          return {
            emailLogin: "felhaszn??l??n??v",
            emailPlaceHolder: "email c??m",
            password: "jelsz??",
            noAccount: "Nincs m??g fi??kod? Regisztr??lj itt!",
            cancel: "m??gsem",
            login: "bejelentkez??s",
          };
        case "REGISTER":
          return {
            emailLogin: "felhaszn??l??n??v",
            email: "email c??m",
            password: "jelsz??",
            passwordAgain: "jelsz?? ??jra",
            cancel: "m??gsem",
            register: "regisztr??ci??",
          };
        case "FOOTER":
          return {
            contact: "Kapcsolat",
            terms: "Felt??telek",
            privacy: "Adatkezel??si nyilatkozat",
            shipRet: "Sz??ll??t??s ??s visszak??ld??s",
            faq: "GYIK",
          };
        case "COLLECTIONS":
          return {
            title: "Kollekci??k:",
            previous: "El??z?? oldal",
            contact: "Kapcsolat",
          };
        case "ABOUT":
          return {
            description:
              "A Somnia Co. csapat??nak tervez??i tipikusan extravag??ns, minimalista st??lus?? term??kek tervez??si form??j??t ??s mint??j??t k??vetik, ez??ltal haladva a mindennapi, de m??gis k??l??nleges, fiatalos divatvonallal. T??rjen vissza a f??oldalra, ??s n??zzen sz??t b??tran term??keink k??z??tt!",
            previous: "El??z?? oldal",
            contact: "Kapcsolatfelv??tel",
            title: "R??lunk",
          };
        case "PRODUCTS":
          return {
            title: "Term??kek",
            previous: "El??z?? oldal",
            contact: "Kapcsolat",
          };
        case "CATEGORIES":
          return {
            title: "Kateg??ri??k",
          };
        default:
          return;
      }

    default:
      return;
  }
}
