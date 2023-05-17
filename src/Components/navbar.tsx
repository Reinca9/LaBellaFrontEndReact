import React, { useState } from "react";
import { Link } from "react-router-dom";
import bellaLogo from "../picturesFolder/bellaLogo.png";
import 'tailwindcss/tailwind.css';
import UnderNav from "./underNav";
import SearchBar from "./searchBar";

function Navbar() {
  const [showSearchComponent, setShowSearchComponent] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchComponent(true);
  };

  const handleSearchBarBlur = () => {
    setShowSearchComponent(false);
  };

  return (
    <nav className="navbar">
      <div className="laBellaLogo">
        <Link className="bellaLogoLink" to="/home">
          <img className="bellaLogo" src={bellaLogo} alt="Logo Bella" />
        </Link>
      </div>
      <div>
        <Link className="link-style" to="/home">
          Accueil
        </Link>
      </div>
      <div>
        <Link className="link-style" to="/la-carte">
          Menu
        </Link>
      </div>
      <div>
        <Link className="link-style" to="/contact">
          Contact
        </Link>
      </div>
      <div className="phoneAndNumber">
        <i className="fa-solid fa-phone"> </i>
        <p>06 01 02 03 04</p>
      </div>
      <div className="searchIconDiv">
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearchIconClick}></i>
      </div>
      <div className="searchBarAppearnav" onBlur={handleSearchBarBlur}>
        {showSearchComponent && (
          <SearchBar />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

