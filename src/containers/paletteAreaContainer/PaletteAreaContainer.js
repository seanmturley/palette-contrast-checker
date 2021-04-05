import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

import { getAllColorPairs } from "./PaletteAreaContainerHelpers";

function PaletteAreaContainer({
  contrastStandard,
  colorblindSafe,
  showPaletteInput
}) {
  // Will accept settings as props

  const [paletteData, setPaletteData] = useState([]);
  const [allColorPairs, setAllColorPairings] = useState({});

  const handleInputSubmit = (event) => {
    event.preventDefault();

    setAllColorPairings(getAllColorPairs(paletteData));

    // Should also toggle palette input modal closed
  };

  return (
    <main>
      <PaletteInputContainer
        showPaletteInput={showPaletteInput}
        setPaletteData={setPaletteData}
        handleInputSubmit={handleInputSubmit}
      />
      <PaletteDisplay
        paletteData={paletteData}
        allColorPairs={allColorPairs}
        contrastStandard={contrastStandard}
        colorblindSafe={colorblindSafe}
        // grayScale={grayScale}
        // theme={theme}
      />
    </main>
  );
}

export default PaletteAreaContainer;
