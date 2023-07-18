import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bellaLogo from '../picturesFolder/bellaLogo.png';
import 'tailwindcss/tailwind.css';
import SearchBar from './searchBar';
import { Pizza, pizzaList } from '../ObjectDB/Pizza';
import { RootState } from '../store';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  isConnected: !!state.auth.token,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type NavbarProps = PropsFromRedux;

const Navbar: React.FC<NavbarProps> = ({ isConnected }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>([]);

  const handleSearchBarBlur = () => {
    setTimeout(() => {
      setFilteredPizzas([]);
    }, 200);
  };

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    if (searchValue.trim() === '') {
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
    navigate(`/details/${encodeURIComponent(pizza.name)}`, { replace: true });
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="laBellaLogo">
        <Link className="bellaLogoLink" to="/home">
          <img className="bellaLogo
