import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import bellaLogo from "../picturesFolder/bellaLogo.png";
import 'tailwindcss/tailwind.css';
import SearchBar from "./searchBar";

function Navbar() {
  const [showSearchComponent, setShowSearchComponent] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchIconClick = () => {
    setShowSearchComponent(true);
  };

  const handleSearchBarBlur = () => {
    setShowSearchComponent(false);
  };

  const handleSearch = (searchValue: string) => {
    // Handle the search logic here
    console.log("Search value:", searchValue);
  };

  useEffect(() => {
    if (showSearchComponent && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchComponent]);

  return (
    <nav className="navbar">
      <div className="laBellaLogo">
        <Link className="bellaLogoLink" to="/home">
          <img className="bellaLogo" src={bellaLogo} alt="Logo Bella" />
        </Link>
      </div>
      <div>
        <Link className="linkStyleNav" to="/home">
          Accueil
        </Link>
      </div>
      <div>
        <Link className="linkStyleNav" to="/la-carte">
          Menu
        </Link>
      </div>
      <div>
        <Link className="linkStyleNav" to="/contact">
          Contact
        </Link>
      </div>
      <div className="phoneAndNumber">
        <Link className="linkPhoneAndNumber" to="/connexion">
        <i className="fa-solid fa-phone"> </i>
        <p>06 01 02 03 04</p>
        </Link>
      </div>
      <div className="connexionLogoetText">
      <Link className="linkStyleNavLogin" to="/connexion">
      <i className="fa-solid fa-right-to-bracket"></i>
      <p>Se connecter</p>
      </Link>
      </div>
      <div className="searchIconDiv">
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearchIconClick}></i>
      </div>
      <div className="searchBarAppearnav" onBlur={handleSearchBarBlur}>
        {showSearchComponent && (
          <SearchBar inputRef={searchInputRef} onSearch={handleSearch} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
