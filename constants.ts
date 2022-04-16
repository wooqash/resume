interface Translations {
    [localization: string] : { [key: string] : string }
}
  
export const HOME: Translations = {
    pl : {
        title: "Hello world - PL"
    },
    en : {
        title: "Hello world - EN"
    }
}