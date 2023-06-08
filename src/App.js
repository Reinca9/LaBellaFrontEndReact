import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home.tsx";
import Menu from "./Pages/lacarte.tsx";
import Contact from "./Pages/contactPage.tsx";
import Connexion from "./Pages/connexionPage.tsx";
import Inscription from "./Pages/inscriptionPage.tsx";
import PizzaDetails from "./Pages/pizzaDetailsPage.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/la-carte" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/details/:name" element={<PizzaDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
