import { useTranslation } from 'react-i18next';
import { languages } from '../locales/i18n.js'
import { useDarkmode } from "../stores/darkmodeStore"

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const { isDarkmodeActive, toggleDarkmode } = useDarkmode()

    const changeLanguage = (event) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage);
    };


    return (
        <select className={`${isDarkmodeActive ?"bg-slate-900 text-white  border-zinc-300" :""} "border  border-zinc-300 px-3 rounded-md"`} onChange={changeLanguage} value={i18n.language}>
            {languages.map(language => <option value={language.value}>
                {language.title}
            </option>)}
        </select>
    );
};

export default LanguageSelector;