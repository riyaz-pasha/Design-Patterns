"use strict";
exports.__esModule = true;
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.sound = function () {
        return "Bow";
    };
    ;
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sound = function () {
        return "Meow";
    };
    ;
    return Cat;
}());
var PetFactory = /** @class */ (function () {
    function PetFactory() {
    }
    PetFactory.prototype.getPet = function (petType) {
        if (petType === "Dog")
            return new Dog();
        return new Cat();
    };
    return PetFactory;
}());
var petFactory = new PetFactory();
var myDog = petFactory.getPet("Dog");
console.log(myDog.sound());
var myCat = petFactory.getPet("Cat");
console.log(myCat.sound());
