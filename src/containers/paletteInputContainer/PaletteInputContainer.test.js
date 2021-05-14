import React from "react";

import PaletteInputContainer from "./PaletteInputContainer";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (visible, handleInputSubmit) => {
  render(
    <PaletteInputContainer
      showPaletteInput={visible}
      setPaletteData={jest.fn()}
      handleInputSubmit={handleInputSubmit || jest.fn()}
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

describe("When the input contains two or more colors the submit button", () => {
  it("should be styled as clickable", () => {
    setup(true);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "000000, ffffff");
    const submit = screen.getByRole(/^button$/i);
    expect(submit).toHaveClass("palette-input__submit-button--clickable");
  });

  it("should be clickable", () => {
    setup(true);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "000000, ffffff");
    const submit = screen.getByRole(/^button$/i);
    expect(submit).not.toHaveAttribute("disabled");
  });

  it("should fire the handleInputSubmit function on click", () => {
    const handleInputSubmit = jest.fn((event) => event.preventDefault());
    setup(true, handleInputSubmit);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "000000, ffffff");
    const submit = screen.getByRole(/^button$/i);
    userEvent.click(submit);
    expect(handleInputSubmit).toHaveBeenCalledTimes(1);
  });
});

describe("When the input contains less than two colors the submit button", () => {
  it("should NOT be styled as clickable", () => {
    setup(true);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "000000");
    const submit = screen.getByRole(/^button$/i);
    expect(submit).toHaveClass("palette-input__submit-button--disabled");
  });

  it("should NOT be clickable", () => {
    setup(true);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "000000");
    const submit = screen.getByRole(/^button$/i);
    expect(submit).toHaveAttribute("disabled");
  });

  it("should NOT fire the handleInputSubmit function on click", () => {
    const handleInputSubmit = jest.fn((event) => event.preventDefault());
    setup(true, handleInputSubmit);
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, "000000");
    const submit = screen.getByRole(/^button$/i);
    userEvent.click(submit);
    expect(handleInputSubmit).toHaveBeenCalledTimes(0);
  });
});
