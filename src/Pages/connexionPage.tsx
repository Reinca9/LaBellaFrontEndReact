import React from "react";
import Navbar from "../Components/navbar";
import Carousel from "../Components/carousel";
import HomeBodyPromo from "../Components/homeBodyPromo";
import OurPizzas from "../Components/ourPizzas";

import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";
import Connexion from "../Components/connexion";
const ConnexionPage: React.FC = () => {

 
  return (
    <div>
      <Navbar />
      <Connexion/>
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default ConnexionPage;