"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Parts = /** @class */ (function () {
    function Parts(spec) {
        this.specification = spec;
    }
    Parts.prototype.getSpecification = function () {
        return this.specification;
    };
    return Parts;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW.prototype.getEngine = function () {
        return new Parts("BMW Engine");
    };
    BMW.prototype.getBody = function () {
        return new Parts("BMW Body");
    };
    BMW.prototype.getWheels = function () {
        return new Parts("BMW Wheels");
    };
    BMW.prototype.getMirrors = function () {
        return new Parts("BMW Mirros");
    };
    return BMW;
}(Car));
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.getEngine = function () {
        return new Parts("Tata Engine");
    };
    Tata.prototype.getBody = function () {
        return new Parts("Tata Body");
    };
    Tata.prototype.getWheels = function () {
        return new Parts("Tata Wheels");
    };
    Tata.prototype.getMirrors = function () {
        return new Parts("Tata Mirrors");
    };
    return Tata;
}(Car));
var Benz = /** @class */ (function (_super) {
    __extends(Benz, _super);
    function Benz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Benz.prototype.getEngine = function () {
        return new Parts("Benz Engine");
    };
    Benz.prototype.getBody = function () {
        return new Parts("Benz Body");
    };
    Benz.prototype.getWheels = function () {
        return new Parts("Benz Wheels");
    };
    Benz.prototype.getMirrors = function () {
        return new Parts("Benz Mirrors");
    };
    return Benz;
}(Car));
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.getCar = function (brand) {
        if (brand.match("benz"))
            return new Benz();
        else if (brand.match("tata"))
            return new Tata();
        return new BMW();
    };
    return CarFactory;
}());
var myBenzCar = CarFactory.getCar("benz");
console.log(myBenzCar.getEngine().getSpecification());
var myBMWCar = CarFactory.getCar("bmw");
console.log(myBMWCar.getBody().getSpecification());
