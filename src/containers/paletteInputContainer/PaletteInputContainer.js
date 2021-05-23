import React, { useState } from "react";

import PaletteInput from "../../components/paletteInput/PaletteInput";

import { FaTrash, FaPaste } from "react-icons/fa";

import PropTypes from "prop-types";

import {
  parseRawPalette,
  getPaletteData
} from "./PaletteInputContainerHelpers";

function PaletteInputContainer({
  showPaletteInput,
  setPaletteData,
  handleInputSubmit
}) {
  const [rawPalette, setRawPalette] = useState("");
  const [paletteLength, setPaletteLength] = useState(0);

  const handleInputChange = (event) => {
    const rawPaletteInput = event.target.value;

    const parsedPalette = parseRawPalette(event.target.value);

    if (parsedPalette) {
      setPaletteData(getPaletteData(parsedPalette));
      setPaletteLength(parsedPalette.length);
    }

    setRawPalette(rawPaletteInput);
  };

  const setInputText = (newInputText) => {
    const inputTextArea = document.getElementById("palette-input");

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(inputTextArea, newInputText);

    inputTextArea.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const clearInputSetState = () => {
    setInputText("");
  };

  const clearInputProps = {
    heading: "Clear palette",
    name: "clear-palette",
    icon: <FaTrash />,
    disableOnClick: true,
    state: rawPalette === "",
    setState: clearInputSetState
  };

  const pastePaletteSetState = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setInputText(clipboardText);
    });
  };

  const pastePaletteProps = {
    heading: "Paste clipboard",
    name: "paste-palette",
    icon: <FaPaste />,
    disableOnClick: false,
    state: false,
    setState: pastePaletteSetState
  };

  return (
    <>
      {showPaletteInput && (
        <PaletteInput
          rawPalette={rawPalette}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          disableSubmit={paletteLength < 2}
          clearInputProps={clearInputProps}
          pastePaletteProps={pastePaletteProps}
        />
      )}
    </>
  );
}

PaletteInputContainer.propTypes = {
  showPaletteInput: PropTypes.bool.isRequired,
  setPaletteData: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired
};

export default PaletteInputContainer;
