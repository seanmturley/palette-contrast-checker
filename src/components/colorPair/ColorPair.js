import React from "react";

import FavoritePair from "../favoritePair/FavoritePair";

import "./ColorPair.css";

import PropTypes from "prop-types";

function ColorPair({
  pairColor,
  pairGrayscaleEquivalent,
  contrast,
  hoverGrowClass,
  textSize,
  stripeColor,
  favorited,
  handleChangeFavorite,
  hidePairs,
  grayscale
}) {
  const favoritedPair = favorited ? " color-pair--favorited" : "";
  return (
    <article
      className={`color-pair${hidePairs}${hoverGrowClass}${favoritedPair}`}
      style={{ color: `#${grayscale ? pairGrayscaleEquivalent : pairColor}` }}
      data-testid="color-pair"
    >
      <p className="color-pair__contrast">
        {Math.round((contrast + Number.EPSILON) * 10) / 10} : 1
      </p>
      <h1 className="color-pair__heading">{pairColor}</h1>
      <FavoritePair
        pairColor={pairColor}
        stripeColor={stripeColor}
        favorited={favorited}
        handleChangeFavorite={handleChangeFavorite}
      />
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
  stripeColor: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  handleChangeFavorite: PropTypes.func.isRequired,
  hidePairs: PropTypes.oneOf([" color-pair--hide", ""]).isRequired,
  grayscale: PropTypes.bool.isRequired
};

export default ColorPair;
