import React from "react";

import ColorStripeContainer from "./ColorStripeContainer";

import { render, screen } from "@testing-library/react";

const setup = (colorData, theme, contrastStandard) => {
  render(
    <ColorStripeContainer
      {...colorData}
      maxPairsCount={3}
      stripeFavorites={undefined}
      handleChangeFavorite={jest.fn()}
      showPaletteInput={false}
      contrastStandard={contrastStandard || "aa"}
      grayscale={false}
      theme={theme}
    />
  );
};

const darkColorData = {
  color: {
    hex: "14213d",
    grayscaleEquivalent: "202020",
    luminance: 0.015733572954602534,
    theme: "dark",
    backgroundRgb: "rgb(20, 33, 61)"
  },
  colorPairs: {
    aa: [
      {
        hex: "ffffff",
        grayscaleEquivalent: "ffffff",
        contrast: 16,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "e5e5e5",
        grayscaleEquivalent: "e5e5e5",
        contrast: 12.7,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "fca311",
        grayscaleEquivalent: "ababab",
        contrast: 7.9,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaa: [
      {
        hex: "ffffff",
        grayscaleEquivalent: "ffffff",
        contrast: 16,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "e5e5e5",
        grayscaleEquivalent: "e5e5e5",
        contrast: 12.7,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "fca311",
        grayscaleEquivalent: "ababab",
        contrast: 7.9,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaPairsCount: 3,
    aaaPairsCount: 3
  }
};

const lightColorData = {
  color: {
    hex: "ffffff",
    grayscaleEquivalent: "ffffff",
    luminance: 1,
    theme: "light",
    backgroundRgb: "rgb(255, 255, 255)"
  },
  colorPairs: {
    aa: [
      {
        hex: "707070",
        grayscaleEquivalent: "707070",
        contrast: 5,
        aa: "Any",
        aaa: "Large"
      },
      {
        hex: "E80070",
        grayscaleEquivalent: "393939",
        contrast: 4.5,
        aa: "Any",
        aaa: "Large"
      },
      { hex: "959595", grayscaleEquivalent: "959595", contrast: 3, aa: "Large" }
    ],
    aaa: [
      {
        hex: "707070",
        grayscaleEquivalent: "707070",
        contrast: 5,
        aa: "Any",
        aaa: "Large"
      },
      {
        hex: "E80070",
        grayscaleEquivalent: "393939",
        contrast: 4.5,
        aa: "Any",
        aaa: "Large"
      }
    ],
    aaPairsCount: 3,
    aaaPairsCount: 2
  }
};

describe("ColorStripeContainer with theme set to 'both'", () => {
  it("should render dark stripes", () => {
    setup(darkColorData, "both");
    const darkStripe = screen.getByTestId("color-stripe");
    expect(darkStripe).toHaveStyle(
      `background-color: ${darkColorData.color.backgroundRgb}`
    );
  });
  it("should render light stripes", () => {
    setup(lightColorData, "both");
    const lightStripe = screen.getByTestId("color-stripe");
    expect(lightStripe).toHaveStyle(
      `background-color: ${lightColorData.color.backgroundRgb}`
    );
  });
});

describe("ColorStripeContainer with theme set to 'dark'", () => {
  it("should render dark stripes", () => {
    setup(darkColorData, "dark");
    const darkStripe = screen.getByTestId("color-stripe");
    expect(darkStripe).toHaveStyle(
      `background-color: ${darkColorData.color.backgroundRgb}`
    );
  });
  it("should NOT render light stripes", () => {
    setup(lightColorData, "dark");
    const lightStripe = screen.queryByTestId("color-stripe");
    expect(lightStripe).not.toBeInTheDocument();
  });
});

describe("ColorStripeContainer with theme set to 'light'", () => {
  it("should NOT render dark stripes", () => {
    setup(darkColorData, "light");
    const darkStripe = screen.queryByTestId("color-stripe");
    expect(darkStripe).not.toBeInTheDocument();
  });
  it("should render light stripes", () => {
    setup(lightColorData, "light");
    const lightStripe = screen.getByTestId("color-stripe");
    expect(lightStripe).toHaveStyle(
      `background-color: ${lightColorData.color.backgroundRgb}`
    );
  });
});

describe("The number of color pairings displayed in the ColorStripe", () => {
  it("should generally be higher when the AA standard is selected", () => {
    setup(lightColorData, "both", "aa");
    const colorPairs = screen.queryAllByTestId("color-pair");
    expect(colorPairs).toHaveLength(3);
  });

  it("should generally be lower when the AAA standard is selected", () => {
    setup(lightColorData, "both", "aaa");
    const colorPairs = screen.queryAllByTestId("color-pair");
    expect(colorPairs).toHaveLength(2);
  });
});
