import React from "react";

import { IconContext } from "react-icons";
import { RiHeartAddLine } from "react-icons/ri";

import "./ColorPair.css";

import PropTypes from "prop-types";

function ColorPair({
  pairColor,
  pairGrayscaleEquivalent,
  contrast,
  hoverGrowClass,
  textSize,
  hidePairs,
  grayscale
}) {
  return (
    <article
      className={`color-pair${hidePairs}${hoverGrowClass}`}
      style={{ color: `#${grayscale ? pairGrayscaleEquivalent : pairColor}` }}
      data-testid="color-pair"
    >
      <p className="color-pair__contrast">
        {Math.round((contrast + Number.EPSILON) * 10) / 10} : 1
      </p>
      <h1 className="color-pair__heading">{pairColor}</h1>
      <IconContext.Provider value={{ className: "color-pair__heart" }}>
        <RiHeartAddLine />
      </IconContext.Provider>
      <p className={`color-pair__text-size color-pair__text-size--${textSize}`}>
        {textSize} font
      </p>
    </article>
  );
}

ColorPair.propTypes = {
  pairColor: PropTypes.string.isRequired,
  pairGrayscaleEquivalent: PropTypes.string.isRequired,
  contrast: PropTypes.number.isRequired,
  hoverGrowClass: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  hidePairs: PropTypes.string.isRequired,
  grayscale: PropTypes.bool.isRequired
};

export default ColorPair;
