class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    makeSound() {
        console.log(`${this.species}`);
        console.log(`${this.sounds}`);