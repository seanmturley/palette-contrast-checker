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
    heading: "WCAG standard",
    name: "contrast-standard",
    options: ["aa", "aaa"],
    selected: contrastStandard,
    setState: setContrastStandard
  };

  const themeProps = {
    heading: "Theme",
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
