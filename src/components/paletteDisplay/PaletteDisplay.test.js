import React from "react";

import PaletteDisplay from "./PaletteDisplay";

import { render, screen } from "@testing-library/react";

const setup = (palette) => {
  render(<PaletteDisplay {...palette} />);
};

const emptyPalette = {
  paletteData: [],
  allColorPairs: {},
  maxPairsCount: 0,
  favorites: {},
  handleChangeFavorite: jest.fn(),
  hidePairs: " color-pair--hide",
  contrastStandard: "aa",
  grayscale: false,
  theme: "both"
};

const mockPaletteData = [
  { hex: "000000", grayscaleEquivalent: "000000", luminance: 0, theme: "dark" },
  {
    hex: "14213d",
    grayscaleEquivalent: "202020",
    luminance: 0.015733572954602534,
    theme: "dark"
  },
  {
    hex: "fca311",
    grayscaleEquivalent: "ababab",
    luminance: 0.4693030343862599,
    theme: "light"
  },
  {
    hex: "e5e5e5",
    grayscaleEquivalent: "e5e5e5",
    luminance: 0.7835377915261935,
    theme: "light"
  },
  { hex: "ffffff", grayscaleEquivalent: "ffffff", luminance: 1, theme: "light" }
];

const mockAllColorPairs = {
  "000000": {
    aa: [
      {
        hex: "ffffff",
        grayscaleEquivalent: "ffffff",
        contrast: 21,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "e5e5e5",
        grayscaleEquivalent: "e5e5e5",
        contrast: 16.7,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "fca311",
        grayscaleEquivalent: "ababab",
        contrast: 10.4,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaa: [
      {
        hex: "ffffff",
        grayscaleEquivalent: "ffffff",
        contrast: 21,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "e5e5e5",
        grayscaleEquivalent: "e5e5e5",
        contrast: 16.7,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "fca311",
        grayscaleEquivalent: "ababab",
        contrast: 10.4,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaPairsCount: 3,
    aaaPairsCount: 3
  },
  "14213d": {
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
  },
  fca311: {
    aa: [
      {
        hex: "000000",
        grayscaleEquivalent: "000000",
        contrast: 10.4,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "14213d",
        grayscaleEquivalent: "202020",
        contrast: 7.9,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaa: [
      {
        hex: "000000",
        grayscaleEquivalent: "000000",
        contrast: 10.4,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "14213d",
        grayscaleEquivalent: "202020",
        contrast: 7.9,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaPairsCount: 2,
    aaaPairsCount: 2
  },
  e5e5e5: {
    aa: [
      {
        hex: "000000",
        grayscaleEquivalent: "000000",
        contrast: 16.7,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "14213d",
        grayscaleEquivalent: "202020",
        contrast: 12.7,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaa: [
      {
        hex: "000000",
        grayscaleEquivalent: "000000",
        contrast: 16.7,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "14213d",
        grayscaleEquivalent: "202020",
        contrast: 12.7,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaPairsCount: 2,
    aaaPairsCount: 2
  },
  ffffff: {
    aa: [
      {
        hex: "000000",
        grayscaleEquivalent: "000000",
        contrast: 21,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "14213d",
        grayscaleEquivalent: "202020",
        contrast: 16,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaa: [
      {
        hex: "000000",
        grayscaleEquivalent: "000000",
        contrast: 21,
        aa: "Any",
        aaa: "Any"
      },
      {
        hex: "14213d",
        grayscaleEquivalent: "202020",
        contrast: 16,
        aa: "Any",
        aaa: "Any"
      }
    ],
    aaPairsCount: 2,
    aaaPairsCount: 2
  }
};

const palette = {
  paletteData: mockPaletteData,
  allColorPairs: mockAllColorPairs,
  maxPairsCount: 3,
  favorites: {},
  handleChangeFavorite: jest.fn(),
  hidePairs: "",
  contrastStandard: "aa",
  grayscale: false,
  theme: "both"
};

describe("Palette display", () => {
  it("should render no ColorStripes when the paletteData is empty", () => {
    setup(emptyPalette);
    const stripes = screen.queryAllByTestId("color-stripe");
    expect(stripes.length).toBe(0);
  });

  it("should render one ColorStripe for each color in paletteData", () => {
    setup(palette);
    const stripes = screen.queryAllByTestId("color-stripe");
    expect(stripes.length).toBe(5);
  });
});
