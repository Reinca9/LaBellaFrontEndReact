import React, { useState } from "react";
import Navbar from "../Components/navbar";
import MenuCards from "../Components/menuCards";
import OurPizzas from "../Components/ourPizzas";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";


const LaCarte: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tomato");
  
    const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
    };
  
    return (
      <div>
        <Navbar />
        <OurPizzas
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <MenuCards selectedCategory={selectedCategory} />
        <Footer />
        <FooterLinks />
      </div>
    );
  }
  
  export default LaCarte;