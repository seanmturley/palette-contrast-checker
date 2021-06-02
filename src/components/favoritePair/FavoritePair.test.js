import React from "react";

import FavoritePair from "./FavoritePair";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (colorPairing, handleChangeFavorite) => {
  render(
    <FavoritePair
      pairColor={colorPairing.pairColor}
      stripeColor={colorPairing.stripeColor}
      favorited={false}
      handleChangeFavorite={handleChangeFavorite}
    />
  );
};

const colorPairing = {
  pairColor: "ffffff",
  stripeColor: "000000"
};

describe("Favorite pairs", () => {
  it("should fire the handleChangeFavorite function on click", () => {
    const handleChangeFavorite = jest.fn();
    setup(colorPairing, handleChangeFavorite);
    const favoritePair = screen.getByLabelText(
      `${colorPairing.stripeColor}-${colorPairing.pairColor}`
    );
    userEvent.click(favoritePair);
    expect(handleChangeFavorite).toHaveBeenCalledTimes(1);
  });
});
