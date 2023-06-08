import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, NavigateOptions } from "react-router-dom";
import bellaLogo from "../picturesFolder/bellaLogo.png";
import 'tailwindcss/tailwind.css';
import SearchBar from "./searchBar";
import { Pizza, pizzaList } from "../ObjectDB/Pizza";

function Navbar() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>([]);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    // Do nothing
  };

  const handleSearchBarBlur = () => {
    if (filteredPizzas.length > 0) {
      setFilteredPizzas([]);
    }
  };

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    if (searchValue.trim() === "") {
      setFilteredPizzas([]);
    } else {
      const filteredPizzas = pizzaList.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPizzas(filteredPizzas);
    }
  };

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  const handlePizzaClick = (event: React.MouseEvent, pizza: Pizza) => {
    event.stopPropagation();
    navigate(`/details/${encodeURIComponent(pizza.name)}`, { replace: true });
  };
  

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
        <SearchBar onSearch={handleSearch} inputRef={searchInputRef} />
        {filteredPizzas?.length > 0 && (
          <div className="searchResults">
            {filteredPizzas?.map(pizza => (
              <div
                key={pizza.name}
                className="searchResultItem"
               onClick={(event) => handlePizzaClick(event, pizza)}
              >
                <img src={pizza.imageUrl} alt={pizza.name} className="pizzaImage" />
                <div className="pizzaDetails">
                  <h3>{pizza.name}</h3>
                  <p>{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
