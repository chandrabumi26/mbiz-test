import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/__carousel.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "@/styles/__landing.scss";
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

const Collaboration = () => {
  const itemsArr = [
    {
      img: "https://i.ytimg.com/vi/hmUI-_l6uQI/mqdefault.jpg",
      title:
        "Penandatanganan Kesepakatan Mbizmarket & Pemerintah Provinsi Jawa Barat",
      description:
        "Bandung, 6 Desember 2019 Penandatanganan kesepakatan kerja sama Mbizmarket bersama Pemerintah Provinsi Jawa Barat.",
    },
    {
      img: "https://i.ytimg.com/vi/8XycIwNdQOk/mqdefault.jpg",
      title:
        "Halo #Bali ! Penandatanganan PKS Pemerintah Provinsi Bali dan #Mbizmarket !",
      description:
        "Setelah Jawa Barat, kini Mbizmarket siap merambah Bali! Terima kasih atas kepercayaan Pemerintah Provinsi Bali untuk memilih Mbizmarket sebagai platform pengadaan barang/jasa! Mbizmarket siap membantu mentransformasi pengadaan barang dan jasa ke sistem digital",
    },
    {
      img: "https://i.ytimg.com/vi/Du_OzR3YwLc/mqdefault.jpg",
      title: "Milestone Mbiz & Mbizmarket 2016 - 2020",
      description:
        "Setelah pengalaman dengan berbagai perusahaan multinasional sejak 2015, Mbiz menjadi pionir solusi total e-procurement di industri B2B Indonesia. Di 2019, Mbizmarket hadir sebagai B2B marketplace yang juga hadir untuk semua skala bisnis bahkan untuk skala pemerintahan.",
    },
    {
      img: "https://i.ytimg.com/vi/QdyFJ_ENCws/mqdefault.jpg",
      title:
        "Jawa Timur Gandeng #Mbizmarket untuk #JatimBeJo (Jawa Timur Belanja Online)",
      description:
        "Kerja sama Mbizmarket dan Pemprov Jawa Timur dilakukan lewat program Jatim Bejo (Jawa Timur Belanja Online). Program ini diresmikan oleh Gubernur Jawa Timur, Khofifah Indar Parawansa, pada 19 November 2020.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="displayitems__content-container">
      <span className="displayitems__content-title">Kerjasama Mbizmarket</span>
      <div className="slider-container carousel-card-container displayitems__content-collaboration">
        <Slider {...settings}>
          {itemsArr.map((e, index) => (
            <div
              className="carousel-card displayitems__collaboration-card"
              key={index}
            >
              <div className="displayitems__collaboration-img">
                <img src={e.img} />
              </div>
              <div className="d-flex flex-column">
                <span className="displayitems__collaboration-title">
                  {e.title}
                </span>
                <span className="displayitems__collaboration-description--grey">
                  {e.description}
                </span>
              </div>
              <div className="displayitems__collaboration-footer">
                <span className="displayitems__collaboration-description--blue">
                  Selengkapnya
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collaboration;
