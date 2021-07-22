import React from "react";

import "./ExportFavorites.css";

// import PropTypes from "prop-types";

function ExportFavorites() {
  return (
    <section className="export-favorites" data-testid="export-favorites">
      <section className="export-favorites__top-controls">
        <h1 className="export-favorites__heading">Export favorites</h1>
        <button className="export-favorites__close-button">+</button>
      </section>
      <section className="export-favorites__code-container">
        <code className="export-favorites__code">
          {`html {
          /* WCAG minimum for low-contrast pairings: */
          --large-font-required: 18pt; /* or 14pt bold */

          /* High-contrast pairings can use any reasonable
          font size e.g.: */
          --any-font-size: 12pt;
        }

        .aa_pairing-1 {
          background-color: #000000;
          color: #ffffff;
          font-size: var(--any-font-size);
        }

        .aa_pairing-2 {
          background-color: #555555;
          color: #aaaaaa;
          font-size: var(--large-font-required);
        }`}
        </code>
      </section>

      <section className="export-favorites__bottom-controls">
        <div>Colorspace placeholder</div>
        <div>Copy placeholder</div>
      </section>
    </section>
  );
}

ExportFavorites.propTypes = {};

export default ExportFavorites;
