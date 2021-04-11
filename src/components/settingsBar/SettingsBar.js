import React from "react";

import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

import "./SettingsBar.css";

function SettingsBar({
  contrastStandard,
  setContrastStandard,
  grayscale,
  setGrayscale,
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

  const grayscaleProps = {
    heading: "Grayscale \n mode",
    name: "grayscale-mode",
    optionLabels: { true: "on", false: "off" },
    showLabels: true,
    state: grayscale,
    setState: setGrayscale
  };

  return (
    <nav className="settings-bar">
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
      <ToggleSwitch {...grayscaleProps} />
    </nav>
  );
}

export default SettingsBar;
