import React, { useState, useEffect } from "react";

import SettingsBarContainer from "./containers/settingsBarContainer/SettingsBarContainer";
import PaletteAreaContainer from "./containers/paletteAreaContainer/PaletteAreaContainer";

import "./App.css";

function App() {
  const [contrastStandard, setContrastStandard] = useState("aa");
  const [grayscale, setGrayscale] = useState(false);
  const [previousGrayscale, setPreviousGrayscale] = useState(grayscale);
  const [theme, setTheme] = useState("both");
  const [previousTheme, setPreviousTheme] = useState(theme);
  const [noDarkColors, setNoDarkColors] = useState(false);
  const [noLightColors, setNoLightColors] = useState(false);
  const [showPaletteInput, setShowPaletteInput] = useState(true);
  const [favorites, setFavorites] = useState({});
  const [showExportFavorites, setShowExportFavorites] = useState(false);

  useEffect(() => {
    if (showPaletteInput) {
      setGrayscale(false);
      setTheme("both");

      if (noDarkColors || noLightColors) {
        setPreviousTheme("both");
      }
    } else {
      setGrayscale(previousGrayscale);

      if (noDarkColors || noLightColors) {
        setTheme(noDarkColors ? "light" : "dark");
      } else {
        setTheme(previousTheme);
      }
    }
  }, [
    showPaletteInput,
    noDarkColors,
    noLightColors,
    previousGrayscale,
    previousTheme
  ]);

  return (
    <div className="app">
      <nav className="app__settings-bar">
        <SettingsBarContainer
          contrastStandard={contrastStandard}
          setContrastStandard={setContrastStandard}
          grayscale={grayscale}
          setGrayscale={setGrayscale}
          setPreviousGrayscale={setPreviousGrayscale}
          theme={theme}
          setTheme={setTheme}
          setPreviousTheme={setPreviousTheme}
          noDarkColors={noDarkColors}
          noLightColors={noLightColors}
          showPaletteInput={showPaletteInput}
          setShowPaletteInput={setShowPaletteInput}
          favorites={favorites}
          setFavorites={setFavorites}
          showExportFavorites={showExportFavorites}
          setShowExportFavorites={setShowExportFavorites}
        />
      </nav>
      <main className="app__main">
        <PaletteAreaContainer
          contrastStandard={contrastStandard}
          grayscale={grayscale}
          theme={theme}
          setNoDarkColors={setNoDarkColors}
          setNoLightColors={setNoLightColors}
          showPaletteInput={showPaletteInput}
          setShowPaletteInput={setShowPaletteInput}
          favorites={favorites}
          setFavorites={setFavorites}
          showExportFavorites={showExportFavorites}
          setShowExportFavorites={setShowExportFavorites}
        />
      </main>
    </div>
  );
}

export default App;
