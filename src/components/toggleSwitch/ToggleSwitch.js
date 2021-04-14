import React from "react";

import "./ToggleSwitch.css";

function ToggleSwitch({
  heading,
  name,
  optionLabels,
  showLabels,
  state,
  setState
}) {
  const handleChange = (event) => {
    setState(event.target.value === optionLabels.true);
  };

  // State now being true/false instead of a string is causing issues with component logic below - rewrite it all. Take into account CSS too!

  return (
    <form className={`toggle-switch toggle-switch--${state}`}>
      <section className="toggle-switch__container">
        <h1 className="toggle-switch__heading">{heading}</h1>
        <label htmlFor={name} className="toggle-switch__label">
          <span className="toggle-switch__label-text">{heading}</span>
          <input
            className="toggle-switch__input"
            type="checkbox"
            name={name}
            id={name}
            value={state ? optionLabels.false : optionLabels.true}
            onChange={handleChange}
            checked={state}
          />
          <div className="toggle-switch__sliding-container">
            <div className="toggle-switch__text-container">
              <span className="toggle-switch__text-true">
                {showLabels && optionLabels.true}
              </span>
            </div>
            <div className="toggle-switch__circle"></div>
            <div className="toggle-switch__text-container">
              <span className="toggle-switch__text-false">
                {showLabels && optionLabels.false}
              </span>
            </div>
          </div>
        </label>
      </section>
    </form>
  );
}

export default ToggleSwitch;
