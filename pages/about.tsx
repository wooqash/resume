import type { NextPage } from "next";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIHeading, isISeo } from "helpers/type-guards.helpers";
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
  const pageTrans = ABOUT_LABELS[lang].heading;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;
  const heading = pageTrans && isIHeading(pageTrans) ? pageTrans : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}

        {heading && <PageTitle heading={heading} />}
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
      </>
    </Layout>
  );
};

export default AboutEN;
