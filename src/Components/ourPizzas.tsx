import React from "react";
import baseTomate1 from "../picturesFolder/baseTomate1.png";
import baseTomate2 from "../picturesFolder/baseTomate2.png";

function OurPizzas(): JSX.Element {
  return (
    <div className="ourPizzaMain">
      <h1>Nos Pizzas</h1>
      <div className="categoryPizza">
        <button className="categoryPizzaButton" id="baseTomate">
          base tomate
        </button>
        <button className="categoryPizzaButton" id="baseCreme">
          base crème fraîche
        </button>
        <button className="categoryPizzaButton" id="baseChocolat">
          base chocolat
        </button>
      </div>
      <div className="pizzaCardContainer">
        <div className="flexRowPizzaCard">
          <div className="flexCardPizza">
            <img className="pizzaCardImg" src={baseTomate1} alt="" />
            <div className="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div className="flexCardPizza">
            <img className="pizzaCardImg" src={baseTomate2} alt="" />
            <div className="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div className="flexCardPizza">
            <img className="pizzaCardImg" src={baseTomate2} alt="" />
            <div className="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
        </div>
        <div className="flexRowPizzaCard">
          <div className="flexCardPizza">
            <img className="pizzaCardImg" src={baseTomate2} alt="" />
            <div className="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div className="flexCardPizza">
            <img className="pizzaCardImg" src={baseTomate2} alt="" />
            <div className="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div className="flexCardPizza">
            <img className="pizzaCardImg" src={baseTomate2} alt="" />
            <div className="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPizzas;