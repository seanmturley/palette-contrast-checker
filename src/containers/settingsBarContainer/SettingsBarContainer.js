import React from "react";

import RadioButtonGroup from "../../components/radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import IconButton from "../../components/iconButton/IconButton";

import { FaPalette } from "react-icons/fa";

import PropTypes from "prop-types";

function SettingsBarContainer({
  contrastStandard,
  setContrastStandard,
  grayscale,
  setGrayscale,
  setPreviousGrayscale,
  theme,
  setTheme,
  setPreviousTheme,
  showPaletteInput,
  setShowPaletteInput
}) {
  const contrastStandardProps = {
    heading: "WCAG \n standard",
    name: "contrast-standard",
    options: ["aa", "aaa"],
    disabled: false,
    selected: contrastStandard,
    setState: setContrastStandard
  };

  const themeProps = {
    heading: "Theme",
    name: "theme",
    options: ["dark", "both", "light"],
    disabled: showPaletteInput,
    selected: theme,
    setState: setTheme
  };

  const grayscaleProps = {
    heading: "Grayscale \n mode",
    name: "grayscale-mode",
    optionLabels: { true: "on", false: "off" },
    showLabels: true,
    disabled: showPaletteInput,
    state: grayscale,
    setState: setGrayscale
  };

  const editPaletteSetState = () => {
    setPreviousGrayscale(grayscale);
    setGrayscale(false);
    setPreviousTheme(theme);
    setTheme("both");
    setShowPaletteInput(!showPaletteInput);
  };

  const editPaletteProps = {
    heading: "Edit \n palette",
    name: "edit-palette",
    icon: <FaPalette />,
    disableOnClick: true,
    state: showPaletteInput,
    setState: editPaletteSetState
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

SettingsBarContainer.propTypes = {
  contrastStandard: PropTypes.oneOf(["aa", "aaa"]).isRequired,
  setContrastStandard: PropTypes.func.isRequired,
  grayscale: PropTypes.bool.isRequired,
  setGrayscale: PropTypes.func.isRequired,
  setPreviousGrayscale: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["dark", "both", "light"]).isRequired,
  setTheme: PropTypes.func.isRequired,
  setPreviousTheme: PropTypes.func.isRequired,
  showPaletteInput: PropTypes.bool.isRequired,
  setShowPaletteInput: PropTypes.func.isRequired
};

export default SettingsBarContainer;
