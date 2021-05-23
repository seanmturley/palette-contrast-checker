import React from "react";

import IconButton from "../../components/iconButton/IconButton";

import "./PaletteInput.css";

import PropTypes from "prop-types";

function PaletteInput({
  rawPalette,
  handleInputChange,
  handleInputSubmit,
  disableSubmit,
  clearInputProps,
  pastePaletteProps
}) {
  const clickability = disableSubmit ? "disabled" : "clickable";

  return (
    <section className="palette-input">
      <form aria-label="form" onSubmit={handleInputSubmit}>
        <section className="palette-input__top-controls">
          <label className="palette-input__heading" htmlFor="palette-input">
            Add palette
          </label>
          <input
            className={`palette-input__submit-button palette-input__submit-button--${clickability}`}
            type="submit"
            value="+"
            disabled={disableSubmit}
          />
        </section>
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
        <section className="palette-input__bottom-controls">
          <IconButton {...clearInputProps} />
          <IconButton {...pastePaletteProps} />
        </section>
      </form>
    </section>
  );
}

PaletteInput.propTypes = {
  rawPalette: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  clearInputProps: PropTypes.object.isRequired,
  pastePaletteProps: PropTypes.object.isRequired
};

export default PaletteInput;
