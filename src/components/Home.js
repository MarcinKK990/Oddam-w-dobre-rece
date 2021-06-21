import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Greetingsteps from "./Greetingsteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <Greetingsteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactForm />
    </div>
  );
}

export default Home;
