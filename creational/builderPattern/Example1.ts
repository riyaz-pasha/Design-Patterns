export { }

interface Packing {
    pack(): string
}

interface Item {
    name(): string
    packing(): Packing
    price(): number
}

class Wrapper implements Packing {
    constructor() { }
    pack(): string {
        return "wrapper"
    }
}

class Bottle implements Packing {
    constructor() { }
    pack(): string {
        return "Bottle"
    }
}

abstract class Burger implements Item {
    abstract name(): string
    abstract price(): number
    packing(): Packing {
        return new Wrapper();
    }
}

abstract class CoolDrink implements Item {
    abstract name(): string
    abstract price(): number
    packing(): Packing {
        return new Bottle();
    }
}

class VegBurger extends Burger {
    name(): string {
        return "Veg Burger";
    }
    price(): number {
        return 100.00;
    }
}

class ChickenBurger extends Burger {
    name(): string {
        return "Chicken Burger";
    }
    price(): number {
        return 150.00;
    }
}

class ThumbsUp extends CoolDrink {
    name(): string {
        return "ThumbsUp.";
    }
    price(): number {
        return 20.00;
    }
}

class Pepsi extends CoolDrink {
    name(): string {
        return "Pepsi";
    }
    price(): number {
        return 15.00;
    }
}

class Meal {
    private items: Item[];
    constructor() {
        this.items = []
    }
    addItem(item: Item) {
        this.items.push(item);
    }
    cost() {
        return this.items.reduce((totalCost, eachItem: Item) => totalCost + eachItem.price(), 0);
    }
    showItems() {
        this.items.forEach((item: Item) => {
            console.log("\nItem    : ", item.name());
            console.log("Packing : ", item.packing().pack());
            console.log("Price   : ", item.price());
        })
    }
}

class MealBuilder {
    static prepareVegMeal(): Meal {
        const vegMeal: Meal = new Meal();
        vegMeal.addItem(new VegBurger());
        vegMeal.addItem(new Pepsi());
        return vegMeal;
    }

    static prepareNonVegMeal(): Meal {
        const nonVegMeal: Meal = new Meal();
        nonVegMeal.addItem(new ChickenBurger());
        nonVegMeal.addItem(new ThumbsUp());
        return nonVegMeal;
    }
}


console.log("Order 1")
const vegMeal = MealBuilder.prepareVegMeal();
vegMeal.showItems();
console.log("--------------------------------------")
console.log("Veg Meal Cost : ", vegMeal.cost());

console.log("\nOrder 2")
const nonVegMeal = MealBuilder.prepareNonVegMeal();
nonVegMeal.showItems();
console.log("--------------------------------------")
console.log("Non Veg Meal Cost : ", nonVegMeal.cost());