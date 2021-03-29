import React from "react";

function ColorStripe({ backgroundColor, textColor }) {
  const styles = {
    backgroundColor: `#${backgroundColor}`,
    color: `#${textColor}`
  };

  return (
    <section
      style={{ backgroundColor: styles.backgroundColor }}
      data-testid="color-stripe"
    >
      <h1 style={{ color: styles.color }}>{backgroundColor}</h1>
      {/* <ColorPair /> */}
    </section>
  );
}

export default ColorStripe;
