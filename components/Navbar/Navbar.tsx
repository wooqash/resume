import SocialMenu from "../SocialMenu";
import MainMenu from "./MainMenu";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <MainMenu />
      <SocialMenu />
    </>
  );
};

export default Navbar;
