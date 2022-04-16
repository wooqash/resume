import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { HOME } from '../constants';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SeoData } from 'types/seo-data';

const Home: NextPage = () => {
  // console.log('lint-staged test3');
  const router = useRouter();
  const cLocale = router.locale || 'pl';
  const seo = HOME[cLocale].seo;

  console.log(seo);
  return (
    <Layout>
     <Seo data={seo} />
    </Layout>
  )
}

export default Home
