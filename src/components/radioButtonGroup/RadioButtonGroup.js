import React from "react";

import "./RadioButtonGroup.css";

import PropTypes from "prop-types";

function RadioButtonGroup({
  heading,
  name,
  options,
  disabled,
  selected,
  setState
}) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const clickability = disabled ? "disabled" : "clickable";

  return (
    <form className={`radio-button-group radio-button-group--${clickability}`}>
      <section
        className="radio-button-group__container"
        role="radiogroup"
        aria-labelledby={name}
      >
        <h1 className="radio-button-group__heading" id={name}>
          {heading}
        </h1>
        {options.map((option) => {
          const isSelected =
            option === selected ? " radio-button-group__label--selected" : "";
          return (
            <label
              key={option}
              htmlFor={option}
              className={`radio-button-group__label${isSelected}`}
            >
              <input
                className="radio-button-group__input"
                type="radio"
                name={name}
                id={option}
                value={option}
                onChange={handleChange}
                checked={option === selected}
                disabled={disabled}
              />
              <span className="radio-button-group__label-text">{option}</span>
            </label>
          );
        })}
      </section>
    </form>
  );
}

RadioButtonGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  disabled: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired
};

export default RadioButtonGroup;
