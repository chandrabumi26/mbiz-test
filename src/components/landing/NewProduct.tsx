import React from "react";
import "@/styles/__landing.scss";
import CarouselNewProduct from "@/components/landing/new-product/CarouselNewProduct";
import jsonData from "@/assets/NewProduct.json";

const NewProduct = () => {
  const itemsArr: any[] = jsonData;
  return (
    <div className="newproduct">
      <div className="newproduct__content">
        <span className="newproduct__content-title">
          Produk Terbaru Mbizmarket
        </span>
        <div className="newproduct__carousel">
          <CarouselNewProduct itemsArr={itemsArr}></CarouselNewProduct>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
