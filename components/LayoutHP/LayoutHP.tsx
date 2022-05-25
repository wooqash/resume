import { ReactChild } from "react";
import Navbar from "../Navbar";

type LayoutHPProps = {
  children: ReactChild;
};

const LayoutHP: React.FC<LayoutHPProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default LayoutHP;
