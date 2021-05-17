import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

import { getAllColorPairData } from "./PaletteAreaContainerHelpers";

import PropTypes from "prop-types";

function PaletteAreaContainer({
  contrastStandard,
  grayscale,
  setGrayscale,
  previousGrayscale,
  theme,
  setTheme,
  previousTheme,
  showPaletteInput,
  setShowPaletteInput
}) {
  const [paletteData, setPaletteData] = useState([]);
  const [allColorPairs, setAllColorPairs] = useState({});
  const [maxPairsCount, setMaxPairsCount] = useState(0);

  const handleInputSubmit = (event) => {
    event.preventDefault();

    const [colorPairs, maxPairs] = getAllColorPairData(paletteData);

    setAllColorPairs(colorPairs);
    setMaxPairsCount(maxPairs);

    setGrayscale(previousGrayscale);
    setTheme(previousTheme);
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

PaletteAreaContainer.propTypes = {
  contrastStandard: PropTypes.oneOf(["aa", "aaa"]).isRequired,
  grayscale: PropTypes.bool.isRequired,
  setGrayscale: PropTypes.func.isRequired,
  previousGrayscale: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(["dark", "both", "light"]).isRequired,
  setTheme: PropTypes.func.isRequired,
  previousTheme: PropTypes.oneOf(["dark", "both", "light"]).isRequired,
  showPaletteInput: PropTypes.bool.isRequired,
  setShowPaletteInput: PropTypes.func.isRequired
};

export default PaletteAreaContainer;
