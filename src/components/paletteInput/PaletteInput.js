import React from "react";

import "./PaletteInput.css";

import PropTypes from "prop-types";

function PaletteInput({
  rawPalette,
  handleInputChange,
  handleInputSubmit,
  paletteLength
}) {
  const disableSubmit = paletteLength < 2;
  const clickability = disableSubmit ? "disabled" : "clickable";

  return (
    <section className="palette-input">
      <form aria-label="form" onSubmit={handleInputSubmit}>
        <div className="palette-input__controls">
          <label className="palette-input__heading" htmlFor="palette-input">
            Add palette
          </label>
          <input
            className={`palette-input__submit-button palette-input__submit-button--${clickability}`}
            type="submit"
            value="+"
            disabled={disableSubmit}
          />
        </div>
        <textarea
          className="palette-input__text-area"
          type="textarea"
          name="palette-input"
          id="palette-input"
          aria-multiline="true"
          placeholder="Enter a color palette"
          rows={12}
          cols={36}
          value={rawPalette}
          onChange={handleInputChange}
          spellCheck="false"
        />
      </form>
    </section>
  );
}

PaletteInput.propTypes = {
  rawPalette: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired
};

export default PaletteInput;
