import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // console.log('lint-staged test3');
  const router = useRouter();

  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  );
};

export default Home;
