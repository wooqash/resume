import type { NextPage } from "next";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isISeo } from "helpers/type-guards.helpers";
import { ABOUT_LABELS } from "translations.constants";

import JobProfile from "@/components/JobProfile";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import PersonalInfo from "@/components/PersonalInfo";
import PersonalTimeline from "@/components/PersonalTimline";
import Seo from "@/components/Seo";
import Skills from "@/components/Skills";

const AboutEN: NextPage = () => {
  const { lang } = useLanguageContext();
  const gSeoMeta = ABOUT_LABELS[lang].seo;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}
        <Flex
          py={{ base: 20, lg: 12 }}
          pl={{ base: 4, md: 4 }}
          pr={{ base: 4, md: 28 }}
          alignItems={{ base: "flex-start", sm: "center" }}
          maxW="container.xl"
          m="0 auto"
          direction="column"
        >
          <PageTitle />
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing="8"
            mb="16"
            // px={{ base: 0, md: 4, lg: 8 }}
          >
            <PersonalInfo />
            <JobProfile />
          </SimpleGrid>
          <Skills />
          <PersonalTimeline />
        </Flex>
      </>
    </Layout>
  );
};

export default AboutEN;
