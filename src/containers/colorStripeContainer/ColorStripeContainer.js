import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

function ColorStripeContainer({
  color,
  colorPairs,
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

  const colorPairsFilter = contrastStandard === "aaa" ? "aaa" : "aa";

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
