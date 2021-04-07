import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

function ColorStripeContainer({
  color,
  colorPairs,
  contrastStandard,
  colorblindSafe,
  theme
}) {
  let colorPairsFilter;
  if (contrastStandard === "aa") {
    colorPairsFilter = colorblindSafe ? "aaColorblind" : "aa";
  } else if (contrastStandard === "aaa") {
    colorPairsFilter = colorblindSafe ? "aaaColorblind" : "aaa";
  }

  let displayStripe;
  if (theme === "both" || theme === color.theme) {
    displayStripe = true;
  } else {
    displayStripe = false;
  }

  // Return will conditionally render the color stripe in grayScale based on setting.
  return (
    <>
      {displayStripe && (
        <ColorStripe
          stripeColor={color.hex}
          stripeLabelColor={color.theme === "dark" ? "FFFFFF" : "000000"}
          filteredColorPairs={colorPairs && colorPairs[colorPairsFilter]}
          contrastStandard={contrastStandard}
        />
      )}
    </>
  );
}

export default ColorStripeContainer;
