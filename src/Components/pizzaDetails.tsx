import React from "react";
import { useParams } from "react-router-dom";
import { pizzaList } from "../ObjectDB/Pizza";

interface PizzaDetailsParams {
  name: string;
  [key: string]: string | undefined;
}

const PizzaDetails: React.FC = () => {
  const { name } = useParams<PizzaDetailsParams>();

  const pizza = pizzaList.find((pizza) => pizza.name === name);

  if (!pizza) {
    return <div>Pizza not found</div>;
  }

  return (
    <div className="pizzaDetails">
        <h2>{pizza.name}</h2>
        <img src={pizza.imageUrl} alt={pizza.name} className="pizzaImageDetails" />
      <div className="pizzaInfoDetails">
        <div className="pizzaInfosFlexDiv"><p className="infoPizzaTitles">Price:</p> <p className="pizzaDetailsValues">{pizza.price}€</p></div>
        <div className="pizzaInfosFlexDiv"><p className="infoPizzaTitles">Base:</p> <p className="pizzaDetailsValues">{pizza.base}</p></div>
        <div id="fullInfosDiv" className="pizzaInfosFlexDiv"><p className="infoPizzaTitles">Composition complète : </p> <p className="pizzaDetailsValues">{pizza.fullDescription}</p></div>
      </div>
    </div>
  );
};

export default PizzaDetails;
