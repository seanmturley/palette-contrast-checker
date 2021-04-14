import React from "react";

import ColorPair from "../colorPair/ColorPair";

import "./ColorStripe.css";

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
      className="color-stripe"
      style={{
        backgroundColor: `#${grayscale ? grayscaleEquivalent : stripeColor}`
      }}
      data-testid="color-stripe"
    >
      <h1
        className="color-stripe__heading"
        style={{ color: `#${stripeLabelColor}` }}
      >
        {stripeColor}
      </h1>
      {filteredColorPairs &&
        filteredColorPairs.map((colorPair) => {
          return (
            <ColorPair
              key={colorPair.hex}
              pairColor={colorPair.hex}
              pairGrayscaleEquivalent={colorPair.grayscaleEquivalent}
              grayscale={grayscale}
              contrast={colorPair.contrast}
              textSize={colorPair[contrastStandard]}
            />
          );
        })}
    </section>
  );
}

export default ColorStripe;
