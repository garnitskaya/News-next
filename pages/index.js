import Head from "next/head";
import MainContent from '../components/MainContent/MainContent';
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
