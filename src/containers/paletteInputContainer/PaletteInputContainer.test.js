import React from "react";

import PaletteInputContainer from "./PaletteInputContainer";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (visible, handleInputSubmit) => {
  render(
    <PaletteInputContainer
      showPaletteInput={visible}
      setPaletteData={jest.fn()}
      handleInputSubmit={handleInputSubmit}
    />
  );
};

describe("Palette input modal window", () => {
  it("should be visible when showPaletteInput={true}", () => {
    setup(true);
    const form = screen.queryByRole(/form/i);
    expect(form).toBeInTheDocument();
  });

  it("should NOT be visible when showPaletteInput={false}", () => {
    setup(false);
    const form = screen.queryByRole(/form/i);
    expect(form).not.toBeInTheDocument();
  });
});

describe("Palette input textbox", () => {
  it("should display user input", () => {
    setup(true);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "#000000");
    expect(input).toHaveValue("#000000");
  });
});

describe("Palette input submit button", () => {
  it("should fire the handleInputSubmit function when clicked", () => {
    const handleInputSubmit = jest.fn((event) => event.preventDefault());
    setup(true, handleInputSubmit);
    const submit = screen.getByRole("button");
    userEvent.click(submit);
    expect(handleInputSubmit).toHaveBeenCalledTimes(1);
  });
});
