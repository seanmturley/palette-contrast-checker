import React, { useState } from "react";

import PaletteInput from "../../components/paletteInput/PaletteInput";

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

  const handleInputChange = (event) => {
    const rawPaletteInput = event.target.value;

    const parsedPalette = parseRawPalette(event.target.value);

    if (parsedPalette) {
      setPaletteData(getPaletteData(parsedPalette));
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
        />
      )}
    </>
  );
}

export default PaletteInputContainer;
