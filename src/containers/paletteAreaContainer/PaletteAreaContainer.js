import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

import { getColorsPairingData } from "../../helpers/ColorPairHelpers";

function PaletteAreaContainer({ showPaletteInput }) {
  // Will accept settings as props

  const [paletteData, setPaletteData] = useState([]);
  const [colorsPairingData, setColorsPairingData] = useState({});

  const handleInputSubmit = (event) => {
    event.preventDefault();

    setColorsPairingData(getColorsPairingData(paletteData));
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
        colorsPairingData={colorsPairingData}
        // contrastStandard={contrastStandard}
        // colorblindSafe={colorblindSafe}
        // grayScale={grayScale}
        // theme={theme}
      />
    </main>
  );
}

export default PaletteAreaContainer;
