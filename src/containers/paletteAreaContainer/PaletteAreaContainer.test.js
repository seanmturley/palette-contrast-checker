import React from "react";

import PaletteAreaContainer from "./PaletteAreaContainer";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = () => {
  render(
    <PaletteAreaContainer
      contrastStandard="aa"
      grayscale={false}
      theme="both"
      showPaletteInput={true}
      setShowPaletteInput={jest.fn()}
    />
  );
};

const hexPalette = `
959595
707070
ffffff
E80070
`;

describe("Palette input should accept hex values and", () => {
  it("should produce the correct number of stripes", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, hexPalette);
    const stripes = screen.getAllByTestId("color-stripe");
    expect(stripes).toHaveLength(4);
  });

  it("should produce the correct stripe labels", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, hexPalette);
    const stripes = screen.getAllByTestId("color-stripe");
    const firstStripeLabel = within(stripes[0]).queryByText(/959595/i);
    expect(firstStripeLabel).toBeInTheDocument();
    const lastStripeLabel = within(stripes[3]).queryByText(/E80070/i);
    expect(lastStripeLabel).toBeInTheDocument();
  });

  it("should produce the correct contrast ratios", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, hexPalette);
    const submit = screen.getByRole("button");
    userEvent.click(submit);
    const pairs = screen.getAllByTestId("color-pair");
    expect(pairs[0].firstChild).toHaveTextContent(/3\s*:\s*1/);
    expect(pairs[5].firstChild).toHaveTextContent(/4\.5\s*:\s*1/);
  });
});