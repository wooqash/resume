import { useRouter } from "next/router";
import { createContext, useContext, useState, ReactChild } from "react";
import { LanguageContextType, Language } from "@/types/language.type";

const LanguageContext = createContext<LanguageContextType | null>(null);

// const LanguageProvider: React.FC<{ children: ReactChild }> = ({ children }) => {
//   const router = useRouter();
//   const locale = (router.locale as Language) || "pl";
//   const [lang, setLang] = useState<Language>(locale);
//   return (
//     <LanguageContext.Provider value={{ lang: lang, changeLang: setLang }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

export const useLanguageContext = () => {
  return useContext(LanguageContext) as LanguageContextType;
};

export default useLanguageContext;
