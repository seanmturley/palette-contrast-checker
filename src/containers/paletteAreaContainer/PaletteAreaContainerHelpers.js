export function getAllColorPairs(paletteData) {
  const allColorPairs = {};

  // These loops just set up empty nested objects to store color-pair data
  paletteData.forEach((colorOuter) => {
    allColorPairs[colorOuter.hex] = {};

    paletteData.forEach((colorInner) => {
      if (colorInner.hex !== colorOuter.hex) {
        allColorPairs[colorOuter.hex][colorInner.hex] = {};
      }
    });
  });

  const length = paletteData.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const color1 = paletteData[i];
      const color2 = paletteData[j];

      const hex1 = color1.hex;
      const hex2 = color2.hex;

      let contrast = getContrast(color1.luminance, color2.luminance);
      contrast = Math.round((contrast + Number.EPSILON) * 10) / 10;
      setColorPairData(allColorPairs, hex1, hex2, "contrast", contrast);

      if (contrast >= 7) {
        setColorPairData(allColorPairs, hex1, hex2, "aa", "Normal");
        setColorPairData(allColorPairs, hex1, hex2, "aaa", "Normal");
      } else if (contrast >= 4.5) {
        setColorPairData(allColorPairs, hex1, hex2, "aa", "Normal");
        setColorPairData(allColorPairs, hex1, hex2, "aaa", "Large");
      } else if (contrast >= 3) {
        setColorPairData(allColorPairs, hex1, hex2, "aa", "Large");
      }

      const colorblindSafe = checkColorblindSafe(color1.rgb, color2.rgb);
      setColorPairData(
        allColorPairs,
        hex1,
        hex2,
        "colorblindSafe",
        colorblindSafe
      );
    }
  }

  return allColorPairs;
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

function setColorPairData(allColorPairs, hex1, hex2, key, value) {
  allColorPairs[hex1][hex2][key] = value;
  allColorPairs[hex2][hex1][key] = value;
}
