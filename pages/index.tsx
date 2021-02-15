import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

const Home = () => {
  return (
    <>
      <Head>
        <title>Leon Benz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <About />
    </>
  );
};

export default Home;
