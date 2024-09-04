import React from "react";
import "@/styles/__landing.scss";
import CardBanner from "./landing/CardBanner";
import NewProduct from "./landing/NewProduct";

function Landing() {
  return (
    <div className="landing">
      <CardBanner></CardBanner>
      <NewProduct></NewProduct>
    </div>
  );
}

export default Landing;
