import React, { useState } from "react";

import SettingsBar from "./components/settingsBar/SettingsBar";
import PaletteAreaContainer from "./containers/paletteAreaContainer/PaletteAreaContainer";

import "./App.css";

function App() {
  const [contrastStandard, setContrastStandard] = useState("aa");
  const [colorblindSafe, setColorblindSafe] = useState("off");
  const [grayscale, setGrayscale] = useState(false);
  const [theme, setTheme] = useState("both");
  const [showPaletteInput, setShowPaletteInput] = useState(true);
  // const [showPaletteExport, setShowPaletteExport] = useState(false);

  return (
    <div className="App">
      <SettingsBar
        contrastStandard={contrastStandard}
        setContrastStandard={setContrastStandard}
        colorblindSafe={colorblindSafe}
        setColorblindSafe={setColorblindSafe}
        // grayscale={grayscale}
        // setGrayscale={setGrayscale}
        theme={theme}
        setTheme={setTheme}
        showPaletteInput={showPaletteInput}
        setShowPaletteInput={setShowPaletteInput}
        // showPaletteExport={showPaletteExport}
        // setShowPaletteExport={setShowPaletteExport}
      />
      <PaletteAreaContainer
        contrastStandard={contrastStandard}
        colorblindSafe={colorblindSafe}
        grayscale={grayscale}
        theme={theme}
        showPaletteInput={showPaletteInput}
        // setShowPaletteInput={setShowPaletteInput}
        // showPaletteExport={showPaletteExport}
        // setShowPaletteExport={setShowPaletteExport}
      />
    </div>
  );
}

export default App;
