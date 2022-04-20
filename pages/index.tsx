import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { HOME } from "../constants";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useLangContext } from "context/lang.context";
import { ISeo } from "types/seo";

const Home: NextPage = () => {
  const router = useRouter();
  const { lang } = useLangContext();
  // const cLocale = router.locale || 'pl';
  const seo = HOME[lang].seo;

  return (
    <Layout>
      <>
        {typeof seo !== "string" && <Seo data={seo} />}
        <h1>Home</h1>
      </>
    </Layout>
  );
};

export default Home;
