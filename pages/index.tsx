import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Leon Benz | Frontendentwickler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
