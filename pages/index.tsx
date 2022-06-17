import Intro from "@/components/Intro";
import IntroImage from "@/components/IntroImage";
import Seo from "@/components/Seo";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import { HOME_LABELS } from "translations.constants";
import LayoutHP from "@/components/LayoutHP";

const Home: NextPage = () => {
  const { lang } = useLanguageContext();
  const { colorMode } = useColorMode();
  const gSeoMeta = HOME_LABELS[lang].seo;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;

  return (
    <LayoutHP>
      <>
        {seoMeta && <Seo meta={seoMeta} />}
        {/* <h1>{lang === "pl" ? "Strona główna" : "Homepage"}</h1> */}
        {/* <Container centerContent> */}
        <Box
          pos="fixed"
          h="200%"
          width="100%"
          transform="rotate(15deg)"
          left="-83%"
          top="-50%"
          backgroundColor={colorMode === "dark" ? "teal.400" : "teal.600"}
          zIndex="0"
          d={{ base: "none", lg: "block" }}
        ></Box>
        <Flex
          minH="100vh"
          w={{ lg: "100%" }}
          m={["0 auto"]}
          p={{ base: "4rem 2rem 6rem", lg: "8" }}
          gap="6"
          alignItems="center"
          justifyContent="center"
          flexDir={{ base: "column", lg: "row" }}
          zIndex="1"
          pos="relative"
        >
          <IntroImage />
          <Intro />
        </Flex>
        {/* <Box
          pos="fixed"
          h="200%"
          width="100%"
          transform="rotate(15deg)"
          right="-95%"
          top="-50%"
          backgroundColor="teal.600"
          zIndex="0"
          d={["none", null, null, "block"]}
        ></Box> */}
        {/* </Container> */}
      </>
    </LayoutHP>
  );
};

export default Home;
