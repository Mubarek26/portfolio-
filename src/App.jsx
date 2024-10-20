import React from "react";

import About from "./components/About/AboutMe";
import VideoAd from "./components/Video/VideoAd";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      {/* <VideoAd /> */}
      <Header />

      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <About />
      <People />
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
