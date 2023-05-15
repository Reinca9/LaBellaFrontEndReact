import React from "react";
import veggiePizza from "../picturesFolder/veggiePizza.png";
import quatreFromages from "../picturesFolder/4fromages.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeBody() {
  return (
    <div className="HomeBodyMain">
      <Carousel showThumbs={false}>
        <div>
          <img class="carouselPizza" src={veggiePizza} alt="veggiePizza" />
          <h1>LA VEGGIE</h1>
          <h2>Une nouvelle offre végétarienne.</h2>
        </div>
        <div>
          <img class="carouselPizza" src={quatreFromages} alt="veggiePizza" />
          <h1>LA 4 FROMAGES</h1>
          <h2>Notre meilleur offre.</h2>
        </div>
        <div>
          <img class="carouselPizza" src={veggiePizza} alt="veggiePizza" />
          <h1>LA VEGGIE</h1>
          <h2>Une nouvelle offre végétarienne.</h2>
        </div>
        <div>
          <img class="carouselPizza" src={quatreFromages} alt="veggiePizza" />
          <h1>LA 4 FROMAGES</h1>
          <h2>Notre meilleur offre.</h2>
        </div>
        <div>
          <img class="carouselPizza" src={veggiePizza} alt="veggiePizza" />
          <h1>LA VEGGIE</h1>
          <h2>Une nouvelle offre végétarienne.</h2>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeBody;
