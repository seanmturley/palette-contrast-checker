import React from "react";

import ColorPair from "../colorPair/ColorPair";

import "./ColorStripe.css";

import PropTypes from "prop-types";

function ColorStripe({
  stripeColor,
  grayscaleEquivalent,
  filteredColorPairs,
  placeholdersRequired,
  hoverGrowClass,
  hidePairs,
  contrastStandard,
  grayscale,
  stripeTheme
}) {
  return (
    <section
      className="color-stripe"
      style={{
        backgroundColor: `#${grayscale ? grayscaleEquivalent : stripeColor}`
      }}
      data-testid="color-stripe"
    >
      <section className="color-stripe__pairs-container">
        {filteredColorPairs &&
          filteredColorPairs.map((colorPair) => {
            return (
              <ColorPair
                key={colorPair.hex}
                pairColor={colorPair.hex}
                pairGrayscaleEquivalent={colorPair.grayscaleEquivalent}
                contrast={colorPair.contrast}
                hoverGrowClass={hoverGrowClass}
                textSize={colorPair[contrastStandard]}
                hidePairs={hidePairs}
                grayscale={grayscale}
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
      <h1
        className={`color-stripe__heading color-stripe__heading--theme-${stripeTheme}`}
      >
        {stripeColor}
      </h1>
    </section>
  );
}

ColorStripe.propTypes = {
  stripeColor: PropTypes.string.isRequired,
  grayscaleEquivalent: PropTypes.string.isRequired,
  filteredColorPairs: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string.isRequired,
      grayscaleEquivalent: PropTypes.string.isRequired,
      contrast: PropTypes.number.isRequired,
      aa: PropTypes.string.isRequired,
      aaa: PropTypes.string.isRequired
    })
  ),
  placeholdersRequired: PropTypes.number,
  hoverGrowClass: PropTypes.string.isRequired,
  hidePairs: PropTypes.string.isRequired,
  contrastStandard: PropTypes.oneOf(["aa", "aaa"]).isRequired,
  grayscale: PropTypes.bool.isRequired,
  stripeTheme: PropTypes.oneOf(["dark", "light"]).isRequired
};

export default ColorStripe;
