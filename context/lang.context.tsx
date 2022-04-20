import { useRouter } from "next/router";
import { createContext, useContext, useState, ReactChild } from "react";
import { LangContextType, Language } from "types/languages";

const LangContext = createContext<LangContextType | null>(null);

const ThemeProvider: React.FC<{ children: ReactChild }> = ({ children }) => {
  const router = useRouter();
  const locale = (router.locale as Language) || "pl";
  const [lang, setLang] = useState<Language>(locale);
  return (
    <LangContext.Provider value={{ lang: lang, changeLang: setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  return useContext(LangContext) as LangContextType;
};

export default ThemeProvider;
