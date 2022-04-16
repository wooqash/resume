import { ReactChild } from "react";
import Navbar from "@/components/Navbar";

type LayoutProps = {
  children: ReactChild
}
 
const Layout:React.FC<LayoutProps> = ({children}) => {

  return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* <Footer footer={footer} socialMedia={socialMediaLinks} pageContext={pageContext} /> */}
        </>
  );
}
 
 
export default Layout;