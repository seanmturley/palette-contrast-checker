import React from "react";

import ColorStripe from "./ColorStripe";

import { render, screen } from "@testing-library/react";

const setup = (color, grayscale) => {
  render(
    <ColorStripe
      {...color}
      hoverGrowClass={""}
      stripeFavorites={undefined}
      handleChangeFavorite={jest.fn()}
      hidePairs={""}
      contrastStandard={"aa"}
      grayscale={grayscale || false}
    />
  );
};

const darkColor = {
  stripeColor: "14213d",
  grayscaleEquivalent: "202020",
  stripeTheme: "dark",
  backgroundRgb: "rgb(20, 33, 61)",
  grayscaleRgb: "rgb(32, 32, 32)",
  textRgb: "rgb(255, 255, 255)"
};

const lightUnsaturatedColor = {
  stripeColor: "e5e5e5",
  grayscaleEquivalent: "e5e5e5",
  stripeTheme: "light",
  backgroundRgb: "rgb(229, 229, 229)",
  grayscaleRgb: "rgb(229, 229, 229)",
  textRgb: "rgb(0, 0, 0)"
};

describe("Color stripe", () => {
  it("should have a background-color equal to the color's rgb value", () => {
    setup(darkColor);
    const stripe = screen.getByTestId("color-stripe");
    expect(stripe).toHaveStyle(`background-color: ${darkColor.backgroundRgb}`);
  });

  it("should display the color's hex value", () => {
    setup(darkColor);
    const stripeLabel = screen.queryByText(darkColor.stripeColor);
    expect(stripeLabel).toBeInTheDocument();
  });

  it("should display the color's hex value in white if the color is dark", () => {
    setup(darkColor);
    const stripeLabel = screen.getByText(darkColor.stripeColor);
    expect(stripeLabel).toHaveClass("color-stripe__heading--theme-dark");
  });

  it("should display the color's hex value in black if the color is light", () => {
    setup(lightUnsaturatedColor);
    const stripeLabel = screen.getByText(lightUnsaturatedColor.stripeColor);
    expect(stripeLabel).toHaveClass("color-stripe__heading--theme-light");
  });
});

describe("ColorStripe in grayscale mode", () => {
  it("should have a background-color equal to the color's grayscale equivalent rgb value", () => {
    setup(darkColor, true);
    const stripe = screen.getByTestId("color-stripe");
    expect(stripe).toHaveStyle(`background-color: ${darkColor.grayscaleRgb}`);
  });

  it("should NOT change background color for unsaturated colors", () => {
    setup(lightUnsaturatedColor, true);
    const stripe = screen.getByTestId("color-stripe");
    expect(stripe).toHaveStyle(
      `background-color: ${lightUnsaturatedColor.backgroundRgb}`
    );
  });
});
