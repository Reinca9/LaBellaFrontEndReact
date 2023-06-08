import React from "react";
import { Pizza, pizzaList } from "../ObjectDB/Pizza";

interface MenuCardsProps {
    selectedCategory: string;
  }
  
  export const MenuCards: React.FC<MenuCardsProps> = ({ selectedCategory }) => {
    
    const filteredPizzaList = pizzaList.filter(
      (pizza) => pizza.base === selectedCategory
    );
  
    return (
      <div className="pizzaCardContainer">
        {filteredPizzaList.map((pizza, index) => (
          <div className="flexCardPizza" key={index}>
            <img className="pizzaCardImg" src={pizza.imageUrl} alt="" />
            <div className="pizzaCardDescription">
              <h2>{pizza.name}</h2>
              <p>{pizza.description}</p>
              <p>{pizza.price.toFixed(2)}$</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MenuCards;