import React from "react";

import ColorPair from "../colorPair/ColorPair";

import "./ColorStripe.css";

function ColorStripe({
  stripeColor,
  grayscaleEquivalent,
  stripeTheme,
  filteredColorPairs,
  placeholdersRequired,
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
        className={`color-stripe__heading color-stripe__heading--theme-${stripeTheme}`}
      >
        {stripeColor}
      </h1>
      <section className="color-stripe__pairs-container">
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
        {placeholdersRequired > 0 && (
          <div
            className="color-stripe__placeholder"
            style={{
              flex: `${placeholdersRequired} ${placeholdersRequired} ${placeholdersRequired}em`
            }}
          ></div>
        )}
      </section>
    </section>
  );
}

export default ColorStripe;
