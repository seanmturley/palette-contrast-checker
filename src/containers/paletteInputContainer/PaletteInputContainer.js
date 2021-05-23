import React, { useEffect, useState } from "react";

import PaletteInput from "../../components/paletteInput/PaletteInput";

import { FaTrash, FaPaste } from "react-icons/fa";

import PropTypes from "prop-types";

import { differenceBetween } from "../paletteAreaContainer/PaletteAreaContainerHelpers";
import {
  parseRawPalette,
  getPaletteData,
  setInputText
} from "./PaletteInputContainerHelpers";

function PaletteInputContainer({
  showPaletteInput,
  setPaletteData,
  handleInputSubmit
}) {
  const [rawPalette, setRawPalette] = useState("");
  const [parsedPalette, setParsedPalette] = useState(false);
  const [previousParsedPalette, setPreviousParsedPalette] = useState(
    parsedPalette
  );
  const [paletteLength, setPaletteLength] = useState(0);

  const handleInputChange = (event) => {
    const rawPaletteInput = event.target.value;

    setParsedPalette(parseRawPalette(event.target.value));

    setRawPalette(rawPaletteInput);
  };

  useEffect(() => {
    if (
      parsedPalette &&
      differenceBetween(parsedPalette, previousParsedPalette)
    ) {
      setPreviousParsedPalette(parsedPalette);

      setPaletteData(getPaletteData(parsedPalette));
      setPaletteLength(parsedPalette.length);
    }
  }, [parsedPalette, previousParsedPalette, setPaletteData]);

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
