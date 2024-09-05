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

const Media = () => {
  const itemsArr = [
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F08%2F26%2Feb1536dc174ca8e025ce61f0ce6a9883.jpg&w=1920&q=75",
      title: "Pemerintah Provinsi Jawa Timur Gelar E-Purchasing Award",
      description:
        "Apresiasi Terhadap OPD Yang Berperan Dalam Transformasi Digital Pengadaan Barang/ Jasa Di Jawa Timur",
      date: "26 Agustus 2024",
    },
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F01%2F23%2F50a5eccbed1d29237689d00a8f6fe913.jpg&w=1920&q=75",
      title: "Prosedur Pengadaan Barang, Kebutuhan Hingga Pembayaran",
      description:
        "Optimalkan proses pengadaan barang dengan panduan langkah demi langkah",
      date: "26 Agustus 2024",
    },
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F01%2F09%2F9628921748725015f9a1a825d892247a.jpg&w=1920&q=75",
      title: "Pemkab Kudus Digitalisasi Pengadaan, Program Gebyok",
      description:
        "Program Gebyok Digitalisasi Pengadaan Barang/jasa untuk Dukung Usaha Kecil & Mikro",
      date: "26 Agustus 2024",
    },
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F08%2F19%2F9ae208d2a9c48dd96ad42d5ccc8e647d.jpg&w=1920&q=75",
      title: "Kalimantan Barat Dorong Percepatan Pengadaan Digital",
      description:
        "Pemerintah Provinsi Kalimantan Barat menggelar Temu Bisnis antara UMKM dan OPD pada 13 Mei 2024 ",
      date: "26 Agustus 2024",
    },
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F08%2F20%2F1aee41f1844316128d5c6edf0c78f68f.jpg&w=1920&q=75",
      title: "Depok Luncurkan Program Deprok untuk UMKM Go Digital",
      description:
        "Peluncuran Program Depok Ekonomi Pro Rakyat – OK (Deprok) oleh Wali Kota Depok",
      date: "26 Agustus 2024",
    },
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F08%2F20%2F11dd017d6c602b0deefbbf59b5909e08.jpg&w=1920&q=75",
      title: "Pemprov Jawa Timur Selenggarakan Temu Bisnis UMKM ",
      description:
        "Pemerintah Provinsi Daerah Jawa Timur mengadakan Temu Bisnis dan Sosialisasi Travel Fair ",
      date: "26 Agustus 2024",
    },
    {
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F235x130%2F2024%2F01%2F09%2F9628921748725015f9a1a825d892247a.jpg&w=1920&q=75",
      title: "Pemkab Kudus Digitalisasi Pengadaan, Program Gebyok",
      description:
        "Program Gebyok Digitalisasi Pengadaan Barang/jasa untuk Dukung Usaha Kecil & Mikro",
      date: "26 Agustus 2024",
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
      <span className="displayitems__content-title">
        Liputan Media & Info Bisnis
      </span>
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
                <span className="displayitems__collaboration-description--grey">
                  {e.date}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Media;
