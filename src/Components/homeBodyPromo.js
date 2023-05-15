import React from "react";
import pizzaTrad from "../picturesFolder/pizzaTrad.png";
import freeLargePizza from "../picturesFolder/freelargepizza.png";

function HomeBodyPromo() {
  return (
    <div className="mainBodyPromo">
      <div className="MainPromo1">
        <h2>Promotion</h2>
        <h1>Les Mardis </h1>
        <p className="promo1Text">
          Ne manquez pas notre promotion <br />
          Pizza à moitié prix
        </p>
        <p className="promo1Price">7.00$</p>
        <button>Commander</button>
        <img src={pizzaTrad} alt="pizzatrad" />
      </div>
      <div className="MainPromo2">
        <h2>Promotion</h2>
        <h1>Les Vendredis </h1>
        <p className="troisPizzaMaxi">3 Pizzas maxis achetées</p>
        <p className="laTroisieme">La 3ème à 3.00$</p>
        <p className="laMoinsChère">*la moins chère des trois</p>
        <button>Commander</button>
        <img src={freeLargePizza} alt="freelargepizza" />
      </div>
    </div>
  );
}

export default HomeBodyPromo;
