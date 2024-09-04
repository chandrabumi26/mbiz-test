import React from "react";
import Slider from "react-slick";
import "@/styles/__carousel.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="arrow-button--next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="arrow-button--prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
    </div>
  );
}

function CarouselBanner() {
  const imageArr = [
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2022%2F12%2F01%2F7c851e5d8b69da85dfbb8739bbbfb024.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2024%2F07%2F17%2F670d74307bdc7380d907eed63bd59871.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2024%2F06%2F04%2F24f4f8cdefd7ff68cfe3e26afeac5bb5.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2023%2F11%2F22%2F56972d2f4998a682a7ad9657e17e24d3.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2023%2F10%2F20%2Fbe026c80a08da8069656dc6cfce4f377.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2023%2F10%2F06%2Fab55e8ff8bc7470a573344d960f1256d.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2023%2F09%2F21%2F48aeff6f9a6dbd47c7fb9c92c0aaf229.jpg&w=1920&q=75",
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F900x900%2F2023%2F03%2F06%2F499d18686d680603ab38591561dfe6cc.jpg&w=1920&q=75",
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <Slider {...settings}>
      {imageArr.map((e, index) => (
        <div className="carousel-image" key={index}>
          <img src={e} width={300} />
        </div>
      ))}
    </Slider>
  );
}

export default CarouselBanner;
