class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    makeSound() {
        console.log(`${this.species}`);
        console.log(`${this.sounds}`);
    }
}
class Dog extends Animal {
    constructor(species, sounds, color) {
        super(species, sounds);
        this.color = color;
    }
    makesound() {
        console.log(`${this.color} ${this.species} makes a sound: ${this.sounds`);
    }
}

const dog = new Dog('dog', 'bark', 'brown');

myDog.makeSound();