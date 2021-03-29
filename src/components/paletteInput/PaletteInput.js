import React from "react";

function PaletteInput({ rawPalette, handleInputChange, handleInputSubmit }) {
  return (
    <section>
      <form aria-label="form" onSubmit={handleInputSubmit}>
        <label htmlFor="palette-input">Add palette</label>
        <textarea
          type="textarea"
          name="palette-input"
          id="palette-input"
          aria-multiline="true"
          placeholder="Enter a color palette"
          rows={15}
          cols={45}
          value={rawPalette}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default PaletteInput;
