"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        var _this = this;
        this.data = data;
        this.compare = function (leftIndex, rightIndex) {
            return _this.data[leftIndex].localeCompare(_this.data[rightIndex]) > 0
                ? true
                : false;
        };
        this.swap = function (leftIndex, rightIndex) {
            var characters = _this.data.split('');
            var leftHand = characters[leftIndex];
            characters[leftIndex] = characters[rightIndex];
            characters[rightIndex] = leftHand;
            _this.data = characters.join('');
        };
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
