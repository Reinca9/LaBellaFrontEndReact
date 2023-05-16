import React from "react";
import Navbar from "../Components/navbar";
import Contact from "../Components/contact";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default ContactPage;