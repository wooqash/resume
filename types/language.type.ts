export type Language = "pl" | "en";
export type LanguageContextType = {
  lang: Language;
  changeLang: (lang: Language) => void;
};

export default LanguageContextType;
