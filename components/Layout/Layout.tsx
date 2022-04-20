import { MouseEvent, KeyboardEvent, ReactChild } from "react";
import Navbar from "@/components/Navbar";
import ModeSwitcher from "@/components/ModeSwitcher";
import LangSwitcher from "@/components/LangSwitcher";
import { useThemeContext } from "context/theme.context";
import { useLangContext } from "context/lang.context";
import style from "./Layout.module.scss";

type LayoutProps = {
  children: ReactChild;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, changeTheme } = useThemeContext();
  const { lang, changeLang } = useLangContext();

  const handleThemeChange = (
    e: KeyboardEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement>
  ) => {
    theme === "light" ? changeTheme("dark") : changeTheme("light");
  };

  const handleLangChange = (
    e: KeyboardEvent<HTMLAnchorElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    lang === "pl" ? changeLang("en") : changeLang("pl");
  };

  return (
    <div className={`${style.container} ${style[theme]}`}>
      <ModeSwitcher onModeChange={handleThemeChange} />
      <LangSwitcher onLangChange={handleLangChange} />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
