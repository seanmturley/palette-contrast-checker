export function parseRawPalette(rawPalette) {
  const hexPattern = /([a-f\d]{6})/gi;
  const hexMatch = rawPalette.match(hexPattern);

  if (hexMatch) return hexMatch;
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

function getLuminance(hex) {
  const rgb = hexToRgb(hex);
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

// The quadratic formula is used to solve for "threshold luminance" i.e. the luminance which has equal contrast with black or white.
const thresholdLuminance = (-0.1 + Math.sqrt(0.21)) / 2;

export function getPaletteData(parsedPalette) {
  const paletteData = [];

  parsedPalette.forEach((hex) => {
    const luminance = getLuminance(hex);
    const theme = luminance >= thresholdLuminance ? "light" : "dark";

    const colorData = {
      hex: hex,
      luminance: luminance,
      theme: theme
    };

    paletteData.push(colorData);
  });

  return paletteData;
}

export function getContrast(luminance1, luminance2) {
  let contrast;

  if (luminance1 > luminance2) {
    contrast = (luminance1 + 0.05) / (luminance2 + 0.05);
  } else {
    contrast = (luminance2 + 0.05) / (luminance1 + 0.05);
  }

  return contrast;
}
