import React from "react";

import ColorPair from "../colorPair/ColorPair";

function ColorStripe({
  stripeColor,
  grayscaleEquivalent,
  stripeLabelColor,
  filteredColorPairs,
  contrastStandard,
  grayscale
}) {
  return (
    <section
      style={{
        backgroundColor: `#${grayscale ? grayscaleEquivalent : stripeColor}`
      }}
      data-testid="color-stripe"
    >
      <h1 style={{ color: `#${stripeLabelColor}` }}>{stripeColor}</h1>
      {filteredColorPairs &&
        filteredColorPairs.map((colorPair) => {
          return (
            <ColorPair
              key={colorPair.hex}
              hex={colorPair.hex}
              contrast={colorPair.contrast}
              textSize={colorPair[contrastStandard]}
            />
          );
        })}
    </section>
  );
}

export default ColorStripe;
