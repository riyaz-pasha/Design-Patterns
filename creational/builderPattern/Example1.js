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
var Wrapper = /** @class */ (function () {
    function Wrapper() {
    }
    Wrapper.prototype.pack = function () {
        return "wrapper";
    };
    return Wrapper;
}());
var Bottle = /** @class */ (function () {
    function Bottle() {
    }
    Bottle.prototype.pack = function () {
        return "Bottle";
    };
    return Bottle;
}());
var Burger = /** @class */ (function () {
    function Burger() {
    }
    Burger.prototype.packing = function () {
        return new Wrapper();
    };
    return Burger;
}());
var CoolDrink = /** @class */ (function () {
    function CoolDrink() {
    }
    CoolDrink.prototype.packing = function () {
        return new Bottle();
    };
    return CoolDrink;
}());
var VegBurger = /** @class */ (function (_super) {
    __extends(VegBurger, _super);
    function VegBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VegBurger.prototype.name = function () {
        return "Veg Burger";
    };
    VegBurger.prototype.price = function () {
        return 100.00;
    };
    return VegBurger;
}(Burger));
var ChickenBurger = /** @class */ (function (_super) {
    __extends(ChickenBurger, _super);
    function ChickenBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChickenBurger.prototype.name = function () {
        return "Chicken Burger";
    };
    ChickenBurger.prototype.price = function () {
        return 150.00;
    };
    return ChickenBurger;
}(Burger));
var ThumbsUp = /** @class */ (function (_super) {
    __extends(ThumbsUp, _super);
    function ThumbsUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThumbsUp.prototype.name = function () {
        return "ThumbsUp.";
    };
    ThumbsUp.prototype.price = function () {
        return 20.00;
    };
    return ThumbsUp;
}(CoolDrink));
var Pepsi = /** @class */ (function (_super) {
    __extends(Pepsi, _super);
    function Pepsi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pepsi.prototype.name = function () {
        return "Pepsi";
    };
    Pepsi.prototype.price = function () {
        return 15.00;
    };
    return Pepsi;
}(CoolDrink));
var Meal = /** @class */ (function () {
    function Meal() {
        this.items = [];
    }
    Meal.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Meal.prototype.cost = function () {
        return this.items.reduce(function (totalCost, eachItem) { return totalCost + eachItem.price(); }, 0);
    };
    Meal.prototype.showItems = function () {
        this.items.forEach(function (item) {
            console.log("\nItem    : ", item.name());
            console.log("Packing : ", item.packing().pack());
            console.log("Price   : ", item.price());
        });
    };
    return Meal;
}());
var MealBuilder = /** @class */ (function () {
    function MealBuilder() {
    }
    MealBuilder.prepareVegMeal = function () {
        var vegMeal = new Meal();
        vegMeal.addItem(new VegBurger());
        vegMeal.addItem(new Pepsi());
        return vegMeal;
    };
    MealBuilder.prepareNonVegMeal = function () {
        var nonVegMeal = new Meal();
        nonVegMeal.addItem(new ChickenBurger());
        nonVegMeal.addItem(new ThumbsUp());
        return nonVegMeal;
    };
    return MealBuilder;
}());
console.log("Order 1");
var vegMeal = MealBuilder.prepareVegMeal();
vegMeal.showItems();
console.log("--------------------------------------");
console.log("Veg Meal Cost : ", vegMeal.cost());
console.log("\nOrder 2");
var nonVegMeal = MealBuilder.prepareNonVegMeal();
nonVegMeal.showItems();
console.log("--------------------------------------");
console.log("Non Veg Meal Cost : ", nonVegMeal.cost());
