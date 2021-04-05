export function getFilteredColorPairs(colorPairs) {
  const sortedColorPairs = getSortedColorPairs(colorPairs);

  const aa = sortedColorPairs.filter((pair) => "aa" in pair);
  const aaa = aa.filter((pair) => "aaa" in pair);

  const aaColorblind = aa.filter((pair) => pair.colorblindSafe);
  const aaaColorblind = aaa.filter((pair) => pair.colorblindSafe);

  return [aa, aaa, aaColorblind, aaaColorblind];
}

function getSortedColorPairs(colorPairs) {
  const sortedColorPairs = [];

  Object.entries(colorPairs).forEach((pairing) => {
    sortedColorPairs.push(Object.assign({}, { hex: pairing[0] }, pairing[1]));
  });

  sortedColorPairs.sort((a, b) => {
    return b.contrast - a.contrast;
  });

  return sortedColorPairs;
}
