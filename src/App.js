import React, { useState } from "react";

import SettingsBar from "./components/settingsBar/SettingsBar";
import PaletteAreaContainer from "./containers/paletteAreaContainer/PaletteAreaContainer";

import "./App.css";

function App() {
  const [contrastStandard, setContrastStandard] = useState("aa");
  const [colorblindSafe, setColorblindSafe] = useState(false);
  // const [grayScale, setGrayScale] = useState(false);
  const [theme, setTheme] = useState("both");
  const [showPaletteInput, setShowPaletteInput] = useState(true);
  // const [showPaletteExport, setShowPaletteExport] = useState(false);

  return (
    <div className="App">
      <SettingsBar
        // contrastStandard={contrastStandard}
        // setContrastStandard={setContrastStandard}
        // colorblindSafe={colorblindSafe}
        // setColorblindSafe={setColorblindSafe}
        // grayScale={grayScale}
        // setGrayScale={setGrayScale}
        // theme={theme}
        // setTheme={setTheme}
        showPaletteInput={showPaletteInput}
        setShowPaletteInput={setShowPaletteInput}
        // showPaletteExport={showPaletteExport}
        // setShowPaletteExport={setShowPaletteExport}
      />
      <PaletteAreaContainer
        contrastStandard={contrastStandard}
        colorblindSafe={colorblindSafe}
        // grayScale={grayScale}
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
