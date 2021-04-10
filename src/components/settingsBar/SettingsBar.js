import React from "react";

import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

import "./SettingsBar.css";

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
    heading: "WCAG \n standard",
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
    heading: "Colorblind \n safe",
    name: "colorblind-safe",
    options: { on: "on", off: "off" },
    labels: true,
    state: colorblindSafe,
    setState: setColorblindSafe
  };

  return (
    <nav className="settings-bar">
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
      <ToggleSwitch {...colorblindSafeProps} />
    </nav>
  );
}

export default SettingsBar;
