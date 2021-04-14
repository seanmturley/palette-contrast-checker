import React from "react";

import ColorStripeContainer from "../../containers/colorStripeContainer/ColorStripeContainer";

import "./PaletteDisplay.css";

function PaletteDisplay({
  paletteData,
  allColorPairs,
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
