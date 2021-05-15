import React from "react";

import App from "./App";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultSetup = () => {
  render(<App />);
};

const setupWithPaletteSubmitted = () => {
  defaultSetup();
  const paletteInput = screen.getByLabelText(/add palette/i);
  userEvent.type(paletteInput, "000000, ffffff");
  const paletteSubmit = screen.getByDisplayValue(/^\+$/i);
  userEvent.click(paletteSubmit);
};

describe("When the palette input is open, the 'grayscale mode' button", () => {
  it("should be set to 'off'", () => {
    defaultSetup();
    const grayscaleForm = screen
      .getByLabelText(/grayscale mode/i)
      .closest("form");
    expect(grayscaleForm).toHaveClass("toggle-switch--false");
  });

  it("should be disabled", () => {
    defaultSetup();
    const grayscaleCheckbox = screen.getByLabelText(/grayscale mode/i);
    expect(grayscaleCheckbox).toHaveAttribute("disabled");
  });
});

describe("Upon closing the palette input, the 'grayscale mode' button", () => {
  it("should NOT be disabled", () => {
    setupWithPaletteSubmitted();
    const grayscaleCheckbox = screen.getByLabelText(/grayscale mode/i);
    expect(grayscaleCheckbox).not.toHaveAttribute("disabled");
  });

  it("should stay set to 'off' if it was previously 'off'", () => {
    setupWithPaletteSubmitted();
    const grayscaleForm = screen
      .getByLabelText(/grayscale mode/i)
      .closest("form");
    expect(grayscaleForm).toHaveClass("toggle-switch--false");
  });

  it("should return to 'on' if it was previously 'on'", () => {
    setupWithPaletteSubmitted();

    const grayscaleCheckbox = screen.getByLabelText(/grayscale mode/i);
    userEvent.click(grayscaleCheckbox);

    const grayscaleForm = screen
      .getByLabelText(/grayscale mode/i)
      .closest("form");
    expect(grayscaleForm).toHaveClass("toggle-switch--true");

    const editPaletteButton = screen.getByRole("button", {
      name: /edit palette/i
    });
    userEvent.click(editPaletteButton);
    expect(grayscaleForm).toHaveClass("toggle-switch--false");

    const paletteSubmitAgain = screen.getByDisplayValue(/^\+$/i);
    userEvent.click(paletteSubmitAgain);
    expect(grayscaleForm).toHaveClass("toggle-switch--true");
  });
});
