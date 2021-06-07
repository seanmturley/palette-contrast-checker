import React from "react";

import RadioButtonGroup from "../../components/radioButtonGroup/RadioButtonGroup";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import IconButton from "../../components/iconButton/IconButton";

import { FaPalette, FaFileExport } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";

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
  noDarkColors,
  noLightColors,
  showPaletteInput,
  setShowPaletteInput,
  favorites,
  setFavorites,
  showExportFavorites,
  setShowExportFavorites
}) {
  const modalOpen = showPaletteInput || showExportFavorites;

  const editPaletteSetState = () => {
    setPreviousGrayscale(grayscale);
    setPreviousTheme(theme);

    setShowPaletteInput(true);
  };

  const editPaletteProps = {
    heading: "Edit \n palette",
    name: "edit-palette",
    icon: <FaPalette />,
    disableOnClick: true,
    state: modalOpen,
    setState: editPaletteSetState
  };

  const contrastStandardProps = {
    heading: "WCAG \n standard",
    name: "contrast-standard",
    options: ["aa", "aaa"],
    disabled: showPaletteInput,
    selected: contrastStandard,
    setState: setContrastStandard
  };

  const themeProps = {
    heading: "Theme",
    name: "theme",
    options: ["dark", "both", "light"],
    disabled: modalOpen || noDarkColors || noLightColors,
    selected: theme,
    setState: setTheme
  };

  const grayscaleProps = {
    heading: "Grayscale \n mode",
    name: "grayscale-mode",
    optionLabels: { true: "on", false: "off" },
    showLabels: true,
    disabled: modalOpen,
    state: grayscale,
    setState: setGrayscale
  };

  const noFavorites = Object.keys(favorites).length === 0;

  const clearFavoritesSetState = () => {
    setFavorites({});
  };

  const clearFavoritesProps = {
    heading: "Clear \n favorites",
    name: "clear-favorites",
    icon: <RiHeartLine />,
    disableOnClick: true,
    state: modalOpen || noFavorites,
    setState: clearFavoritesSetState
  };

  const exportFavoritesSetState = () => {
    setShowExportFavorites(true);
  };

  const exportFavoritesProps = {
    heading: "Export \n favorites",
    name: "export-favorites",
    icon: <FaFileExport />,
    disableOnClick: true,
    state: modalOpen || noFavorites,
    setState: exportFavoritesSetState
  };

  return (
    <>
      <IconButton {...editPaletteProps} />
      <RadioButtonGroup {...contrastStandardProps} />
      <RadioButtonGroup {...themeProps} />
      <ToggleSwitch {...grayscaleProps} />
      <IconButton {...clearFavoritesProps} />
      <IconButton {...exportFavoritesProps} />
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
  noDarkColors: PropTypes.bool.isRequired,
  noLightColors: PropTypes.bool.isRequired,
  showPaletteInput: PropTypes.bool.isRequired,
  setShowPaletteInput: PropTypes.func.isRequired,
  favorites: PropTypes.objectOf(PropTypes.objectOf(PropTypes.bool).isRequired)
    .isRequired,
  setFavorites: PropTypes.func.isRequired,
  showExportFavorites: PropTypes.bool.isRequired,
  setShowExportFavorites: PropTypes.func.isRequired
};

export default SettingsBarContainer;
