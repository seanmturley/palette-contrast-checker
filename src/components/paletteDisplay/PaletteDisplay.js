import React from "react";

import ColorStripeContainer from "../../containers/colorStripeContainer/ColorStripeContainer";

import "./PaletteDisplay.css";

import PropTypes from "prop-types";

function PaletteDisplay({
  paletteData,
  allColorPairs,
  maxPairsCount,
  showPaletteInput,
  contrastStandard,
  grayscale,
  theme
}) {
  return (
    <section className="palette-display">
      {paletteData.map((color) => {
        return (
          <ColorStripeContainer
            key={color.hex}
            color={color}
            colorPairs={allColorPairs[color.hex]}
            maxPairsCount={maxPairsCount}
            showPaletteInput={showPaletteInput}
            contrastStandard={contrastStandard}
            grayscale={grayscale}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

PaletteDisplay.propTypes = {
  paletteData: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string.isRequired,
      grayscaleEquivalent: PropTypes.string.isRequired,
      luminance: PropTypes.number.isRequired,
      theme: PropTypes.oneOf(["dark", "light"]).isRequired
    }).isRequired
  ).isRequired,
  allColorPairs: PropTypes.objectOf(
    PropTypes.shape({
      aa: PropTypes.arrayOf(
        PropTypes.shape({
          hex: PropTypes.string.isRequired,
          grayscaleEquivalent: PropTypes.string.isRequired,
          contrast: PropTypes.number.isRequired,
          aa: PropTypes.string.isRequired,
          aaa: PropTypes.string
        }).isRequired
      ),
      aaPairsCount: PropTypes.number.isRequired,
      aaa: PropTypes.arrayOf(
        PropTypes.shape({
          hex: PropTypes.string.isRequired,
          grayscaleEquivalent: PropTypes.string.isRequired,
          contrast: PropTypes.number.isRequired,
          aa: PropTypes.string.isRequired,
          aaa: PropTypes.string.isRequired
        }).isRequired
      ),
      aaaPairsCount: PropTypes.number.isRequired
    })
  ).isRequired,
  maxPairsCount: PropTypes.number.isRequired,
  showPaletteInput: PropTypes.bool.isRequired,
  contrastStandard: PropTypes.oneOf(["aa", "aaa"]).isRequired,
  grayscale: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(["dark", "both", "light"]).isRequired
};

export default PaletteDisplay;
