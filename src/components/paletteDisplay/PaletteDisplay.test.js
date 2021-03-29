import React from "react";

import PaletteDisplay from "./PaletteDisplay";

import { render, screen } from "@testing-library/react";

const setup = (paletteData) => {
  render(<PaletteDisplay paletteData={paletteData} />);
};

const mockPaletteData = [
  { hex: "000000" },
  { hex: "14213d" },
  { hex: "fca311" },
  { hex: "e5e5e5" },
  { hex: "ffffff" }
];

describe("Palette display", () => {
  it("should render no ColorStripes when the paletteData is empty", () => {
    setup([]);
    const stripes = screen.queryAllByTestId("color-stripe");
    expect(stripes.length).toBe(0);
  });

  it("should render one ColorStripe for each color in paletteData", () => {
    setup(mockPaletteData);
    const stripes = screen.queryAllByTestId("color-stripe");
    expect(stripes.length).toBe(5);
  });
});
