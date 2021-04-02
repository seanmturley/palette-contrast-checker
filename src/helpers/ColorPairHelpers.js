export function getColorsPairingData(paletteData) {
  const colorPairData = {};

  // These loops just set up empty nested objects to store color-pair data
  paletteData.forEach((colorOuter) => {
    colorPairData[colorOuter.hex] = {};

    paletteData.forEach((colorInner) => {
      if (colorInner.hex !== colorOuter.hex) {
        colorPairData[colorOuter.hex][colorInner.hex] = {};
      }
    });
  });

  const length = paletteData.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const color1 = paletteData[i];
      const color2 = paletteData[j];

      const contrast = getContrast(color1.luminance, color2.luminance);
      colorPairData[color1.hex][color2.hex]["contrast"] = contrast;
      colorPairData[color2.hex][color1.hex]["contrast"] = contrast;

      const colorBlindSafe = checkColorBlindSafe(color1.rgb, color2.rgb);
      colorPairData[color1.hex][color2.hex]["colorBlindSafe"] = colorBlindSafe;
      colorPairData[color2.hex][color1.hex]["colorBlindSafe"] = colorBlindSafe;
    }
  }

  return colorPairData;
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

function checkColorBlindSafe(rgb1, rgb2) {
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
