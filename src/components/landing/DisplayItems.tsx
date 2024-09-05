import React from "react";
import "@/styles/__landing.scss";
import CarouselItems from "@/components/landing/display-items/CarouselItems";
import Collaboration from "./display-items/Collaboration";
import Features from "./display-items/Features";
import Media from "./display-items/Media";
import About from "./display-items/About";
import jsonData from "@/assets/DisplayItems.json";

const DisplayItems: React.FC = () => {
  const items: any[] = jsonData;
  return (
    <div className="displayitems">
      <div className="displayitems__content">
        {items.map((e, index) => (
          <CarouselItems key={index} items={e}></CarouselItems>
        ))}
        <Collaboration></Collaboration>
        <Features></Features>
        <Media></Media>
        <About></About>
      </div>
    </div>
  );
};

export default DisplayItems;
