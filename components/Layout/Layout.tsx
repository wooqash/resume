import { Flex } from "@chakra-ui/react";
import { ReactChild } from "react";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactChild;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Flex
          py={{ base: 20, lg: 12 }}
          pl={{ base: 4 }}
          pr={{ base: 4, lg: 28, "2xl": 4 }}
          alignItems={{ base: "flex-start", sm: "center" }}
          maxW="container.xl"
          m="0 auto"
          direction="column"
        >
          {children}
        </Flex>
      </main>
    </>
  );
};

export default Layout;
