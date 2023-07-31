import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bellaLogo from "../picturesFolder/bellaLogo.png";
import 'tailwindcss/tailwind.css';
import SearchBar from "./searchBar";
import { Pizza, pizzaList } from "../ObjectDB/Pizza";
import { connect } from 'react-redux';
import { RootState } from "../store";

interface LoggedInNavbarProps {
    isConnected: boolean; //
}  

function LoggedInNavbar({ isConnected }: LoggedInNavbarProps) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>([]);

  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleSearchBarBlur = () => {
    setTimeout(() => {
      setFilteredPizzas([]);
    }, 200);
  };

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    if (searchValue.trim() === "") {
      setFilteredPizzas([]);
    } else {
      const filteredPizzas = pizzaList.filter((pizza: Pizza) =>
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
    navigate(`/details/${encodeURIComponent(pizza.name)}`, { replace: true });
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="laBellaLogo">
        <Link className="bellaLogoLink" to="/home">
          <img className="bellaLogo" src={bellaLogo} alt="Logo Bella" />
        </Link>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
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
          <Link className="linkPhoneAndNumber" to="/home">
            <i className="fa-solid fa-phone"> </i>
            <p className="phoneNumber">06 01 02 03 04</p>
          </Link>
        </div>
        <div>
           <Link className="profileDiv"to="profile">
           <i className="fa-solid fa-user"></i>
           <p className="profileP">Votre profile</p>
           </Link>
        </div>
      </div>
      <div className="burgerIconDiv" onClick={handleMenuToggle}>
        <i className={`fa-solid fa-bars ${isMenuOpen ? 'open' : ''}`}></i>
      </div>
      <div className="searchBarAppearnav" onBlur={handleSearchBarBlur}>
        <SearchBar onSearch={handleSearch} inputRef={searchInputRef} />
        {filteredPizzas.length > 0 && (
          <div className="searchResults">
            {filteredPizzas.map((pizza: Pizza) => (
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

const mapStateToProps = (state: RootState) => ({
  isConnected: state.auth?.isConnected ?? false, 
});

export default connect(mapStateToProps)(LoggedInNavbar);
