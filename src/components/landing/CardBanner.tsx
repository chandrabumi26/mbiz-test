import React, { useState } from "react";
import "@/styles/__landing.scss";
import CarouselBanner from "./card-banner/CarouselBanner";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardBanner() {
  const [isHovered, setHovered] = useState(false);

  const handleMouseHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const categories = [
    {
      title: "Elektronik, Komputer & Komunikasi",
    },
    {
      title: "Otomotif & Transportasi",
    },
    {
      title: "Agrikultur, Produk Segar & Groceries",
    },
    {
      title: "Peralatan Industri, Mesin & Bahan Baku",
    },
    {
      title: "Pakaian, Tekstil & Aksesories",
    },
    {
      title: "Olahraga, Hobby, Hadiah & Hiburan",
    },
    {
      title: "Kesehatan & Kecantikan",
    },
    {
      title: "Konstruksi & Bangunan",
    },
    {
      title: "Jasa",
    },
    {
      title: "Peralatan Listrik, Komponen & Telekomunikasi",
    },
    {
      title: "Metalurgi, Bahan Kimia, Karet & Plastik",
    },
    {
      title: "Perlengkapan Rumah Tangga & Kantor",
    },
  ];
  return (
    <div className={`cardbanner${isHovered ? "--hover" : ""}`}>
      <div
        className={`cardbanner__category-container${
          isHovered ? "--hover" : ""
        }`}
      >
        <div className="cardbanner__category-header">
          <span className="cardbanner__category-label--normal">Kategori</span>
          <span className="cardbanner__category-label--blue">Lihat Semua</span>
        </div>
        <div
          className="cardbanner__list-container"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          {categories.map((e, index) => (
            <div className="cardbanner__list-items" key={index}>
              <div className="d-flex w-100 justify-content-between">
                <span>{e.title}</span>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </div>
              <div className="cardbanner__list-divider"></div>
            </div>
          ))}
        </div>
      </div>
      {!isHovered ? (
        <div className="cardbanner__carousel-container">
          <CarouselBanner></CarouselBanner>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardBanner;
