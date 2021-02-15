import Head from "next/head";
import { Header } from "../components/Navigation/Navigation";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Leon Benz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
