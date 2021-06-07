import React from "react";

import ExportFavoritesContainer from "./ExportFavoritesContainer";

import { render, screen } from "@testing-library/react";

const setup = (visible) => {
  render(<ExportFavoritesContainer showExportFavorites={visible} />);
};

describe("Export favorites modal window", () => {
  it("should be visible when showExportFavorites={true}", () => {
    setup(true);
    const modalHeading = screen.getByRole(/heading/i);
    expect(modalHeading).toBeInTheDocument();
  });

  it("should NOT be visible when showExportFavorites={false}", () => {
    setup(false);
    const modalHeading = screen.queryByRole(/heading/i);
    expect(modalHeading).not.toBeInTheDocument();
  });
});
