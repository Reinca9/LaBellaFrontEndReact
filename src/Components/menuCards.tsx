import React from "react";
import baseTomate1 from "../picturesFolder/baseTomate1.png";
import baseTomate2 from "../picturesFolder/baseTomate2.png";
import baseCreme1 from "../picturesFolder/4fromages.png";
import baseCreme2 from "../picturesFolder/pizzaTrad.png";
import Pizza from "../ObjectDB/Pizza";
import pizzachoco1  from "../picturesFolder/pizzaChoco1.png";
import pizzachoco2  from "../picturesFolder/pizzaChoco2.png";

interface MenuCardsProps {
    selectedCategory: string;
  }
  
  export const MenuCards: React.FC<MenuCardsProps> = ({ selectedCategory }) => {
    const pizzaList: Pizza[] = [
        new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, baseTomate1, "Tomato"),
        new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, baseTomate1, "Tomato"),
        new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, baseTomate1, "Tomato"),
        new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, baseTomate1, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate2, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate2, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate2, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
        new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme2, "Creme"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme2, "Creme"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme2, "Creme"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme1, "Creme"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme1, "Creme"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme1, "Creme"),
        new Pizza("Pepperoni", "Base crême, pepperoni, fromage...", 8.0, baseCreme1, "Creme"),
        new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco1, "Chocolat"),
        new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco1, "Chocolat"),
        new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco1, "Chocolat"),
        new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
        new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
        new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
    ];
  
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