const expect = require('chai').expect;
const fs     = require('fs');
const input  = fs.readFileSync('./input.txt', 'utf8');
const { withoutRepeats, withoutAnagrams } = require('./day4');

describe('day4', () => {
  it('part one: should calculate how many valid passphrases without repeated words', () => {
    expect(withoutRepeats('aa bb cc')).to.equal(1);
    expect(withoutRepeats('aa bb cc aa')).to.equal(0);
    expect(withoutRepeats('aa bb cc\naa bb dd')).to.equal(2);
    expect(withoutRepeats('aa bb cc aa\naa bb dd')).to.equal(1);
    expect(withoutRepeats(input)).to.equal(386);
  });

  it('part two: should calculate how many valid passphrases without anagrams', () => {
    expect(withoutAnagrams('abcde fghij')).to.equal(1);
    expect(withoutAnagrams('abcde xyz ecdab')).to.equal(0);
    expect(withoutAnagrams('a ab abc abd abf abj')).to.equal(1);
    expect(withoutAnagrams('iiii oiii ooii oooi oooo')).to.equal(1);
    expect(withoutAnagrams('oiii ioii iioi iiio')).to.equal(0);
    expect(withoutAnagrams(input)).to.equal(208);
  });
});
