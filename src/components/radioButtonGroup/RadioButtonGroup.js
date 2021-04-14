import React from "react";

import "./RadioButtonGroup.css";

function RadioButtonGroup({ heading, name, options, selected, setState }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <form className="radio-button-group">
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
              />
              <span className="radio-button-group__label-text">{option}</span>
            </label>
          );
        })}
      </section>
    </form>
  );
}

export default RadioButtonGroup;
