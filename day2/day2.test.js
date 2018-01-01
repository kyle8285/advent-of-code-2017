const fs     = require('fs');
const expect = require('chai').expect;
const {
  checksum,
  checksumEvenlyDivisible
} = require('./day2');

const exampleText  = fs.readFileSync('./example.txt', 'utf8');
const exampleText2  = fs.readFileSync('./example2.txt', 'utf8');
const randomString = '1 1 3\n3 4 8\n1 2  2\n\n';
const randomString2 = '5 3 6 8\n4 5 6 10\n2 7 9 3';
const testText     = fs.readFileSync('./input.txt', 'utf8');

describe('day2', () => {
  it('part one: should perform the checksum', () => {
    expect(checksum(exampleText)).to.equal(18);
    expect(checksum(randomString)).to.equal(8);
    expect(checksum(testText)).to.equal(41887);
  });
});

describe('day2', () => {
  it('part two: should sum evenly divisible values', () => {
    expect(checksumEvenlyDivisible(exampleText2)).to.equal(9);
    expect(checksumEvenlyDivisible(randomString2)).to.equal(7);
    expect(checksumEvenlyDivisible(testText)).to.equal(226);
  });
});
