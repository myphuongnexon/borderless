import { i18n } from "./i18n/i18n";
export const mode = localStorage.getItem('mode');
export const language = window.localStorage.language ? JSON.parse(window.localStorage.language) : 'en' ;

export const changeLanguage = (values : any) => {
    i18n.changeLanguage(values);
    localStorage.setItem('language', JSON.stringify(values));
};