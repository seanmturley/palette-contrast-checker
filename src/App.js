import React, { useState } from "react";

import SettingsBar from "./components/settingsBar/SettingsBar";
import PaletteInputContainer from "./containers/paletteInputContainer/PaletteInputContainer";
import PaletteDisplayContainer from "./containers/paletteDisplayContainer/PaletteDisplayContainer";

import "./App.css";

function App() {
  const [palette, setPalette] = useState([
    "000000",
    "14213d",
    "fca311",
    "e5e5e5",
    "ffffff"
  ]);
  const [contrastStandard, setContrastStandard] = useState("AA");
  const [colorblindSafe, setColorblindSafe] = useState(false);

  return (
    <div className="App">
      <SettingsBar />
      <PaletteInputContainer />
      <PaletteDisplayContainer
        palette={palette}
        contrastStandard={contrastStandard}
        colorblindSafe={colorblindSafe}
      />
    </div>
  );
}

export default App;
