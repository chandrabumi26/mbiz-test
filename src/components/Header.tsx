import {
  faBookOpen,
  faCircleUser,
  faGlobe,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/__header.scss";
import Dropdown from "@/components/header/Dropdown";
import Searchbar from "@/components/header/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  const mbizLogo =
    "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Fmbizmarket-blue.png&w=256&q=75";
  return (
    <div className="header">
      <div className="header__panel">
        <div className="header__panel-container">
          <div className="header__panel-section">
            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
            <span>Panduan Berjualan | Panduan Berbelanja</span>
          </div>
          <div className="header__panel-section">
            <div className="header__panel-section">
              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              <span>Bahasa</span>
              <Dropdown></Dropdown>
            </div>
            <div className="header__panel-section">
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              <span>Bantuan</span>
            </div>
            <div className="header__panel-section">
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              <span>Akun</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="header__main-container">
          <img src={mbizLogo} width={175} />
          <Searchbar></Searchbar>
          <button className="header__cart">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
