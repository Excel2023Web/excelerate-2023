import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
// import Pic1 from "../../assets/png/whatsimg.png";
import { useSwipeable } from "react-swipeable";
import "./WhatsExcel.css";
import { p1, p2, p3, p4, p5,p6,p7 } from "../../assets/png/gallery";
function ImageSlider() {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(1);
  const [carouselConfig] = useState(config.gentle);
  const [autoPlay] = useState(true);
  const [interval] = useState(2500);

  const slides = [
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p1} className="slider__img" alt="1" />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p2} className="slider__img" alt="1" />
        </div>
      ),
    },

    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p3} className="slider__img" alt="1" />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p4} className="slider__img" alt="1" />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p5} className="slider__img" alt="1" />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p6} className="slider__img" alt="1" />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={p7} className="slider__img" alt="1" />
        </div>
      ),
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setGoToSlide((prevGoToSlide) => prevGoToSlide + 1),
    onSwipedRight: () => setGoToSlide((prevGoToSlide) => prevGoToSlide - 1),
  });

  useEffect(() => {
    function startAutoPlay() {
      const autoPlayInterval = setInterval(() => {
        setGoToSlide((prevGoToSlide) => (prevGoToSlide + 1) % slides.length);
      }, interval);

      return () => {
        clearInterval(autoPlayInterval);
      };
    }

    const stopAutoPlay = startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [interval, slides.length]);

  return (
    <div className="panelist__caroussel" {...handlers}>
      <div className="panelist__caroussel__img">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          animationConfig={carouselConfig}
          autoPlay={autoPlay}
          interval={interval}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
