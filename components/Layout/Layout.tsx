import { ReactChild } from "react";
import LangSwitcher from "../LangSwitcher";
import ModeSwitcher from "../ModeSwitcher";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactChild;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
