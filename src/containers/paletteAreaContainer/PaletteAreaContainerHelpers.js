export function differenceBetween(newPaletteArray, previousPaletteArray) {
  if (newPaletteArray === previousPaletteArray) return false;
  if (newPaletteArray.length !== previousPaletteArray.length) return true;

  for (let i = newPaletteArray.length - 1; i >= 0; i--) {
    if (newPaletteArray[i]["hex"] !== previousPaletteArray[i]["hex"])
      return true;
  }

  return false;
}

export function getAllColorPairData(paletteData) {
  const rawColorPairs = getRawColorPairs(paletteData);

  const allFilteredColorPairs = {};
  let maxPairsCount = 0;

  for (const [color, pairingData] of Object.entries(rawColorPairs)) {
    const [aa, aaa] = getFilteredColorPairs(pairingData);

    allFilteredColorPairs[color] = {};

    allFilteredColorPairs[color]["aa"] = aa;
    allFilteredColorPairs[color]["aaa"] = aaa;

    const aaPairsCount = aa.length;
    allFilteredColorPairs[color]["aaPairsCount"] = aaPairsCount;
    allFilteredColorPairs[color]["aaaPairsCount"] = aaa.length;

    if (aaPairsCount > maxPairsCount) {
      maxPairsCount = aaPairsCount;
    }
  }

  return [allFilteredColorPairs, maxPairsCount];
}

function getRawColorPairs(paletteData) {
  const rawColorPairs = {};

  // These loops just set up empty nested objects to store color-pair data
  paletteData.forEach((colorOuter) => {
    rawColorPairs[colorOuter.hex] = {};

    paletteData.forEach((colorInner) => {
      if (colorInner.hex !== colorOuter.hex) {
        rawColorPairs[colorOuter.hex][colorInner.hex] = {};
      }
    });
  });

  const iStop = paletteData.length - 1;
  const jStop = paletteData.length;
  for (let i = 0; i < iStop; i++) {
    for (let j = i + 1; j < jStop; j++) {
      const color1 = paletteData[i];
      const color2 = paletteData[j];

      const hex1 = color1.hex;
      const hex2 = color2.hex;

      setColorPairData(
        rawColorPairs,
        hex1,
        hex2,
        "grayscaleEquivalent",
        color2.grayscaleEquivalent,
        color1.grayscaleEquivalent
      );

      let contrast = getContrast(color1.luminance, color2.luminance);
      contrast = Math.round((contrast + Number.EPSILON) * 10) / 10;
      setColorPairData(rawColorPairs, hex1, hex2, "contrast", contrast);

      if (contrast >= 7) {
        setColorPairData(rawColorPairs, hex1, hex2, "aa", "Any");
        setColorPairData(rawColorPairs, hex1, hex2, "aaa", "Any");
      } else if (contrast >= 4.5) {
        setColorPairData(rawColorPairs, hex1, hex2, "aa", "Any");
        setColorPairData(rawColorPairs, hex1, hex2, "aaa", "Large");
      } else if (contrast >= 3) {
        setColorPairData(rawColorPairs, hex1, hex2, "aa", "Large");
      }
    }
  }

  return rawColorPairs;
}

function getContrast(luminance1, luminance2) {
  let contrast;

  if (luminance1 > luminance2) {
    contrast = (luminance1 + 0.05) / (luminance2 + 0.05);
  } else {
    contrast = (luminance2 + 0.05) / (luminance1 + 0.05);
  }

  return contrast;
}

function setColorPairData(rawColorPairs, hex1, hex2, key, value1, value2) {
  rawColorPairs[hex1][hex2][key] = value1;
  rawColorPairs[hex2][hex1][key] = value2 || value1;
}

function getFilteredColorPairs(pairingData) {
  const sortedColorPairs = getSortedColorPairs(pairingData);

  const aa = sortedColorPairs.filter((pair) => "aa" in pair);
  const aaa = aa.filter((pair) => "aaa" in pair);

  return [aa, aaa];
}

function getSortedColorPairs(pairingData) {
  const sortedColorPairs = [];

  Object.entries(pairingData).forEach((pairing) => {
    sortedColorPairs.push(Object.assign({}, { hex: pairing[0] }, pairing[1]));
  });

  sortedColorPairs.sort((a, b) => {
    return b.contrast - a.contrast;
  });

  return sortedColorPairs;
}

export function noThemeInPalette(paletteData, theme) {
  return !paletteData.some((color) => Object.values(color).includes(theme));
}

export function purgeFavorites(favorites, paletteData) {
  const purgedFavorites = { ...favorites };
  const paletteColors = paletteData.map((color) => color.hex);

  for (const backgroundColor in favorites) {
    if (paletteColors.includes(backgroundColor)) {
      for (const foregroundColor in favorites[backgroundColor]) {
        if (!paletteColors.includes(foregroundColor)) {
          delete purgedFavorites[backgroundColor][foregroundColor];
        }
      }

      if (Object.keys(purgedFavorites[backgroundColor]).length === 0) {
        delete purgedFavorites[backgroundColor];
      }
    } else {
      delete purgedFavorites[backgroundColor];
    }
  }

  return purgedFavorites;
}

export function updateFavorites(favorites, favoriteToUpdate) {
  const [backgroundColor, foregroundColor, favorited] = favoriteToUpdate.split(
    "-"
  );

  let updatedFavorites;

  if (favorited === "true") {
    updatedFavorites = { ...favorites };

    if (Object.keys(updatedFavorites[backgroundColor]).length > 1) {
      delete updatedFavorites[backgroundColor][foregroundColor];
    } else {
      delete updatedFavorites[backgroundColor];
    }
  } else {
    updatedFavorites = {
      ...favorites,
      [backgroundColor]: {
        ...favorites[backgroundColor],
        [foregroundColor]: true
      }
    };
  }

  return updatedFavorites;
}
