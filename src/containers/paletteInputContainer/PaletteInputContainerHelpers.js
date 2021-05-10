export function parseRawPalette(rawPalette) {
  const parsedPalette = [];

  const hexPattern = /([a-f\d]{6})/gi;
  const hexMatch = rawPalette.match(hexPattern);

  if (hexMatch) {
    hexMatch.forEach((hex) => {
      const rgbChannels = hexToRgb(hex);

      addParsedColor(hex, rgbChannels, parsedPalette);
    });
  }

  const rgbPattern = /(rgba?\(\d{1,3},?\s*\d{1,3},?\s*\d{1,3}(,?\s*\d?\.?\d*)?\))/gi;
  const rgbMatch = rawPalette.match(rgbPattern);

  if (rgbMatch) {
    rgbMatch.forEach((rgbRaw) => {
      const rgbChannels = parseRgb(rgbRaw);
      const hex = rgbToHex(rgbChannels);

      addParsedColor(hex, rgbChannels, parsedPalette);
    });
  }

  return parsedPalette;
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

function parseRgb(rgbRaw) {
  const channelPattern = /(\d{1,3})/gi;
  const channelMatch = rgbRaw.match(channelPattern);

  if (channelMatch) {
    return [channelMatch[0], channelMatch[1], channelMatch[2]];
  }
}

function rgbToHex(rgbChannels) {
  let hex = "";

  rgbChannels.forEach((rgbChannel) => {
    let hexChannel = Number(rgbChannel).toString(16);

    if (hexChannel.length === 1) {
      hexChannel = "0" + hexChannel;
    }

    hex += hexChannel;
  });

  return hex;
}

function addParsedColor(hex, rgbChannels, parsedPalette) {
  const newColorValue = {
    hex: hex,
    rgb: rgbChannels
  };
  parsedPalette.push(newColorValue);
}

// The quadratic formula is used to solve for "threshold luminance" i.e. the luminance which has equal contrast with black or white.
const thresholdLuminance = (-0.1 + Math.sqrt(0.21)) / 2;

export function getPaletteData(parsedPalette) {
  const paletteData = [];

  parsedPalette.forEach((color) => {
    const luminance = getLuminance(color.rgb);
    const grayscaleEquivalent = getGrayscaleEquivalent(color.rgb);
    const theme = luminance >= thresholdLuminance ? "light" : "dark";

    const colorData = {
      hex: color.hex,
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

function getGrayscaleEquivalent(rgb) {
  const rgbGrayEquivalent = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];

  let singleChannelHex = Math.round(rgbGrayEquivalent).toString(16);
  if (singleChannelHex.length === 1) {
    singleChannelHex = "0" + singleChannelHex;
  }
  return singleChannelHex.repeat(3);
}
