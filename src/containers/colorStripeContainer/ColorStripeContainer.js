import React from "react";

import ColorStripe from "../../components/colorStripe/ColorStripe";

function ColorStripeContainer({ color, pairingData }) {
  // Will accept settings as props

  // Assemble the appropriate contrast data based on current settings (Constrast standard, colorblind safe). Maybe even better to produce an array of ColorPair elements? This will be mapped over in ColorStripe for rendering.

  // pairingData should first be converted from an object to an array using Object.entries(), then sorted using sort(). If possible, would be nice to reserve some of the work until e.g. "Colorblind Safe" is selected, just so everything isn't all calculated on submission of the palette input. Of course, the data would need to be stored at a higher level to avoid recalculation whenever settings are changed.

  // Return will conditionally render the color stripe based on current Theme setting (dark/both/light).
  return (
    <ColorStripe
      stripeColor={color.hex}
      stripeLabelColor={color.theme === "dark" ? "FFFFFF" : "000000"}
      // filterPairingData={filterPairingData}
    />
  );
}

export default ColorStripeContainer;
