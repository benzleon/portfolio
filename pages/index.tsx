import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

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
      <Footer />
    </>
  );
};

export default Home;
