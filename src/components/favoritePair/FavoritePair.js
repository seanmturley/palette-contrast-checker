import React from "react";

import { IconContext } from "react-icons";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";

import PropTypes from "prop-types";

function FavoritePair({
  pairColor,
  stripeColor,
  favorited,
  handleChangeFavorite
}) {
  return (
    <form className={`color-pair__heart-form`}>
      <label
        htmlFor={`${stripeColor}-${pairColor}`}
        className="color-pair__heart-label"
      >
        <span className="color-pair__heart-label-text">{`${stripeColor}-${pairColor}`}</span>
        <input
          className="color-pair__heart-input"
          type="checkbox"
          name={`${stripeColor}-${pairColor}`}
          id={`${stripeColor}-${pairColor}`}
          value={`${stripeColor}-${pairColor}`}
          onChange={handleChangeFavorite}
        />
        <IconContext.Provider value={{ className: "color-pair__heart" }}>
          {favorited ? <RiHeartFill /> : <RiHeartAddLine />}
        </IconContext.Provider>
      </label>
    </form>
  );
}

FavoritePair.propTypes = {
  pairColor: PropTypes.string.isRequired,
  stripeColor: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  handleChangeFavorite: PropTypes.func.isRequired
};

export default FavoritePair;
