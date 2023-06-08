import React from "react";
import Navbar from "../Components/navbar";
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