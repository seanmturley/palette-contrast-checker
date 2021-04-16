import React from "react";

import { RiHeartAddLine } from "react-icons/ri";

import "./ColorPair.css";

function ColorPair({
  pairColor,
  pairGrayscaleEquivalent,
  grayscale,
  contrast,
  textSize
}) {
  return (
    <article
      className="color-pair"
      style={{ color: `#${grayscale ? pairGrayscaleEquivalent : pairColor}` }}
      data-testid="color-pair"
    >
      <p className="color-pair__contrast">
        {Math.round((contrast + Number.EPSILON) * 10) / 10} : 1
      </p>
      <h1 className="color-pair__heading">{pairColor}</h1>
      <p className="color-pair__heart">
        <RiHeartAddLine />
      </p>
      <p className="color-pair__test-size">{textSize} text</p>
    </article>
  );
}

export default ColorPair;
