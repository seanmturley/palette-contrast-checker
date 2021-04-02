import React from "react";

import ColorStripeContainer from "../../containers/colorStripeContainer/ColorStripeContainer";

function PaletteDisplay({ paletteData, colorsPairingData }) {
  // Will accept settings as props

  return (
    <section>
      {paletteData.map((color, index) => {
        return (
          <ColorStripeContainer
            key={index}
            color={color}
            pairingData={colorsPairingData[color.hex]}
            // contrastStandard={contrastStandard}
            // colorblindSafe={colorblindSafe}
            // grayScale={grayScale}
            // theme={theme}
          />
        );
      })}
    </section>
  );
}

export default PaletteDisplay;
