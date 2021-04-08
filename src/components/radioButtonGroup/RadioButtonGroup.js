import React from "react";

import "./RadioButtonGroup.css";

function RadioButtonGroup({ heading, name, options, selected, setState }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <form>
      <h1>{heading}</h1>
      <section>
        {options.map((option) => {
          return (
            <label
              key={option}
              htmlFor={option}
              className={option === selected ? "selected" : null}
            >
              <input
                type="radio"
                name={name}
                id={option}
                value={option}
                onChange={handleChange}
                checked={option === selected}
              />
              {option}
            </label>
          );
        })}
      </section>
    </form>
  );
}

export default RadioButtonGroup;
