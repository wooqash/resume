import { useLanguageContext } from "contexts/language";
import { KeyboardEvent, MouseEvent, ReactChild } from "react";
import LangSwitcher from "../LangSwitcher";
import ModeSwitcher from "../ModeSwitcher";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactChild;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { lang, changeLang } = useLanguageContext();
  const handleLangChange = (
    e: KeyboardEvent<HTMLAnchorElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    lang === "pl" ? changeLang("en") : changeLang("pl");
  };

  return (
    <>
      <LangSwitcher onLangChange={handleLangChange} />
      <ModeSwitcher />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
