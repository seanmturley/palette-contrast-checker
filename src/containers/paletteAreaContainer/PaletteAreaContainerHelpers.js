export function getAllColorPairs(paletteData) {
  const rawColorPairs = getRawColorPairs(paletteData);

  const allFilteredColorPairs = {};

  for (const [color, pairingData] of Object.entries(rawColorPairs)) {
    const [aa, aaa, aaColorblind, aaaColorblind] = getFilteredColorPairs(
      pairingData
    );

    allFilteredColorPairs[color] = {};

    allFilteredColorPairs[color]["aa"] = aa;
    allFilteredColorPairs[color]["aaa"] = aaa;
    allFilteredColorPairs[color]["aaColorblind"] = aaColorblind;
    allFilteredColorPairs[color]["aaaColorblind"] = aaaColorblind;
  }

  return allFilteredColorPairs;
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

      let contrast = getContrast(color1.luminance, color2.luminance);
      contrast = Math.round((contrast + Number.EPSILON) * 10) / 10;
      setColorPairData(rawColorPairs, hex1, hex2, "contrast", contrast);

      if (contrast >= 7) {
        setColorPairData(rawColorPairs, hex1, hex2, "aa", "Normal");
        setColorPairData(rawColorPairs, hex1, hex2, "aaa", "Normal");
      } else if (contrast >= 4.5) {
        setColorPairData(rawColorPairs, hex1, hex2, "aa", "Normal");
        setColorPairData(rawColorPairs, hex1, hex2, "aaa", "Large");
      } else if (contrast >= 3) {
        setColorPairData(rawColorPairs, hex1, hex2, "aa", "Large");
      }

      const colorblindSafe = checkColorblindSafe(color1.rgb, color2.rgb);
      setColorPairData(
        rawColorPairs,
        hex1,
        hex2,
        "colorblindSafe",
        colorblindSafe
      );
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

function checkColorblindSafe(rgb1, rgb2) {
  return (
    safeBrightnessDifference(rgb1, rgb2) && safeColorDifference(rgb1, rgb2)
  );
}

function safeBrightnessDifference(rgb1, rgb2) {
  const brightness1 = getBrightness(rgb1);
  const brightness2 = getBrightness(rgb2);

  return Math.abs(brightness1 - brightness2) >= 125;
}

function getBrightness(rgb) {
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}

function safeColorDifference(rgb1, rgb2) {
  const colorDifference =
    Math.abs(rgb1[0] - rgb2[0]) +
    Math.abs(rgb1[1] - rgb2[1]) +
    Math.abs(rgb1[2] - rgb2[2]);

  return colorDifference >= 500;
}

function setColorPairData(rawColorPairs, hex1, hex2, key, value) {
  rawColorPairs[hex1][hex2][key] = value;
  rawColorPairs[hex2][hex1][key] = value;
}

function getFilteredColorPairs(pairingData) {
  const sortedColorPairs = getSortedColorPairs(pairingData);

  const aa = sortedColorPairs.filter((pair) => "aa" in pair);
  const aaa = aa.filter((pair) => "aaa" in pair);

  const aaColorblind = aa.filter((pair) => pair.colorblindSafe);
  const aaaColorblind = aaa.filter((pair) => pair.colorblindSafe);

  return [aa, aaa, aaColorblind, aaaColorblind];
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
