const expect = require('chai').expect;
const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8');
const { jumps } = require('./day5');

describe('day5', () => {
  it('part one: should calculate how many steps to reach the exit', () => {
    expect(jumps('0\n3\n0\n1\n-3')).to.equal(5);
    expect(jumps(input)).to.equal(364539);
  });
});
