export function parseRawPalette(rawPalette) {
  const parsedPalette = [];
  const maxColors = 20;

  if (!rawPalette) return parsedPalette;

  const hexPattern = /([a-f\d]{6})/gi;
  const hexMatch = rawPalette.match(hexPattern);

  if (hexMatch) {
    for (const hexRaw of hexMatch) {
      if (parsedPalette.length >= maxColors) break;

      const rgbChannels = hexToRgb(hexRaw);
      const hex = hexRaw.toLowerCase();

      addParsedColor(hex, rgbChannels, parsedPalette);
    }
  }

  const rgbPattern = /(rgba?\(\d{1,3},?\s*\d{1,3},?\s*\d{1,3}(,?\s*\d?\.?\d*)?\))/gi;
  const rgbMatch = rawPalette.match(rgbPattern);

  if (rgbMatch) {
    for (const rgbRaw of rgbMatch) {
      if (parsedPalette.length >= maxColors) break;

      const rgbChannels = parseChannels(rgbRaw);
      const checkedRgbChannels = checkRgbChannels(rgbChannels);
      const hex = rgbToHex(checkedRgbChannels);

      addParsedColor(hex, checkedRgbChannels, parsedPalette);
    }
  }

  const hslPattern = /(hsla?\(\d{1,3}(deg)?,?\s*\d{1,3}%,?\s*\d{1,3}%,?\s*(,?\s*\d?\.?\d*)?\))/gi;
  const hslMatch = rawPalette.match(hslPattern);

  if (hslMatch) {
    for (const hslRaw of hslMatch) {
      if (parsedPalette.length >= maxColors) break;

      const hslChannels = parseChannels(hslRaw);
      const checkedHslChannels = checkHslChannels(hslChannels);
      const rgbChannels = hslToRgb(checkedHslChannels);
      const hex = rgbToHex(rgbChannels);

      addParsedColor(hex, rgbChannels, parsedPalette);
    }
  }

  return parsedPalette;
}

function parseChannels(channelsRaw) {
  const channelPattern = /(\d{1,3})/gi;
  const channelMatch = channelsRaw.match(channelPattern);

  if (channelMatch) {
    return [channelMatch[0], channelMatch[1], channelMatch[2]];
  }
}

function checkRgbChannels(rgbChannels) {
  if (rgbChannels.some((channel) => channel > 255)) {
    const correctedRgbChannels = rgbChannels.map((channel) =>
      channel > 255 ? 255 : channel
    );
    return correctedRgbChannels;
  } else {
    return rgbChannels;
  }
}

function checkHslChannels(hslChannels) {
  if (hslChannels[0] > 360 || hslChannels[1] > 100 || hslChannels[2] > 100) {
    const correctedHslChannels = hslChannels.map((channel, index) => {
      let max = index === 0 ? 360 : 100;
      return channel > max ? max : channel;
    });
    return correctedHslChannels;
  } else {
    return hslChannels;
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

function hslToRgb(hslChannels) {
  // Formula from: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  const h = hslChannels[0];
  const s = hslChannels[1] / 100;
  const l = hslChannels[2] / 100;

  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) =>
    Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));

  return [f(0), f(8), f(4)];
}

function addParsedColor(hex, rgbChannels, parsedPalette) {
  const newColorValue = {
    hex: hex,
    rgb: rgbChannels
  };

  const isDuplicate = parsedPalette.some(
    (color) => color.hex === newColorValue.hex
  );

  if (!isDuplicate) {
    parsedPalette.push(newColorValue);
  }
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

export function setInputText(newInputText) {
  const inputTextArea = document.getElementById("palette-input");

  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(inputTextArea, newInputText);

  inputTextArea.dispatchEvent(new Event("change", { bubbles: true }));
}
