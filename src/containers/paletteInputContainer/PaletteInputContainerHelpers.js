export function parseRawPalette(rawPalette) {
  // Parses palette input for hex values (extend later for other color formats)
  // Returns array of objects containing the hex and rgb values for each match

  const hexPattern = /([a-f\d]{6})/gi;
  const hexMatch = rawPalette.match(hexPattern);

  const colorValues = [];

  if (hexMatch) {
    hexMatch.forEach((hex) => {
      const rgb = hexToRgb(hex);
      const newColorValue = {
        hex: hex,
        rgb: rgb
      };
      colorValues.push(newColorValue);
    });
    return colorValues;
  }
}

function hexToRgb(hex) {
  const match = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex);

  if (match) {
    return [
      parseInt(match[1], 16),
      parseInt(match[2], 16),
      parseInt(match[3], 16)
    ];
  }
}

// The quadratic formula is used to solve for "threshold luminance" i.e. the luminance which has equal contrast with black or white.
const thresholdLuminance = (-0.1 + Math.sqrt(0.21)) / 2;

export function getPaletteData(parsedPalette) {
  const paletteData = [];

  parsedPalette.forEach((color) => {
    const luminance = getLuminance(color.rgb);
    const grayscaleEquivalent = getGrayscaleEquivalent(luminance);
    const theme = luminance >= thresholdLuminance ? "light" : "dark";

    const colorData = {
      hex: color.hex,
      rgb: color.rgb,
      grayscaleEquivalent: grayscaleEquivalent,
      luminance: luminance,
      theme: theme
    };

    paletteData.push(colorData);
  });

  return paletteData;
}

function getLuminance(rgb) {
  const channelLuminance = [];

  rgb.forEach((channel, index) => {
    const sRgb = channel / 255;
    if (sRgb <= 0.03928) {
      channelLuminance[index] = sRgb / 12.92;
    } else {
      channelLuminance[index] = ((sRgb + 0.055) / 1.055) ** 2.4;
    }
  });

  const relativeLuminance =
    0.2126 * channelLuminance[0] +
    0.7152 * channelLuminance[1] +
    0.0722 * channelLuminance[2];

  return relativeLuminance;
}

function getGrayscaleEquivalent(luminance) {
  let singleChannelHex = Math.round(luminance * 255).toString(16);
  if (singleChannelHex.length === 1) {
    singleChannelHex = "0" + singleChannelHex;
  }
  return singleChannelHex.repeat(3);
}
