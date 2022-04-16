import MainMenu from "./MainMenu";
import ModeSwitcher from "./ModeSwitcher";
import SocialMenu from "./SocialMenu";

type NavBarProps = {}
 
const NavBar:React.FC<NavBarProps> = () => {
  return (
    <nav>
      <ModeSwitcher />
      <MainMenu />
      <SocialMenu />
    </nav>
  );
}
 
 
export default NavBar;
