import React from "react";

function ColorPair({ hex, contrast, textSize }) {
  return (
    <article>
      <p>{Math.round((contrast + Number.EPSILON) * 10) / 10} : 1</p>
      <p>{hex}</p>
      <p>Favourite</p>
      <p>{textSize} text</p>
    </article>
  );
}

export default ColorPair;
