import React from "react";
import "@/styles/__landing.scss";
import CarouselNewProduct from "@/components/landing/new-product/CarouselNewProduct";

const CarouselItems = ({ items }: { items: any }) => {
  return (
    <div className="displayitems__content-container">
      <span className="displayitems__content-title">{items.label}</span>
      <div className="displayitems__carousel-items">
        <div className="displayitems__carousel-banner">
          <img src={items.banner} />
        </div>
        <div className="displayitems__carousel-container">
          <CarouselNewProduct itemsArr={items.itemsArr}></CarouselNewProduct>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
