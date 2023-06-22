import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import FooterLinks from "../Components/footerLinks";
import RegistrationForm from "../Components/register";

const RegisterPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <RegistrationForm />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default RegisterPage;