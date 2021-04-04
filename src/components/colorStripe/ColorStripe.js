import React from "react";

import ColorPair from "../colorPair/ColorPair";

function ColorStripe({
  stripeColor,
  stripeLabelColor,
  colorPairProps,
  contrastStandard
}) {
  return (
    <section
      style={{ backgroundColor: `#${stripeColor}` }}
      data-testid="color-stripe"
    >
      <h1 style={{ color: `#${stripeLabelColor}` }}>{stripeColor}</h1>
      {colorPairProps &&
        colorPairProps.map((colorPair, index) => {
          return (
            <ColorPair
              hex={colorPair.hex}
              contrast={colorPair.contrast}
              textSize={colorPair[contrastStandard]}
              key={index}
            />
          );
        })}
    </section>
  );
}

export default ColorStripe;
