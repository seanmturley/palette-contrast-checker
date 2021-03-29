import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

// import { getContrastData } from "../../Helpers";

function PaletteAreaContainer({ showPaletteInput }) {
  // Will accept settings as props

  const [paletteData, setPaletteData] = useState([]);
  // const [contrastData, setContrastData] = useState([]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    alert("Placeholder response for palette submission");
    // Call helper function getContrastData with paletteData to calculate and produce object of all color pair contrasts
    // setContrastData();
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
        // contrastData={contrastData}
        // contrastStandard={contrastStandard}
        // colorblindSafe={colorblindSafe}
      />
    </main>
  );
}

export default PaletteAreaContainer;
