import React from "react";
import veggiePizza from "../picturesFolder/veggiePizza.png";
import quatreFromages from "../picturesFolder/4fromages.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent: React.FC = () => {
  return (
    <div className="HomeBodyMain">
      <Carousel showThumbs={false}>
        <div>
          <img className="carouselPizza" src={veggiePizza} alt="veggiePizza" />
          <h1>LA VEGGIE</h1>
          <h2>Une nouvelle offre végétarienne.</h2>
        </div>
        <div>
          <img className="carouselPizza" src={quatreFromages} alt="veggiePizza" />
          <h1 className="quatreFromageh1">LA 4 FROMAGES</h1>
          <h2 className="quatreFromageh2">Notre meilleur offre.</h2>
        </div>
        <div>
          <img className="carouselPizza" src={veggiePizza} alt="veggiePizza" />
          <h1>LA VEGGIE</h1>
          <h2>Une nouvelle offre végétarienne.</h2>
        </div>
        <div>
          <img className="carouselPizza" src={quatreFromages} alt="veggiePizza" />
          <h1 className="quatreFromageh1">LA 4 FROMAGES</h1>
          <h2 className="quatreFromageh2">Notre meilleur offre.</h2>
        </div>
        <div>
          <img className="carouselPizza" src={veggiePizza} alt="veggiePizza" />
          <h1>LA VEGGIE</h1>
          <h2>Une nouvelle offre végétarienne.</h2>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
