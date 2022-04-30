import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useLanguageContext } from "contexts/language";
import { isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import { ABOUT_LABELS } from "translations.constants";
import styles from "../styles/Home.module.css";

const AboutEN: NextPage = () => {
  const { lang } = useLanguageContext();
  const gSeoMeta = ABOUT_LABELS[lang].seo;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}
        <h1>O mnie</h1>
      </>
    </Layout>
  );
};

export default AboutEN;
