import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

import { getColorPairs } from "../../helpers/PairingDataHelpers";

function ColorStripeContainer({
  color,
  pairingData,
  contrastStandard,
  colorblindSafe
}) {
  // Will accept settings as props

  // This is converting the pairingData into an array of objects, sorting it, filtering for aa, aaa, aaColorblind, and aaaColorblind.
  let colorPairProps;

  if (pairingData) {
    const [aa, aaa, aaColorblind, aaaColorblind] = getColorPairs(pairingData);

    if (contrastStandard === "aa") {
      colorPairProps = colorblindSafe ? aaColorblind : aa;
    }

    if (contrastStandard === "aaa") {
      colorPairProps = colorblindSafe ? aaaColorblind : aaa;
    }
  }

  // Problem with this approach is how to include the "favourited" data in the ColorPair element. Should be solvable.

  // The above is executed on submit of the palette input (before this, the pairingData is not defined). Is it possible to split the function out to reserve some of the work until e.g. "Colorblind Safe" is selected, just so everything isn't all calculated on submission of the palette input? Of course, the data would need to be stored at a higher level to avoid recalculation whenever settings are changed.

  // Return will conditionally render the color stripe based on current Theme setting (dark/both/light).
  return (
    <ColorStripe
      stripeColor={color.hex}
      stripeLabelColor={color.theme === "dark" ? "FFFFFF" : "000000"}
      colorPairProps={colorPairProps}
      contrastStandard={contrastStandard}
    />
  );
}

export default ColorStripeContainer;
