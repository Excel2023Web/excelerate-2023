import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Pic1 from "../../assets/png/whatsimg.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./WhatsExcel.css";
export default class ImageSlider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    autoPlay: false,
    interval: 3500,
  };

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.setState((prevState) => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length,
      }));
    }, this.state.interval);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  slides = [
    {
      key: uuidv4(),
      content: <img src={Pic1} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src={Pic1}  alt="8" />,
    },
  ];

  render() {
    return (
      //   <div style={{ width: "50%", height: "500px", margin: "0 auto" }}>
      <div className="whatexcel__carosul">
        <button className="whatexcel__carosul__btn"  onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}><FaAngleLeft/></button>
        <div className="whatexcel__carosul__img">
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            animationConfig={this.state.config}
            autoPlay={this.state.autoPlay}
            interval={this.state.interval}
          />
        </div>

        <button className="whatexcel__carosul__btn" onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}><FaAngleRight/> </button>
      </div>
    );
  }
}
