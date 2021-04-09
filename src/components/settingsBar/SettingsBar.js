import React from "react";

import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

function SettingsBar({
  contrastStandard,
  setContrastStandard,
  colorblindSafe,
  setColorblindSafe,
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

  const colorblindSafeProps = {
    heading: "Colorblind safe",
    name: "colorblind-safe",
    options: { on: "on", off: "off" },
    labels: true,
    state: colorblindSafe,
    setState: setColorblindSafe
  };

  return (
    <nav>
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
      <ToggleSwitch {...colorblindSafeProps} />
    </nav>
  );
}

export default SettingsBar;
