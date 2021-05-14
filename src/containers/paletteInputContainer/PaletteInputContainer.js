import React, { useState } from "react";

import PaletteInput from "../../components/paletteInput/PaletteInput";

import PropTypes from "prop-types";

import {
  parseRawPalette,
  getPaletteData
} from "./PaletteInputContainerHelpers";

function PaletteInputContainer({
  showPaletteInput,
  setPaletteData,
  handleInputSubmit
}) {
  const [rawPalette, setRawPalette] = useState("");
  const [paletteLength, setPaletteLength] = useState(0);

  const handleInputChange = (event) => {
    const rawPaletteInput = event.target.value;

    const parsedPalette = parseRawPalette(event.target.value);

    if (parsedPalette) {
      setPaletteData(getPaletteData(parsedPalette));
      setPaletteLength(parsedPalette.length);
    }

    setRawPalette(rawPaletteInput);
  };

  return (
    <>
      {showPaletteInput && (
        <PaletteInput
          rawPalette={rawPalette}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          paletteLength={paletteLength}
        />
      )}
    </>
  );
}

PaletteInputContainer.propTypes = {
  showPaletteInput: PropTypes.bool.isRequired,
  setPaletteData: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired
};

export default PaletteInputContainer;
