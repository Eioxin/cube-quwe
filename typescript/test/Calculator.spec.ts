import { Calculator } from './../src/Calculator';
import { expect } from 'chai';

describe('Calculator Test-Suite', () => {

  it('should throw exception when only one summand is provided', () => {
    const tCalc :Calculator = new Calculator();

    expect(() => { tCalc.add(5); }).to.throw(ReferenceError);
  });

  it('should add two numbers', () => {
    const tCalc :Calculator = new Calculator();
    const tResult :number = tCalc.add(5, 3);

    expect(tResult).be.equal(8);
  });

  it('should add three numbers', () => {
    const tCalc :Calculator = new Calculator();
    const tResult :number = tCalc.add(5, 3, 8);

    expect(tResult).to.be.equal(16);
  });

  // it('should substracat two numbers' () => {

  // });

});
