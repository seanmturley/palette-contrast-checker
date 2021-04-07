import React from "react";

import ColorStripe from "./ColorStripe";

import { render, screen } from "@testing-library/react";

const setup = (color) => {
  render(
    <ColorStripe
      stripeColor={color.hex}
      stripeLabelColor={color.theme === "dark" ? "FFFFFF" : "000000"}
    />
  );
};

const darkColor = {
  hex: "14213d",
  theme: "dark",
  backgroundRgb: "rgb(20, 33, 61)",
  textRgb: "rgb(255, 255, 255)"
};

const lightColor = {
  hex: "e5e5e5",
  theme: "light",
  backgroundRgb: "rgb(229, 229, 229)",
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
    expect(stripeLabel).toHaveStyle(`color: ${darkColor.textRgb}`);
  });

  it("should display the color's hex value in black if the color is light", () => {
    setup(lightColor);
    const stripeLabel = screen.getByText(lightColor.hex);
    expect(stripeLabel).toHaveStyle(`color: ${lightColor.textRgb}`);
  });
});
