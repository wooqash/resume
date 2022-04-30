import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useLanguageContext } from "contexts/language";
import { isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import { CONTACT_LABELS } from "translations.constants";
import styles from "../styles/Home.module.css";

const ContactEN: NextPage = () => {
  const { lang } = useLanguageContext();
  const gSeoMeta = CONTACT_LABELS[lang].seo;
  const seoMeta = isISeo(gSeoMeta) ? gSeoMeta : null;

  return (
    <Layout>
      <>
        {seoMeta && <Seo meta={seoMeta} />}
        <h1>Contact</h1>
      </>
    </Layout>
  );
};

export default ContactEN;
