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
    constructor(species, sound, color) {
      super(species, sound);
      this.color = color;
    }