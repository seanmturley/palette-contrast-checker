import React from "react";

import ColorPair from "./ColorPair";

import { render, screen } from "@testing-library/react";

const setup = (color, grayscale, favorited) => {
  render(
    <ColorPair
      {...color}
      grayscale={grayscale || false}
      favorited={favorited || false}
      handleChangeFavorite={jest.fn()}
      hidePairs={""}
    />
  );
};

const color = {
  pairColor: "468faf",
  pairGrayscaleEquivalent: "828282",
  contrast: 3.6,
  hoverGrowClass: "",
  textSize: "Large",
  stripeColor: "ffffff",
  grayscale: false,
  textRgb: "rgb(70, 143, 175)",
  textGrayscaleRgb: "rgb(130, 130, 130)"
};

describe("Color pair", () => {
  it("should have text color set to the color's rgb value", () => {
    setup(color);
    const colorPair = screen.getByTestId("color-pair");
    expect(colorPair).toHaveStyle(`color: ${color.textRgb}`);
  });

  it("should display the color pairing's contrast ratio", () => {
    setup(color);
    const colorPairContrast = screen.queryByText(`${color.contrast} : 1`);
    expect(colorPairContrast).toBeInTheDocument();
  });

  it("should display the color's hex value", () => {
    setup(color);
    const colorHexValue = screen.queryByText(`${color.pairColor}`);
    expect(colorHexValue).toBeInTheDocument();
  });

  it("should display the color pairing's appropriate text size", () => {
    setup(color);
    const colorPairTextSize = screen.queryByText(`${color.textSize} font`);
    expect(colorPairTextSize).toBeInTheDocument();
  });

  it("should display the color pairings's text in bold if large text is required", () => {
    setup(color);
    const colorPairTextSize = screen.queryByText(`${color.textSize} font`);
    expect(colorPairTextSize).toHaveClass(
      `color-pair__text-size--${color.textSize}`
    );
  });
});

describe("In grayscale mode the color pair", () => {
  it("should have text color set to the color's grayscale equivalent rgb value", () => {
    setup(color, true);
    const colorPair = screen.getByTestId("color-pair");
    expect(colorPair).toHaveStyle(`color: ${color.textGrayscaleRgb}`);
  });
});

describe("Favorited color pair", () => {
  it("should display heart in place of hex value (when not hovered)", () => {
    setup(color, false, true);
    const colorPair = screen.getByTestId("color-pair");
    expect(colorPair).toHaveClass("color-pair--favorited");
  });
});
