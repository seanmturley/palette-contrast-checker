import React from "react";

import RadioButtonGroup from "../../components/radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import IconButton from "../../components/iconButton/IconButton";

import { FaPalette } from "react-icons/fa";

function SettingsBarContainer({
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
    <>
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
      <ToggleSwitch {...grayscaleProps} />
      <IconButton {...editPaletteProps} />
    </>
  );
}

export default SettingsBarContainer;
