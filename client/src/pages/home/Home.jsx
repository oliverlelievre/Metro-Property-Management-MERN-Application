import Choose from "../../components/Choose";
import News from "../../components/News";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Response from "../../components/Response";
import HomeContact from "../../components/HomeContact";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";
import React from "react";
import "../../styles/styles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="homeContainer">
        <div className="homeContainer__links">
          <Featured />
          <PropertyList />
          <FeaturedProperties />
        </div>
        <Choose />
        <div className="homeContainer__About">
          <About />
        </div>
        <News />
        <Response />
        <HomeContact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
