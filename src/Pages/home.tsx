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
import LoggedInNavbar from "../Components/loggedInNavbar";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const Home: React.FC = () => {
  const isConnected = useSelector((state: RootState) => {
    console.log(state); // Temporary debugging log
    return state.auth.isConnected;
  });
  const [selectedCategory, setSelectedCategory] = useState("Tomato");
  useEffect(() => {
    const successMessage = localStorage.getItem('loginSuccess');
    if (successMessage) {
      toast.success(successMessage); 
     
    }
  }, []);
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  
  };
 
  return (
    <div>
    {isConnected ? <LoggedInNavbar /> : <Navbar />} 
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
    <ToastContainer />
  </div>
  );
}

export default Home;