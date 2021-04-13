import React from "react";

import { RiHeartAddLine } from "react-icons/ri";

function ColorPair({
  pairColor,
  pairGrayscaleEquivalent,
  grayscale,
  contrast,
  textSize
}) {
  return (
    <article
      style={{ color: `#${grayscale ? pairGrayscaleEquivalent : pairColor}` }}
      data-testid="color-pair"
    >
      <p>{Math.round((contrast + Number.EPSILON) * 10) / 10} : 1</p>
      <h1>{pairColor}</h1>
      <p>
        <RiHeartAddLine />
      </p>
      <p>{textSize} text</p>
    </article>
  );
}

export default ColorPair;
