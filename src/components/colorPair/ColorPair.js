import React from "react";

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
      {/* <p>Favourite</p> */}
      <p>{textSize} text</p>
    </article>
  );
}

export default ColorPair;
