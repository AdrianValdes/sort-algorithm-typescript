"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        var _this = this;
        this.data = data;
        this.compare = function (leftIndex, rightIndex) {
            return _this.data[leftIndex] > _this.data[rightIndex];
        };
        this.swap = function (leftIndex, rightIndex) {
            var leftHand = _this.data[leftIndex];
            _this.data[leftIndex] = _this.data[rightIndex];
            _this.data[rightIndex] = leftHand;
        };
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
