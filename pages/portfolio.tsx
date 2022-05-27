import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Projects from "@/components/Projects";
import Seo from "@/components/Seo";

import { useLanguageContext } from "contexts/language";
import { isIHeading, isISeo } from "helpers/type-guards.helpers";
import type { NextPage } from "next";
import { PORTFOLIO_LABELS } from "translations.constants";

const Portfolio: NextPage = () => {
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
        <Projects />
      </>
    </Layout>
  );
};

export default Portfolio;
