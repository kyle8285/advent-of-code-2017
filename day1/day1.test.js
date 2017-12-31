const expect = require('chai').expect;
const {captchaOne, captchaTwo} = require('./day1');

describe('day1', () => {
  it('part one: should solve the captcha', () => {
    expect(captchaOne(1122)).to.equal(3);
    expect(captchaOne(1111)).to.equal(4);
    expect(captchaOne(1234)).to.equal(0);
    expect(captchaOne(91212129)).to.equal(9);
  });

  it('part two: should solve the captcha', () => {
    expect(captchaTwo(1212)).to.equal(6);
    expect(captchaTwo(1221)).to.equal(0);
    expect(captchaTwo(123425)).to.equal(4);
    expect(captchaTwo(123123)).to.equal(12);
    expect(captchaTwo(12131415)).to.equal(4);
  });
});
