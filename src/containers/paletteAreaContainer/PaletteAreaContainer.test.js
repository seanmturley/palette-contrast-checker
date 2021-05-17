import React from "react";

import PaletteAreaContainer from "./PaletteAreaContainer";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = () => {
  render(
    <PaletteAreaContainer
      contrastStandard="aa"
      grayscale={false}
      setGrayscale={jest.fn()}
      previousGrayscale={false}
      theme="both"
      setTheme={jest.fn()}
      previousTheme="both"
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

const rgbPalette = `
rgb(149, 149, 149)
rgb(112 112 112)
rgba(255, 255, 255, 1)
rgba(232 0 112 0.5)
`;

const hslPalette = `
hsl(0, 0%, 58%)
hsl(0deg 0% 44%)
hsla(0, 0%, 100%, 1)
hsla(331 100% 45% 0.5)
`;

const duplicatePalette = `
000000
ffffff
000000
FFFFFF
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

describe("Palette input should accept rgb values and", () => {
  it("should produce the correct number of stripes", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, rgbPalette);
    const stripes = screen.getAllByTestId("color-stripe");
    expect(stripes).toHaveLength(4);
  });

  it("should produce the correct stripe labels", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, rgbPalette);
    const stripes = screen.getAllByTestId("color-stripe");
    const firstStripeLabel = within(stripes[0]).queryByText(/959595/i);
    expect(firstStripeLabel).toBeInTheDocument();
    const lastStripeLabel = within(stripes[3]).queryByText(/E80070/i);
    expect(lastStripeLabel).toBeInTheDocument();
  });
});

describe("Palette input should accept hsl values and", () => {
  it("should produce the correct number of stripes", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, hslPalette);
    const stripes = screen.getAllByTestId("color-stripe");
    expect(stripes).toHaveLength(4);
  });

  it("should produce the correct stripe labels", () => {
    // NOTE: HSL values are inherently lower resolution, so the stripe labels produced differ slightly from the hex/RGB inputs
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, hslPalette);
    const stripes = screen.getAllByTestId("color-stripe");
    const firstStripeLabel = within(stripes[0]).queryByText(/949494/i);
    expect(firstStripeLabel).toBeInTheDocument();
    const lastStripeLabel = within(stripes[3]).queryByText(/E6006F/i);
    expect(lastStripeLabel).toBeInTheDocument();
  });
});

describe("When editing the palette", () => {
  it("should ignore duplicate colors", () => {
    setup();
    const input = screen.getByLabelText(/add palette/i);
    userEvent.type(input, duplicatePalette);
    const stripes = screen.getAllByTestId("color-stripe");
    expect(stripes).toHaveLength(2);
  });
});
