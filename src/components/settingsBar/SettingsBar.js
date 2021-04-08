import React from "react";

import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";

function SettingsBar({
  contrastStandard,
  setContrastStandard,
  theme,
  setTheme,
  showPaletteInput,
  setShowPaletteInput
}) {
  const contrastStandardProps = {
    name: "contrast-standard",
    options: ["aa", "aaa"],
    selected: contrastStandard,
    setState: setContrastStandard
  };

  const themeProps = {
    name: "theme",
    options: ["dark", "both", "light"],
    selected: theme,
    setState: setTheme
  };

  return (
    <nav>
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
    </nav>
  );
}

export default SettingsBar;
