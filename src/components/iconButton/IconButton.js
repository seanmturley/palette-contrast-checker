import React from "react";

import { IconContext } from "react-icons";

import "./IconButton.css";

import PropTypes from "prop-types";

function IconButton({ heading, name, icon, disableOnClick, state, setState }) {
  const handleClick = () => {
    setState();
  };

  const preventFocusOnClick = (event) => {
    event.preventDefault();
  };

  const clickability = disableOnClick && state ? "disabled" : "clickable";

  return (
    <button
      className={`icon-button icon-button--${clickability}`}
      type="button"
      name={name}
      onClick={handleClick}
      onMouseDown={preventFocusOnClick}
      disabled={disableOnClick && state}
    >
      <IconContext.Provider value={{ className: "icon-button__icon" }}>
        {icon}
      </IconContext.Provider>
      <h1 className="icon-button__heading">{heading}</h1>
    </button>
  );
}

IconButton.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  disableOnClick: PropTypes.bool.isRequired,
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired
};

export default IconButton;
