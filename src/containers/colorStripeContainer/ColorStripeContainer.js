import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

function ColorStripeContainer({
  color,
  colorPairs,
  contrastStandard,
  colorblindSafe,
  grayscale,
  theme
}) {
  let colorPairsFilter;
  if (contrastStandard === "aa") {
    colorPairsFilter = colorblindSafe === "on" ? "aaColorblind" : "aa";
  } else if (contrastStandard === "aaa") {
    colorPairsFilter = colorblindSafe === "on" ? "aaaColorblind" : "aaa";
  }

  let displayStripe;
  if (theme === "both" || theme === color.theme) {
    displayStripe = true;
  } else {
    displayStripe = false;
  }

  return (
    <>
      {displayStripe && (
        <ColorStripe
          stripeColor={color.hex}
          grayscaleEquivalent={color.grayscaleEquivalent}
          stripeLabelColor={color.theme === "dark" ? "FFFFFF" : "000000"}
          filteredColorPairs={colorPairs && colorPairs[colorPairsFilter]}
          contrastStandard={contrastStandard}
          grayscale={grayscale}
        />
      )}
    </>
  );
}

export default ColorStripeContainer;
