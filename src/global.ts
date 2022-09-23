import { i18n } from "./i18n/i18n";
export const mode = localStorage.getItem('mode');
export const language = JSON.parse(window.localStorage.language) ;

export const changeLanguage = (values : any) => {
    i18n.changeLanguage(values);
    localStorage.setItem('language', JSON.stringify(values));
};