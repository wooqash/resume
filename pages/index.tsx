import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // console.log('lint-staged test3');
  const router = useRouter();

  const seoMeta = {
    title: "Resume",
    titleSuffix: "Łukasz Sobola",
    description: "Witam",
    preventIndexing: false,
    preventFollowing: false,
  };

  return (
    <Layout>
      <>
        <Seo meta={seoMeta} />
        <h1>Homepage</h1>
      </>
    </Layout>
  );
};

export default Home;
