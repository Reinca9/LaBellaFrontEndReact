import React from "react";
import baseTomate1 from "../picturesFolder/baseTomate1.png";
import baseTomate2 from "../picturesFolder/baseTomate2.png";

function ourPizzas() {
  return (
    <div class="ourPizzaMain">
      <h1>Nos Pizzas</h1>
      <div class="categoryPizza">
        <button class="categoryPizzaButton" id="baseTomate">
          base tomate{" "}
        </button>
        <button class="categoryPizzaButton" id="baseCreme">
          base crème fraîche{" "}
        </button>
        <button class="categoryPizzaButton" id="baseChocolat">
          base chocolat
        </button>
      </div>
      <div class="pizzaCardContainer">
        <div class="flexRowPizzaCard">
          <div class="flexCardPizza">
            <img class="pizzaCardImg" src={baseTomate1} alt="" />
            <div class="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div class="flexCardPizza">
            <img class="pizzaCardImg" src={baseTomate2} alt="" />
            <div class="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div class="flexCardPizza">
            <img class="pizzaCardImg" src={baseTomate2} alt="" />
            <div class="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
        </div>
        <div class="flexRowPizzaCard">
          <div class="flexCardPizza">
            <img class="pizzaCardImg" src={baseTomate2} alt="" />
            <div class="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div class="flexCardPizza">
            <img class="pizzaCardImg" src={baseTomate2} alt="" />
            <div class="pizzaCardDescription">
              <h2>Olivia</h2>
              <p>Base tomate, fromage, olives vertes, olives noires...</p>
              <p>6.00$</p>
            </div>
          </div>
          <div class="flexCardPizza">
            <img class="pizzaCardImg" src={baseTomate2} alt="" />
            <div class="pizzaCardDescription">
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

export default ourPizzas;
