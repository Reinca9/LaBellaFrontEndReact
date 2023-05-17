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
import MenuCards from "../Components/menuCards";
import { useState } from "react";
import Pizza from "../ObjectDB/Pizza";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tomato");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  
  };
 
  return (
    <div>
      <Navbar />
      <Carousel />
      <HomeBodyPromo />
      <OurPizzas
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <MenuCards selectedCategory={selectedCategory} />
      <LoyaltyCard />
      <GoogleMapApi />
      <Contact />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default Home;