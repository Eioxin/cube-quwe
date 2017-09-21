"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./../src/Calculator");
var chai_1 = require("chai");
describe('Calculator Test-Suite', function () {
    it('should throw exception when only one summand is provided', function () {
        var tCalc = new Calculator_1.Calculator();
        chai_1.expect(function () { tCalc.add(5); }).to.throw(ReferenceError);
    });
    it('should add two numbers', function () {
        var tCalc = new Calculator_1.Calculator();
        var tResult = tCalc.add(5, 3);
        chai_1.expect(tResult).be.equal(8);
    });
    it('should add three numbers', function () {
        var tCalc = new Calculator_1.Calculator();
        var tResult = tCalc.add(5, 3, 8);
        chai_1.expect(tResult).to.be.equal(16);
    });
    // it('should substracat two numbers' () => {
    // });
});
