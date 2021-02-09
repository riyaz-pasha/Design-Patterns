export { }

interface Pet {
    sound(): string
}

class Dog implements Pet {
    constructor() { }
    sound() {
        return "Bow"
    };
}

class Cat implements Pet {
    constructor() { }
    sound() {
        return "Meow"
    };
}

class PetFactory {
    constructor() { }
    getPet(petType) {
        if (petType === "Dog") return new Dog();
        return new Cat();
    }
}

const petFactory = new PetFactory();

const myDog = petFactory.getPet("Dog");
console.log(myDog.sound());

const myCat = petFactory.getPet("Cat");
console.log(myCat.sound());