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
      <div className="pizzaImageContainer">
        <img src={pizza.imageUrl} alt={pizza.name} className="pizzaImage" />
      </div>
      <div className="pizzaInfo">
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>Price: ${pizza.price}</p>
        <p>Base: {pizza.base}</p>
      </div>
    </div>
  );
};

export default PizzaDetails;
