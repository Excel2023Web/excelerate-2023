import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Pic1 from "../../assets/png/whatsimg.png";
import { useSwipeable } from "react-swipeable";
import "./WhatsExcel.css";

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
          <img src={Pic1} className="slider__img" alt="1" />
          {/* <div className="image-description">
            <h3>Robert Shah</h3>
            <p>Co-Founder and CEO, Cynapse</p>
          </div> */}
      </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={Pic1} className="slider__img"  alt="1" />
          {/* <div className="image-description">
            <h3>Robert Shah</h3>
            <p>Co-Founder and CEO, Cynapse</p>
          </div> */}
      </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="panelist__image-container">
          <img src={Pic1} className="slider__img" alt="1" />
          {/* <div className="panelist__image-description">
            <h3>Robert Shah</h3>
            <p>Co-Founder and CEO, Cynapse</p>
          </div> */}
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
    <div className="panelist__caroussel" data-aos="fade-up" {...handlers}>
        <div className="panelist__caroussel__img" data-aos="fade-up">
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
