import React from "react";
import Navbar from "../Components/navbar";
import HomeBody from "../Components/homeBody";
import HomeBodyPromo from "../Components/homeBodyPromo";
import OurPizzas from "../Components/ourPizzas";
import LoyaltyCard from "../Components/loyaltyCard";
import GoogleMapApi from "../Components/googleMapApi";
import Contact from "../Components/contact.js";
import Footer from "../Components/footer.js";
import FooterLinks from "../Components/footerLinks.js";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeBody />
      <HomeBodyPromo />
      <OurPizzas />

      <LoyaltyCard />
      <GoogleMapApi />
      <Contact />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default Home;
