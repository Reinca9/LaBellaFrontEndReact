import React from "react";
import Navbar from "../Components/navbar";
import UnderNav from "../Components/underNav";
import OurPizzas from "../Components/ourPizzas";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <UnderNav />
      <OurPizzas />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default Home;