export { }

class Parts {
    private specification: string;
    constructor(spec: string) {
        this.specification = spec;
    }

    getSpecification() {
        return this.specification;
    }
}

abstract class Car {
    abstract getEngine(): Parts;
    abstract getBody(): Parts;
    abstract getWheels(): Parts;
    abstract getMirrors(): Parts;
}

class BMW extends Car {
    getEngine(): Parts {
        return new Parts("BMW Engine");
    }
    getBody(): Parts {
        return new Parts("BMW Body");
    }
    getWheels(): Parts {
        return new Parts("BMW Wheels");
    }
    getMirrors(): Parts {
        return new Parts("BMW Mirros");
    }
}

class Tata extends Car {
    getEngine(): Parts {
        return new Parts("Tata Engine");
    }
    getBody(): Parts {
        return new Parts("Tata Body");
    }
    getWheels(): Parts {
        return new Parts("Tata Wheels");
    }
    getMirrors(): Parts {
        return new Parts("Tata Mirrors");
    }
}

class Benz extends Car {
    getEngine(): Parts {
        return new Parts("Benz Engine");
    }
    getBody(): Parts {
        return new Parts("Benz Body");
    }
    getWheels(): Parts {
        return new Parts("Benz Wheels");
    }
    getMirrors(): Parts {
        return new Parts("Benz Mirrors");
    }
}

class CarFactory {
    static getCar(brand: string): Car {
        if (brand.match("benz")) return new Benz();
        else if (brand.match("tata")) return new Tata();
        return new BMW();
    }
}

const myBenzCar: Car = CarFactory.getCar("benz")
console.log(myBenzCar.getEngine().getSpecification())

const myBMWCar: Car = CarFactory.getCar("bmw")
console.log(myBMWCar.getBody().getSpecification())
