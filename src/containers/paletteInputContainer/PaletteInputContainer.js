import React, { useState } from "react";

import PaletteInput from "../../components/paletteInput/PaletteInput";

import { parseRawPalette, getPaletteData } from "../../Helpers";

function PaletteInputContainer({
  showPaletteInput,
  setPaletteData,
  handleInputSubmit
}) {
  const [rawPalette, setRawPalette] = useState("");

  const handleInputChange = (event) => {
    const rawPaletteInput = event.target.value;

    const parsedPalette = parseRawPalette(rawPaletteInput);

    if (parsedPalette) {
      const updatedPaletteData = getPaletteData(parsedPalette);
      setPaletteData(updatedPaletteData);
    }

    setRawPalette(rawPaletteInput);
  };

  if (!showPaletteInput) return null;
  return (
    <PaletteInput
      rawPalette={rawPalette}
      handleInputChange={handleInputChange}
      handleInputSubmit={handleInputSubmit}
    />
  );
}

export default PaletteInputContainer;
