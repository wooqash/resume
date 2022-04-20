import MainMenu from "./MainMenu";
import SocialMenu from "./SocialMenu";
import SkipLink from "./SkipLink";
import { useThemeContext } from "context/theme.context";
import { useLangContext } from "context/lang.context";
import { DEFAULT_LABELS } from "../../constants";

import style from "./Navbar.module.scss";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const { theme } = useThemeContext();
  const { lang } = useLangContext();
  const skipLinkLabel = DEFAULT_LABELS[lang].skipLinkLabel;
  return (
    <nav className={`${style.nav} ${style[theme]}`}>
      {typeof skipLinkLabel === "string" && (
        <SkipLink label={skipLinkLabel} sectionId="Main" />
      )}
      <MainMenu />
      <SocialMenu />
    </nav>
  );
};

export default NavBar;
