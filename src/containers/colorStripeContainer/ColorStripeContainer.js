import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

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

export default ColorStripeContainer;
