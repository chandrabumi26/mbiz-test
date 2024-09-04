import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/__searchbar.scss";
function SearchBar() {
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search Poduk / Toko"
      />
      <button className="searchbar__button-search">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default SearchBar;
