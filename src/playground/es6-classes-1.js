// JMJ

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name}! ${this.name} is ${this.age} years old.`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGretting() {
        let gretting = super.getGretting();

        if(this.homeLocation) {
            gretting += ` I'm visiting from ${this.homeLocation}.`
        }
        return gretting;
    }
}



const hailMary = new Traveler('Mary of Nazareth', 15, 'Nazareth');
console.log(hailMary.getGretting());