import React from "react";

import ColorStripeContainer from "../../containers/colorStripeContainer/ColorStripeContainer";

function PaletteDisplay({
  paletteData,
  allColorPairs,
  contrastStandard,
  grayscale,
  theme
}) {
  return (
    <section>
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
