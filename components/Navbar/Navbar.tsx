import MainMenu from "./MainMenu";
import SocialMenu from "./SocialMenu";

import style from "./Navbar.module.scss";
import { useThemeContext } from "context/theme.context";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const { theme } = useThemeContext();
  return (
    <nav className={`${style.nav} ${style[theme]}`}>
      <MainMenu />
      <SocialMenu />
    </nav>
  );
};

export default NavBar;
