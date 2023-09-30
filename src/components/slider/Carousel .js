/** @format */
import { useState, useEffect } from "react";
import "./style/Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let setTimeoff = null;

  useEffect(() => {
    setTimeoff =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const slideLeft = () => {
    if (current === images.length + 1) {
      setCurrent(0);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(setTimeoff);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}>
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }>
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        {/* end of arrow */}

        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
