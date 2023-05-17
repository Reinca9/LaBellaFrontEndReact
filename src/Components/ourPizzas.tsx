import React, { useState } from "react";


interface OurPizzasProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}

function OurPizzas({ selectedCategory, handleCategoryClick }: OurPizzasProps): JSX.Element {
  const renderPizzaMenu = () => {
    if (selectedCategory === "Tomato") {
      return (
        <div className="pizzaMenu">
        
        </div>
      );
    } else if (selectedCategory === "Creme") {
      return (
        <div className="pizzaMenu">
        
        </div>
      );
    } else if (selectedCategory === "Chocolat") {
      return (
        <div className="pizzaMenu">
        
        </div>
      );
    }
  };

  return (
    <div className="ourPizzaMain">
      <h1>Nos Pizzas</h1>
      <div className="categoryPizza">
        <button
          className={`categoryPizzaButton ${selectedCategory === "Tomato" ? "tomatoSelected" : ""}`}
          id="baseTomate"
          onClick={() => handleCategoryClick("Tomato")}
        >
          base tomate
        </button>
        <button
          className={`categoryPizzaButton ${selectedCategory === "Creme" ? "baseCreme" : ""}`}
          id="baseCreme"
          onClick={() => handleCategoryClick("Creme")}
        >
          base crème fraîche
        </button>
        <button
          className={`categoryPizzaButton ${selectedCategory === "Chocolat" ? "baseChocolat" : ""}`}
          id="baseChocolat"
          onClick={() => handleCategoryClick("Chocolat")}
        >
          base chocolat
        </button>
      </div>
      {renderPizzaMenu()}
    </div>
  );
}

export default OurPizzas;
