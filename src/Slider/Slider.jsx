import React, { useState } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import carousol1 from "./../assets/img/carousol-1.webp";
import carousol2 from "./../assets/img/carousol-2.webp";
import carousol3 from "./../assets/img/carousol-3.webp";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [carousol1, carousol2, carousol3];

  const showSlide = (n) => {
    setCurrentSlide((n + slides.length) % slides.length);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  return (
    <div className="container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slide} alt="" />
          </div>
        ))}
      </div>
      <div className="navigation">
        <span className="prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span className="next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
      <span className="dots-container">
        {slides.map((_, index) => (
          <span
            className={`dot ${index === currentSlide ? "active" : ""}`}
            key={index}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </span>
    </div>
  );
};

export default Slider;