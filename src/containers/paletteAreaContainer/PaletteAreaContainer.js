import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

import { getAllColorPairData } from "./PaletteAreaContainerHelpers";

function PaletteAreaContainer({
  contrastStandard,
  grayscale,
  theme,
  showPaletteInput,
  setShowPaletteInput
}) {
  // Will accept settings as props

  const [paletteData, setPaletteData] = useState([]);
  const [allColorPairs, setAllColorPairs] = useState({});
  const [maxPairsCount, setMaxPairsCount] = useState(0);

  const handleInputSubmit = (event) => {
    event.preventDefault();

    const [colorPairs, maxPairs] = getAllColorPairData(paletteData);

    setAllColorPairs(colorPairs);
    setMaxPairsCount(maxPairs);

    setShowPaletteInput(false);
  };

  return (
    <>
      <PaletteInputContainer
        showPaletteInput={showPaletteInput}
        setPaletteData={setPaletteData}
        handleInputSubmit={handleInputSubmit}
      />
      <PaletteDisplay
        paletteData={paletteData}
        allColorPairs={allColorPairs}
        maxPairsCount={maxPairsCount}
        showPaletteInput={showPaletteInput}
        contrastStandard={contrastStandard}
        grayscale={grayscale}
        theme={theme}
      />
    </>
  );
}

export default PaletteAreaContainer;
