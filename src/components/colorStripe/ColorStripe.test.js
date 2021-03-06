import React from "react";

import ColorStripe from "./ColorStripe";

import { render, screen } from "@testing-library/react";

const setup = (color, grayscale) => {
  render(
    <ColorStripe
      stripeColor={color.hex}
      grayscaleEquivalent={color.grayscaleEquivalent}
      hoverGrowClass={color.hoverGrowClass}
      hidePairs={color.hidePairs}
      contrastStandard={color.contrastStandard}
      grayscale={grayscale || false}
      stripeTheme={color.stripeTheme}
    />
  );
};

const darkColor = {
  hex: "14213d",
  grayscaleEquivalent: "202020",
  hoverGrowClass: "",
  hidePairs: "",
  contrastStandard: "aa",
  stripeTheme: "dark",
  backgroundRgb: "rgb(20, 33, 61)",
  grayscaleRgb: "rgb(32, 32, 32)",
  textRgb: "rgb(255, 255, 255)"
};

const lightUnsaturatedColor = {
  hex: "e5e5e5",
  grayscaleEquivalent: "e5e5e5",
  hoverGrowClass: "",
  hidePairs: "",
  contrastStandard: "aa",
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
    const stripeLabel = screen.queryByText(darkColor.hex);
    expect(stripeLabel).toBeInTheDocument();
  });

  it("should display the color's hex value in white if the color is dark", () => {
    setup(darkColor);
    const stripeLabel = screen.getByText(darkColor.hex);
    expect(stripeLabel).toHaveClass("color-stripe__heading--theme-dark");
  });

  it("should display the color's hex value in black if the color is light", () => {
    setup(lightUnsaturatedColor);
    const stripeLabel = screen.getByText(lightUnsaturatedColor.hex);
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
