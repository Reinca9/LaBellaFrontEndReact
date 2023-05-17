import React from "react";
import veggiePizza from "../picturesFolder/veggiePizza.png";
import quatreFromages from "../picturesFolder/4fromages.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'tailwindcss/tailwind.css';
import { useRef, useState, useEffect } from 'react';

const CarouselComponent: React.FC = () => {
  const totalSlides = 5; 
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    if (currentSlide === totalSlides -1 ) {
      const timeout = setTimeout(() => {
       
        setCurrentSlide(0);
      }, 5000); // timer avant le reset une fois la dernière frame atteint

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentSlide, totalSlides]);

  const handleChange = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="HomeBodyMain " >
      <Carousel   showThumbs={false}
        autoPlay={true}
        interval={1500} // l'interval de switch de slide
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={handleChange}
        ref={carouselRef}>
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
