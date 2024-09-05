import React from "react";
import "@/styles/__landing.scss";
import CarouselNewProduct from "@/components/landing/new-product/CarouselNewProduct";

const NewProduct = () => {
  const itemsArr = [
    {
      title: "LCD Proyektor Acer XII26AH DLP",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F16%2F4ab9e8d4c5f8090aaa176de9e3ed9dbc.jpg&w=1920&q=75",
      isVerified: true,
      vendor: "ARINDA ABADI",
      taxtStatus: "Non PKP",
      location: "Jawa Timur",
      price: "Rp.4.504.504,55",
    },
    {
      title: "Mouse Logitech M90",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F06%2F06%2F533cdc13dfbd695bb8b097f96ba81282.jpg&w=1920&q=75",
      isVerified: false,
      vendor: "CV. LIWA RAYAH",
      taxtStatus: "Non PKP",
      location: "Kalimantan Timur",
      price: "Rp.90.000,00",
    },
    {
      title: "InkJet BT 60 (M), 60 (BK)",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F13%2F3424f772207a2dfd56f1e814bc064749.jpg&w=1920&q=75",
      isVerified: false,
      vendor: "CV.MATAHARI",
      taxtStatus: "PKP",
      location: "D.I. Yogyakarta",
      price: "Rp.150.000,00",
    },
    {
      title: "Bola Dunia F4 Kertas HVS Print Fotocopy",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F02%2F20%2F6e5d9bf79c55492bde09f213b570e1b6.jpg&w=1920&q=75",
      isVerified: false,
      vendor: "CV.BORNEO JOY PERKASA",
      taxtStatus: "PKP",
      location: "Kalimantan Timur",
      price: "Rp.83.000,00",
    },
    {
      title: "ThinkBook 14 G4 ABA Ryzen 7-58",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F02%2F01%2Fe59a4a0a23fec608f4f523c2c9e7fcc9.jpg&w=1920&q=75",
      isVerified: true,
      vendor: "Think.ID",
      taxtStatus: "PKP",
      location: "Jawa Timur",
      price: "Rp.10.576.577,00",
    },
    {
      title: "AC Polytron PAC-09VH01 PK",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F01%2F09%2F465c7cbce5b870e6e3943a150cdaf898.jpg&w=1920&q=75",
      isVerified: false,
      vendor: "CV. Kafalo Abadi",
      taxtStatus: "PKP",
      location: "Lampung",
      price: "Rp.5.585.500,00",
    },
  ];
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
