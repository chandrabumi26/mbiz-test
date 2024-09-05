import React from "react";
import "@/styles/__landing.scss";
import CardBanner from "./landing/CardBanner";
import NewProduct from "./landing/NewProduct";
import Banner from "./landing/Banner";
import DisplayItems from "./landing/DisplayItems";

function Landing() {
  return (
    <div className="landing">
      <CardBanner></CardBanner>
      <NewProduct></NewProduct>
      <Banner></Banner>
      <DisplayItems></DisplayItems>
    </div>
  );
}

export default Landing;
