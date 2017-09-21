"use strict";
/* imports? */
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function () {
        var aSummands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            aSummands[_i] = arguments[_i];
        }
        if (aSummands.length > 1) {
            var tResult_1 = 0;
            aSummands.forEach(function (aSummand, aIndex) {
                tResult_1 += aSummand;
            });
            return tResult_1;
        }
        else {
            throw new ReferenceError;
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
