import React from "react";

import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import IconButton from "../iconButton/IconButton";

import { FaPalette } from "react-icons/fa";

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

  const editPaletteProps = {
    heading: "Edit \n palette",
    name: "edit-palette",
    icon: <FaPalette />,
    disableOnClick: true,
    state: showPaletteInput,
    setState: setShowPaletteInput
  };

  return (
    <nav className="settings-bar">
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
      <ToggleSwitch {...grayscaleProps} />
      <IconButton {...editPaletteProps} />
    </nav>
  );
}

export default SettingsBar;
