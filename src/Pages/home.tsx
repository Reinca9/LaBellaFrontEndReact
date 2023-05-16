import React from "react";
import Navbar from "../Components/navbar";
import Carousel from "../Components/carousel";
import HomeBodyPromo from "../Components/homeBodyPromo";
import OurPizzas from "../Components/ourPizzas";
import LoyaltyCard from "../Components/loyaltyCard";
import GoogleMapApi from "../Components/googleMapApi";
import Contact from "../Components/contact";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
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
