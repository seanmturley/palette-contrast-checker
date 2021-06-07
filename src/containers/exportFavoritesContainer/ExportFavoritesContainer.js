import React from "react";

import ExportFavorites from "../../components/exportFavorites/ExportFavorites";

import PropTypes from "prop-types";

function ExportFavoritesContainer({
  showExportFavorites
  // setShowExportFavorites
}) {
  return <>{showExportFavorites && <ExportFavorites />}</>;
}

ExportFavoritesContainer.propTypes = {
  showExportFavorites: PropTypes.bool.isRequired
  // setShowExportFavorites: PropTypes.func.isRequired
};

export default ExportFavoritesContainer;
