import React from "react";

import PaletteDisplay from "./PaletteDisplay";

import { render, screen } from "@testing-library/react";

const setup = (paletteData, allColorPairs) => {
  render(
    <PaletteDisplay paletteData={paletteData} allColorPairs={allColorPairs} />
  );
};

const mockPaletteData = [
  { hex: "000000" },
  { hex: "14213d" },
  { hex: "fca311" },
  { hex: "e5e5e5" },
  { hex: "ffffff" }
];

const mockAllColorPairs = {
  "000000": {
    aa: [
      {
        hex: "ffffff",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "fca311",
        contrast: 10.4,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      }
    ],
    aaa: [
      {
        hex: "ffffff",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "fca311",
        contrast: 10.4,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      }
    ],
    aaColorblind: [
      {
        hex: "ffffff",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaaColorblind: [
      {
        hex: "ffffff",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ]
  },
  "14213d": {
    aa: [
      {
        hex: "ffffff",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "fca311",
        contrast: 7.9,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      }
    ],
    aaa: [
      {
        hex: "ffffff",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "fca311",
        contrast: 7.9,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      }
    ],
    aaColorblind: [
      {
        hex: "ffffff",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaaColorblind: [
      {
        hex: "ffffff",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "e5e5e5",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ]
  },
  fca311: {
    aa: [
      {
        hex: "000000",
        contrast: 10.4,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      },
      {
        hex: "14213d",
        contrast: 7.9,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      }
    ],
    aaa: [
      {
        hex: "000000",
        contrast: 10.4,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      },
      {
        hex: "14213d",
        contrast: 7.9,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: false
      }
    ],
    aaColorblind: [],
    aaaColorblind: []
  },
  e5e5e5: {
    aa: [
      {
        hex: "000000",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaa: [
      {
        hex: "000000",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaColorblind: [
      {
        hex: "000000",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaaColorblind: [
      {
        hex: "000000",
        contrast: 16.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 12.7,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ]
  },
  ffffff: {
    aa: [
      {
        hex: "000000",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaa: [
      {
        hex: "000000",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaColorblind: [
      {
        hex: "000000",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ],
    aaaColorblind: [
      {
        hex: "000000",
        contrast: 21,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      },
      {
        hex: "14213d",
        contrast: 16,
        aa: "Normal",
        aaa: "Normal",
        colorblindSafe: true
      }
    ]
  }
};

describe("Palette display", () => {
  it("should render no ColorStripes when the paletteData is empty", () => {
    setup([]);
    const stripes = screen.queryAllByTestId("color-stripe");
    expect(stripes.length).toBe(0);
  });

  it("should render one ColorStripe for each color in paletteData", () => {
    setup(mockPaletteData, mockAllColorPairs);
    const stripes = screen.queryAllByTestId("color-stripe");
    expect(stripes.length).toBe(5);
  });
});
