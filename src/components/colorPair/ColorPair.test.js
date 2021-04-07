import React from "react";

import ColorPair from "./ColorPair";

import { render, screen } from "@testing-library/react";

const setup = (color) => {
  render(
    <ColorPair
      hex={color.hex}
      contrast={color.contrast}
      textSize={color.textSize}
    />
  );
};

const color = {
  hex: "ffffff",
  contrast: 21,
  textSize: "Normal",
  textRgb: "rgb(255, 255, 255)"
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
    const colorHexValue = screen.queryByText(`${color.hex}`);
    expect(colorHexValue).toBeInTheDocument();
  });

  it("should display the color pairing's appropriate text size", () => {
    setup(color);
    const colorPairTextSize = screen.queryByText(`${color.textSize} text`);
    expect(colorPairTextSize).toBeInTheDocument();
  });
});
