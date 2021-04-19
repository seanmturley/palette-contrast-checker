import React from "react";

import { IconContext } from "react-icons";
import { RiHeartAddLine } from "react-icons/ri";

import "./ColorPair.css";

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
      <div>
        <h1 className="color-pair__heading">{pairColor}</h1>
        <IconContext.Provider value={{ className: "color-pair__heart" }}>
          <RiHeartAddLine />
        </IconContext.Provider>
      </div>
      <p className={`color-pair__text-size color-pair__text-size--${textSize}`}>
        {textSize} font
      </p>
    </article>
  );
}

export default ColorPair;
