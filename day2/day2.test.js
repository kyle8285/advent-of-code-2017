const fs           = require('fs');
const expect       = require('chai').expect;
const { checksum } = require('./day2');

const exampleText  = fs.readFileSync('./example.txt', 'utf8');
const testText     = fs.readFileSync('./input.txt', 'utf8');
const randomString = '1 1 3\n3 4 8\n1 2  2\n\n';

describe('day2', () => {
  it('part one: should perform the checksum', () => {
    expect(checksum(exampleText)).to.equal(18);
    expect(checksum(testText)).to.equal(41887);
    expect(checksum(randomString)).to.equal(8);
  });
});
