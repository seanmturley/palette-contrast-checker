import React, { useState } from "react";

import PaletteInputContainer from "../paletteInputContainer/PaletteInputContainer";
import PaletteDisplay from "../../components/paletteDisplay/PaletteDisplay";

import {
  differenceBetween,
  getAllColorPairData,
  noThemeInPalette,
  purgeFavorites,
  updateFavorites
} from "./PaletteAreaContainerHelpers";

import PropTypes from "prop-types";

function PaletteAreaContainer({
  contrastStandard,
  grayscale,
  theme,
  setNoDarkColors,
  setNoLightColors,
  showPaletteInput,
  setShowPaletteInput,
  favorites,
  setFavorites
}) {
  const [paletteData, setPaletteData] = useState([]);
  const [previousPaletteData, setPreviousPaletteData] = useState(paletteData);
  const [allColorPairs, setAllColorPairs] = useState({});
  const [maxPairsCount, setMaxPairsCount] = useState(0);

  const handleInputSubmit = (event) => {
    event.preventDefault();

    if (differenceBetween(paletteData, previousPaletteData)) {
      setPreviousPaletteData(paletteData);

      const [colorPairs, maxPairs] = getAllColorPairData(paletteData);

      setAllColorPairs(colorPairs);
      setMaxPairsCount(maxPairs);

      setNoDarkColors(noThemeInPalette(paletteData, "dark"));
      setNoLightColors(noThemeInPalette(paletteData, "light"));

      setFavorites(purgeFavorites(favorites, paletteData));
    }

    setShowPaletteInput(false);
  };

  const handleChangeFavorite = (event) => {
    setFavorites(updateFavorites(favorites, event.target.value));
  };

  return (
    <>
      <PaletteInputContainer
        showPaletteInput={showPaletteInput}
        setFavorites={setFavorites}
        setPaletteData={setPaletteData}
        handleInputSubmit={handleInputSubmit}
      />
      {/* <ExportFavorites /> */}
      <PaletteDisplay
        paletteData={paletteData}
        allColorPairs={allColorPairs}
        maxPairsCount={maxPairsCount}
        favorites={favorites}
        handleChangeFavorite={handleChangeFavorite}
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
  theme: PropTypes.oneOf(["dark", "both", "light"]).isRequired,
  setNoDarkColors: PropTypes.func.isRequired,
  setNoLightColors: PropTypes.func.isRequired,
  showPaletteInput: PropTypes.bool.isRequired,
  setShowPaletteInput: PropTypes.func.isRequired,
  favorites: PropTypes.objectOf(PropTypes.objectOf(PropTypes.bool).isRequired)
    .isRequired,
  setFavorites: PropTypes.func.isRequired
};

export default PaletteAreaContainer;
