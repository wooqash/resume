export type Language = "pl" | "en";
export type LangContextType = {
  lang: Language;
  changeLang: (lang: Language) => void;
};

export default LangContextType;
