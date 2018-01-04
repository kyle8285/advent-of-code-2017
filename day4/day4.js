exports.withoutRepeats = (phrases) => {
  // helpers
  const unique = arr => arr.reduce((acc, val) => acc.includes(val) ? acc : (acc.push(val) && acc), []);

  return phrases
    .trim()
    .split(/\n/)
    .reduce((acc, phrase) => {
      phrase.split(/\s+/).length === unique(phrase.split(/\s+/)).length ? acc += 1 : acc, 0
      return acc;
    }, 0)
}

exports.withoutAnagrams = (phrases) => {
  // helpers
  const unique = arr => arr.reduce((acc, val) => acc.includes(val) ? acc : (acc.push(val) && acc), []);
  const hasAnagram = arr => unique(arr.map(str => str.split('').sort().join(''))).length !== arr.length;

  return phrases
    .trim()
    .split(/\n/)
    .reduce((acc, phrase) => {
      hasAnagram(phrase.split(/\s+/)) ? acc : acc++;
      return acc;
    }, 0)
}
