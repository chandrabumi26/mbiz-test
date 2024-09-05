import React, { useState, useEffect } from "react";
import "@/styles/__landing.scss";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const goUp = () => {
  window.scroll({ top: 0, behavior: "smooth" });
};

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const middleHeight = window.innerHeight / 2;
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollY >= middleHeight || scrollY >= pageHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`floatingbutton ${isVisible ? "show" : "hide"}`}
      onClick={goUp}
    >
      <span>Kembali Keatas</span>
      <FontAwesomeIcon icon={faCircleUp}></FontAwesomeIcon>
    </button>
  );
};

export default FloatingButton;
