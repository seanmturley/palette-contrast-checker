import React from "react";

import IconButton from "./IconButton";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (iconButtonProps) => {
  render(<IconButton {...iconButtonProps} />);
};

const clickableButton = {
  heading: "Heading",
  name: "button-name",
  icon: <span>Icon placeholder</span>,
  disableOnClick: false,
  state: false,
  setState: jest.fn()
};

const disabledButton = {
  heading: "Heading",
  name: "button-name",
  icon: <span>Icon placeholder</span>,
  disableOnClick: true,
  state: true,
  setState: jest.fn()
};

describe("All icon buttons", () => {
  it("should display the supplied heading", () => {
    setup(clickableButton);
    const buttonHeading = screen.queryByText(clickableButton.heading);
    expect(buttonHeading).toBeInTheDocument();
  });

  it("should display the supplied icon", () => {
    setup(clickableButton);
    const buttonIcon = screen.queryByText("Icon placeholder");
    expect(buttonIcon).toBeInTheDocument();
  });
});

describe("Clickable icon buttons", () => {
  it("should be styled as clickable", () => {
    setup(clickableButton);
    const button = screen.getByRole(/^button$/i);
    expect(button).toHaveClass("icon-button--clickable");
  });

  it("should be clickable", () => {
    setup(clickableButton);
    const button = screen.getByRole(/^button$/i);
    expect(button).not.toHaveAttribute("disabled");
  });

  it("should fire the setState function on click", () => {
    setup(clickableButton);
    const button = screen.getByRole(/^button$/i);
    userEvent.click(button);
    expect(clickableButton.setState).toHaveBeenCalledTimes(1);
  });
});

describe("Disabled icon buttons", () => {
  it("should NOT be styled as clickable", () => {
    setup(disabledButton);
    const button = screen.getByRole(/^button$/i);
    expect(button).toHaveClass("icon-button--disabled");
  });

  it("should NOT be clickable", () => {
    setup(disabledButton);
    const button = screen.getByRole(/^button$/i);
    expect(button).toHaveAttribute("disabled");
  });

  it("should NOT fire the setState function on click", () => {
    setup(disabledButton);
    const button = screen.getByRole(/^button$/i);
    userEvent.click(button);
    expect(disabledButton.setState).toHaveBeenCalledTimes(0);
  });
});
