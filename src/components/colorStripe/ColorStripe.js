import React from "react";

import ColorPair from "../colorPair/ColorPair";

function ColorStripe({ stripeColor, stripeLabelColor }) {
  return (
    <section
      style={{ backgroundColor: `#${stripeColor}` }}
      data-testid="color-stripe"
    >
      <h1 style={{ color: `#${stripeLabelColor}` }}>{stripeColor}</h1>
      {/* Map over contrastData to render color pairs */}
      <ColorPair />
    </section>
  );
}

export default ColorStripe;
