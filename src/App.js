import React, { useState } from "react";

import SettingsBarContainer from "./containers/settingsBarContainer.js/SettingsBarContainer";
import PaletteAreaContainer from "./containers/paletteAreaContainer/PaletteAreaContainer";

import "./App.css";

function App() {
  const [contrastStandard, setContrastStandard] = useState("aa");
  const [grayscale, setGrayscale] = useState(false);
  const [previousGrayscale, setPreviousGrayscale] = useState(grayscale);
  const [theme, setTheme] = useState("both");
  const [previousTheme, setPreviousTheme] = useState(theme);
  const [showPaletteInput, setShowPaletteInput] = useState(true);
  // const [showPaletteExport, setShowPaletteExport] = useState(false);

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
          showPaletteInput={showPaletteInput}
          setShowPaletteInput={setShowPaletteInput}
          // showPaletteExport={showPaletteExport}
          // setShowPaletteExport={setShowPaletteExport}
        />
      </nav>
      <main className="app__main">
        <PaletteAreaContainer
          contrastStandard={contrastStandard}
          grayscale={grayscale}
          setGrayscale={setGrayscale}
          previousGrayscale={previousGrayscale}
          theme={theme}
          setTheme={setTheme}
          previousTheme={previousTheme}
          showPaletteInput={showPaletteInput}
          setShowPaletteInput={setShowPaletteInput}
          // showPaletteExport={showPaletteExport}
          // setShowPaletteExport={setShowPaletteExport}
        />
      </main>
    </div>
  );
}

export default App;
