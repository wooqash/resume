import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useLanguageContext } from "contexts/language";
import { isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HOME_LABELS } from "translations.constants";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { lang } = useLanguageContext();
  const gSeoMeta = HOME_LABELS[lang].seo;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}
        <h1>{lang === "pl" ? "Strona główna" : "Homepage"}</h1>
      </>
    </Layout>
  );
};

export default Home;
