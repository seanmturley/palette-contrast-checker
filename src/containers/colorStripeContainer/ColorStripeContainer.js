import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

import PropTypes from "prop-types";

function ColorStripeContainer({
  color,
  colorPairs,
  maxPairsCount,
  showPaletteInput,
  contrastStandard,
  grayscale,
  theme
}) {
  let displayStripe;
  if (theme === "both" || theme === color.theme) {
    displayStripe = true;
  } else {
    displayStripe = false;
  }

  const hidePairs = showPaletteInput ? " color-pair--hide" : "";

  const placeholdersRequired = {};
  if (colorPairs) {
    placeholdersRequired["aa"] = maxPairsCount - colorPairs["aaPairsCount"];
    placeholdersRequired["aaa"] = maxPairsCount - colorPairs["aaaPairsCount"];
  }

  const hoverGrowClass =
    maxPairsCount > 5 ? " color-pair--enable-hover-grow" : "";

  return (
    <>
      {displayStripe && (
        <ColorStripe
          stripeColor={color.hex}
          grayscaleEquivalent={color.grayscaleEquivalent}
          filteredColorPairs={colorPairs && colorPairs[contrastStandard]}
          maxPairsCount={maxPairsCount}
          placeholdersRequired={
            colorPairs && placeholdersRequired[contrastStandard]
          }
          hoverGrowClass={hoverGrowClass}
          hidePairs={hidePairs}
          contrastStandard={contrastStandard}
          grayscale={grayscale}
          stripeTheme={color.theme}
        />
      )}
    </>
  );
}

ColorStripeContainer.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string.isRequired,
    grayscaleEquivalent: PropTypes.string.isRequired,
    luminance: PropTypes.number.isRequired,
    theme: PropTypes.oneOf(["dark", "light"]).isRequired
  }).isRequired,
  colorPairs: PropTypes.shape({
    aa: PropTypes.arrayOf(
      PropTypes.shape({
        hex: PropTypes.string.isRequired,
        grayscaleEquivalent: PropTypes.string.isRequired,
        contrast: PropTypes.number.isRequired,
        aa: PropTypes.string.isRequired,
        aaa: PropTypes.string
      }).isRequired
    ).isRequired,
    aaPairsCount: PropTypes.number.isRequired,
    aaa: PropTypes.arrayOf(
      PropTypes.shape({
        hex: PropTypes.string.isRequired,
        grayscaleEquivalent: PropTypes.string.isRequired,
        contrast: PropTypes.number.isRequired,
        aa: PropTypes.string.isRequired,
        aaa: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    aaaPairsCount: PropTypes.number.isRequired
  }),
  maxPairsCount: PropTypes.number.isRequired,
  showPaletteInput: PropTypes.bool.isRequired,
  contrastStandard: PropTypes.oneOf(["aa", "aaa"]).isRequired,
  grayscale: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(["dark", "both", "light"]).isRequired
};

export default ColorStripeContainer;
