import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";
import PizzaDetails from "../Components/pizzaDetails";


const PizzaDetailsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PizzaDetails />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default PizzaDetailsPage;
