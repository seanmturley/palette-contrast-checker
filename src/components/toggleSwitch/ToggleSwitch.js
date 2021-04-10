import React from "react";

import "./ToggleSwitch.css";

function ToggleSwitch({ heading, name, options, labels, state, setState }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

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
            value={state === options.on ? options.off : options.on}
            onChange={handleChange}
            checked={state === options.on}
          />
          <div className="toggle-switch__sliding-container">
            <div className="toggle-switch__on-label">
              {labels && options.on}
            </div>
            <div className="toggle-switch__circle"></div>
            <div className="toggle-switch__off-label">
              {labels && options.off}
            </div>
          </div>
        </label>
      </section>
    </form>
  );
}

export default ToggleSwitch;
