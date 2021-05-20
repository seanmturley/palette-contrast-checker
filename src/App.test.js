import React from "react";

import App from "./App";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = () => {
  render(<App />);
};

const typePalette = (palette) => {
  const paletteInput = screen.getByLabelText(/add palette/i);
  userEvent.type(paletteInput, palette || "000000, ffffff");
};

const darkPalette = "000000, 111111";
const lightPalette = "ffffff, eeeeee";

const submitPalette = () => {
  const paletteSubmit = screen.getByRole("button", {
    name: /^\+$/i
  });
  userEvent.click(paletteSubmit);
};

const clickEditPaletteButton = () => {
  const editPaletteButton = screen.getByRole("button", {
    name: /edit palette/i
  });
  userEvent.click(editPaletteButton);
};

describe("When the palette input is open, the 'grayscale mode' button", () => {
  it("should be set to 'off'", () => {
    setup();
    const grayscaleForm = screen
      .getByLabelText(/grayscale mode/i)
      .closest("form");
    expect(grayscaleForm).toHaveClass("toggle-switch--false");
  });

  it("should be disabled", () => {
    setup();
    const grayscaleCheckbox = screen.getByLabelText(/grayscale mode/i);
    expect(grayscaleCheckbox).toHaveAttribute("disabled");
  });
});

describe("Upon closing the palette input, the 'grayscale mode' button", () => {
  it("should NOT be disabled", () => {
    setup();
    typePalette();
    submitPalette();
    const grayscaleCheckbox = screen.getByLabelText(/grayscale mode/i);
    expect(grayscaleCheckbox).not.toHaveAttribute("disabled");
  });

  it("should stay set to 'off' if it was previously 'off'", () => {
    setup();
    typePalette();
    submitPalette();
    const grayscaleForm = screen
      .getByLabelText(/grayscale mode/i)
      .closest("form");
    expect(grayscaleForm).toHaveClass("toggle-switch--false");
  });

  it("should return to 'on' if it was previously 'on'", () => {
    setup();
    typePalette();
    submitPalette();

    const grayscaleCheckbox = screen.getByLabelText(/grayscale mode/i);
    userEvent.click(grayscaleCheckbox);

    const grayscaleForm = screen
      .getByLabelText(/grayscale mode/i)
      .closest("form");
    expect(grayscaleForm).toHaveClass("toggle-switch--true");

    clickEditPaletteButton();
    expect(grayscaleForm).toHaveClass("toggle-switch--false");

    submitPalette();
    expect(grayscaleForm).toHaveClass("toggle-switch--true");
  });
});

describe("When the palette input is open, the 'theme' radio button group", () => {
  it("should be set to 'both'", () => {
    setup();
    const bothThemeButton = screen.getByLabelText(/both/i).closest("label");
    expect(bothThemeButton).toHaveClass("radio-button-group__label--selected");
  });

  it("should be disabled", () => {
    setup();
    const themeForm = screen.getByLabelText(/theme/i).closest("form");
    expect(themeForm).toHaveClass("radio-button-group--disabled");
  });
});

describe("Upon closing the palette input, the 'theme' radio button group", () => {
  it("should NOT be disabled", () => {
    setup();
    typePalette();
    submitPalette();
    const themeForm = screen.getByLabelText(/theme/i).closest("form");
    expect(themeForm).toHaveClass("radio-button-group--clickable");
  });

  it("should stay set to 'both' if it was previously 'both'", () => {
    setup();
    typePalette();
    submitPalette();
    const bothThemeButton = screen.getByLabelText(/both/i).closest("label");
    expect(bothThemeButton).toHaveClass("radio-button-group__label--selected");
  });

  it("should return to 'dark' if it was previously 'dark'", () => {
    setup();
    typePalette();
    submitPalette();

    const darkThemeButton = screen.getByLabelText(/dark/i).closest("label");
    userEvent.click(darkThemeButton);
    expect(darkThemeButton).toHaveClass("radio-button-group__label--selected");

    clickEditPaletteButton();
    const bothThemeButton = screen.getByLabelText(/both/i).closest("label");
    expect(bothThemeButton).toHaveClass("radio-button-group__label--selected");

    submitPalette();
    expect(darkThemeButton).toHaveClass("radio-button-group__label--selected");
  });

  it("should return to 'light' if it was previously 'light'", () => {
    setup();
    typePalette();
    submitPalette();

    const lightThemeButton = screen.getByLabelText(/light/i).closest("label");
    userEvent.click(lightThemeButton);
    expect(lightThemeButton).toHaveClass("radio-button-group__label--selected");

    clickEditPaletteButton();
    const bothThemeButton = screen.getByLabelText(/both/i).closest("label");
    expect(bothThemeButton).toHaveClass("radio-button-group__label--selected");

    submitPalette();
    expect(lightThemeButton).toHaveClass("radio-button-group__label--selected");
  });
});

describe("When the palette contains only colors of a single theme, the 'theme' radio button group", () => {
  it("should be disabled", () => {
    setup();
    typePalette(darkPalette);
    submitPalette();

    const themeForm = screen.getByLabelText(/theme/i).closest("form");
    expect(themeForm).toHaveClass("radio-button-group--disabled");
  });

  it("should be set to 'dark' if there are only dark colors", () => {
    setup();
    typePalette(darkPalette);
    submitPalette();

    const darkThemeButton = screen.getByLabelText(/dark/i).closest("label");
    expect(darkThemeButton).toHaveClass("radio-button-group__label--selected");
  });

  it("should be set to 'light' if there are only light colors", () => {
    setup();
    typePalette(lightPalette);
    submitPalette();

    const lightThemeButton = screen.getByLabelText(/light/i).closest("label");
    expect(lightThemeButton).toHaveClass("radio-button-group__label--selected");
  });
});

describe("The 'contrast standard' radio button", () => {
  it("should be disabled when the palette input is open", () => {
    setup();
    const contrastStandardForm = screen
      .getByLabelText(/wcag\s+standard/i)
      .closest("form");
    expect(contrastStandardForm).toHaveClass("radio-button-group--disabled");
  });

  it("should NOT be disabled when the palette input is closed", () => {
    setup();
    typePalette();
    submitPalette();
    const contrastStandardForm = screen
      .getByLabelText(/wcag\s+standard/i)
      .closest("form");
    expect(contrastStandardForm).toHaveClass("radio-button-group--clickable");
  });
});
