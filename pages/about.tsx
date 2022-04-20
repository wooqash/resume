import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { ABOUT } from "../constants";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const cLocale = router.locale || "pl";
  const seo = ABOUT[cLocale].seo;

  return (
    <Layout>
      <>
        {typeof seo !== "string" && <Seo data={seo} />}
        <h1>About</h1>
      </>
    </Layout>
  );
};

export default Home;
