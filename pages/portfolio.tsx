import Image from "next/image";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIHeading, isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import { PORTFOLIO_LABELS } from "translations.constants";

const Home: NextPage = () => {
  const { lang } = useLanguageContext();
  const gSeoMeta = PORTFOLIO_LABELS[lang].seo;
  const pageTitle = PORTFOLIO_LABELS[lang].heading;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;
  const heading = pageTitle && isIHeading(pageTitle) ? pageTitle : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}

        {heading && <PageTitle heading={heading} />}
        <SimpleGrid
          minChildWidth="250px"
          spacing="40px"
          w="100%"
          textAlign="center"
        >
          <Box>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/350/250?random=1"
              alt="Picture of the author"
              width={350}
              height={250}
            />
          </Box>
          <Box>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/350/250?random=1"
              alt="Picture of the author"
              width={350}
              height={250}
            />
          </Box>
          <Box>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/350/250?random=1"
              alt="Picture of the author"
              width={350}
              height={250}
            />
          </Box>
          <Box>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/350/250?random=1"
              alt="Picture of the author"
              width={350}
              height={250}
            />
          </Box>
          <Box>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/350/250?random=1"
              alt="Picture of the author"
              width={350}
              height={250}
            />
          </Box>
          <Box>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/350/250?random=1"
              alt="Picture of the author"
              width={350}
              height={250}
            />
          </Box>
        </SimpleGrid>
      </>
    </Layout>
  );
};

export default Home;
