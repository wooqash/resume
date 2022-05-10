import JobProfile from "@/components/JobProfile";
import Layout from "@/components/Layout";
import PersonalInfo from "@/components/PersonalInfo";
import PersonalTimeline from "@/components/PersonalTimline";
import Seo from "@/components/Seo";
import Skills from "@/components/Skills";
import Title from "@/components/Title";
import { VStack } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import { ABOUT_LABELS } from "translations.constants";
import styles from "../styles/Home.module.css";

const AboutPL: NextPage = () => {
  const { lang } = useLanguageContext();
  const gSeoMeta = ABOUT_LABELS[lang].seo;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}
        <VStack p={{ base: 4, lg: 8 }}>
          <Title />
          <JobProfile />
          <PersonalInfo />
          <Skills />
          <PersonalTimeline />
        </VStack>
      </>
    </Layout>
  );
};

export default AboutPL;
