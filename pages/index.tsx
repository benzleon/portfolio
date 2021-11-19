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
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Ich bin Leon Benz ein Programmierer / Frontend Entwickler. Dies ist mein Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="leon, benz, programmierer, entwickler, fullstack, react, programmer, portfolio"
        />
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
