import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "@/styles/__dropdown.scss";

const options = [
  { value: "IN", label: "Indonesia" },
  { value: "EN", label: "English" },
];

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: { value: string; label: string }) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleDropdown}>
        {selected.value}{" "}
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </button>
      {isOpen && (
        <ul className={`dropdown__menu ${isOpen ? "open" : ""}`}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
