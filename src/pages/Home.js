import React from "react";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Section />
      <HowItWorks />
      <Explore />
      <Footer />
    </>
  );
}

export default Home;
