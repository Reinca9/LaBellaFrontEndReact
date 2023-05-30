import React, { useRef } from "react";
import bugerIcon from "../picturesFolder/navIcons/burger.png";
import pizzaIcon from "../picturesFolder/navIcons/pizza.png";
import saladIcon from "../picturesFolder/navIcons/salad.png";
import frenchFriesIcon from "../picturesFolder/navIcons/french-fries.png";
import plasticBottleIcon from "../picturesFolder/navIcons/plastic-bottle.png";
import tacoIcon from "../picturesFolder/navIcons/taco.png";
import buritoIcon from "../picturesFolder/navIcons/burrito.png";
import SearchBar from "./searchBar";

interface SearchBarProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onSearch: (searchValue: string) => void;
}

function UnderNav(): JSX.Element {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (searchValue: string) => {
    
    console.log("Search value:", searchValue);
  };

  return (
    <div className="underNavContainer">
      <hr />
    
      <div className="underNavIconsContainer">
        <div>
          <img className="underNavIcons" src={pizzaIcon} alt="" />
          <p>Pizza</p>
        </div>
        <div>
          <img className="underNavIcons" src={bugerIcon} alt="" />
          <p>Burgers</p>
        </div>
        <div>
          <img className="underNavIcons" src={saladIcon} alt="" />
          <p>Salads</p>
        </div>
        <div>
          <img className="underNavIcons" src={tacoIcon} alt="" />
          <p>Tacos</p>
        </div>
        <div>
          <img className="underNavIcons" src={buritoIcon} alt="" />
          <p>Wraps</p>
        </div>
        <div>
          <img className="underNavIcons" src={frenchFriesIcon} alt="" />
          <p>Fries</p>
        </div>
        <div>
          <img className="underNavIcons" src={plasticBottleIcon} alt="" />
          <p>Drinks</p>
        </div>
      </div>
    </div>
  );
}

export default UnderNav;
