import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/__carousel.scss";
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="arrow-button--next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="arrow-button--prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
    </div>
  );
};

const CenterMode = ({ itemsArr }: { itemsArr: any[] }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container carousel-card-container">
      <Slider {...settings}>
        {itemsArr.map((e, index) => (
          <div className="carousel-card" key={index}>
            <div className="carousel-card-img-container">
              <img src={e.img} />
            </div>
            <div className="d-flex flex-column">
              <span className="carousel-card-title">{e.title}</span>
              <div className="carousel-card-text--grey">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <span className="">{e.location}</span>
              </div>
              <div className="carousel-card-text--blue">
                <span className="">{e.vendor}</span>
                {e.isVerified ? (
                  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                ) : (
                  ""
                )}
              </div>
              <span className="carousel-card-price">{e.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
