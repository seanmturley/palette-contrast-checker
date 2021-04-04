export function getColorPairs(pairingData) {
  const sortedPairingData = getSortedPairingData(pairingData);

  const aa = sortedPairingData.filter((pair) => "aa" in pair);
  const aaa = aa.filter((pair) => "aaa" in pair);

  const aaColorblind = aa.filter((pair) => pair.colorblindSafe);
  const aaaColorblind = aaa.filter((pair) => pair.colorblindSafe);

  return [aa, aaa, aaColorblind, aaaColorblind];
}

function getSortedPairingData(pairingData) {
  const pairingDataArray = [];

  Object.entries(pairingData).forEach((pairing) => {
    pairingDataArray.push(Object.assign({}, { hex: pairing[0] }, pairing[1]));
  });

  pairingDataArray.sort((a, b) => {
    return b.contrast - a.contrast;
  });

  return pairingDataArray;
}
