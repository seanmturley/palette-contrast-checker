import React from "react";

import ToggleSwitch from "./ToggleSwitch";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (switchProps, state) => {
  render(<ToggleSwitch {...switchProps} state={state || false} />);
};

const switchProps = {
  heading: "Heading",
  name: "button-name",
  optionLabels: { true: "on", false: "off" },
  showLabels: true,
  setState: jest.fn()
};

describe("Toggle switch", () => {
  it("should display the supplied heading and use it as hidden label text", () => {
    setup(switchProps);
    const switchHeading = screen.queryAllByText(switchProps.heading);
    expect(switchHeading).toHaveLength(2);
  });

  it("should display the 'true' label", () => {
    setup(switchProps);
    const switchTrueLabel = screen.queryByText(switchProps.optionLabels.true);
    expect(switchTrueLabel).toBeInTheDocument();
  });

  it("should display the 'false' label", () => {
    setup(switchProps);
    const switchFalseLabel = screen.queryByText(switchProps.optionLabels.false);
    expect(switchFalseLabel).toBeInTheDocument();
  });

  it("should fire the setState function on click", () => {
    setup(switchProps);
    const switchCheckbox = screen.getByRole(/^checkbox$/i);
    userEvent.click(switchCheckbox);
    expect(switchProps.setState).toHaveBeenCalledTimes(1);
  });

  it("should be styled as 'off' when state is 'false'", () => {
    setup(switchProps, false);
    const switchForm = screen.getByRole(/^checkbox$/i).closest("form");
    expect(switchForm).toHaveClass("toggle-switch--false");
  });

  it("should be styled as 'on' when state is 'true'", () => {
    setup(switchProps, true);
    const switchForm = screen.getByRole(/^checkbox$/i).closest("form");
    expect(switchForm).toHaveClass("toggle-switch--true");
  });
});
