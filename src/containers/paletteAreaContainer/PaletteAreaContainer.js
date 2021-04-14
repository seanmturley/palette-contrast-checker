import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

import { getAllColorPairs } from "./PaletteAreaContainerHelpers";

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

  const handleInputSubmit = (event) => {
    event.preventDefault();

    setAllColorPairs(getAllColorPairs(paletteData));

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
        contrastStandard={contrastStandard}
        grayscale={grayscale}
        theme={theme}
      />
    </>
  );
}

export default PaletteAreaContainer;
