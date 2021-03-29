import React from "react";

import ColorStripe from "../colorStripe/ColorStripe";

function PaletteDisplay({ paletteData }) {
  return (
    <section>
      {paletteData.map((color, index) => {
        return (
          <ColorStripe
            key={index}
            backgroundColor={color.hex}
            textColor={color.theme === "dark" ? "FFFFFF" : "000000"}
          />
        );
      })}
    </section>
  );
}

export default PaletteDisplay;
