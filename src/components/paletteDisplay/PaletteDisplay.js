import React from "react";

import ColorStripeContainer from "../../containers/colorStripeContainer/ColorStripeContainer";

import "./PaletteDisplay.css";

function PaletteDisplay({
  paletteData,
  allColorPairs,
  maxPairsCount,
  contrastStandard,
  grayscale,
  theme
}) {
  return (
    <section className="palette-display">
      {paletteData.map((color) => {
        return (
          <ColorStripeContainer
            key={color.hex}
            color={color}
            colorPairs={allColorPairs[color.hex]}
            maxPairsCount={maxPairsCount}
            contrastStandard={contrastStandard}
            grayscale={grayscale}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default PaletteDisplay;
