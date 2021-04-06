import React from "react";

function ColorPair({ hex, contrast, textSize }) {
  return (
    <article style={{ color: `#${hex}` }}>
      <p>{Math.round((contrast + Number.EPSILON) * 10) / 10} : 1</p>
      <h1>{hex}</h1>
      {/* <p>Favourite</p> */}
      <p>{textSize} text</p>
    </article>
  );
}

export default ColorPair;
