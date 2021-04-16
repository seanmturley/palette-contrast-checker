import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

function ColorStripeContainer({
  color,
  colorPairs,
  maxPairsCount,
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

  // Why is this logic here? Can't just use contrastStandard directly?
  const colorPairsFilter = contrastStandard === "aaa" ? "aaa" : "aa";

  const placeholdersRequired = {};
  if (colorPairs) {
    placeholdersRequired["aa"] = maxPairsCount - colorPairs["aaPairsCount"];
    placeholdersRequired["aaa"] = maxPairsCount - colorPairs["aaaPairsCount"];
  }

  return (
    <>
      {displayStripe && (
        <ColorStripe
          stripeColor={color.hex}
          grayscaleEquivalent={color.grayscaleEquivalent}
          stripeTheme={color.theme}
          filteredColorPairs={colorPairs && colorPairs[colorPairsFilter]}
          placeholdersRequired={
            colorPairs && placeholdersRequired[colorPairsFilter]
          }
          contrastStandard={contrastStandard}
          grayscale={grayscale}
        />
      )}
    </>
  );
}

export default ColorStripeContainer;
