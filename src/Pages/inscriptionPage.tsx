import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";
import Inscription from "../Components/inscription";

const InscriptionPage: React.FC = () => {

 
  return (
    <div>
      <Navbar />
      <Inscription/>
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default InscriptionPage;