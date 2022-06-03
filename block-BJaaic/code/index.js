// #### Animal

// Methods

let animalMethods = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat!`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    },
};

// Properties:

function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}

// Dog 

// Methods

let dogMethods = {
    bark: function(){
       alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
};

Object.setPrototypeOf(dogMethods, animalMethods);

// properties

function createDog(location,numberOfLegs,name,color){
    let dog = createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(animal,dogMethods)
    dog.name = name;
    dog.color = color;

    return dog;
}


// Cat

// Methods

let catMethods = {
    meow: function(){
       alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
        ;
    },
};

Object.setPrototypeOf(catMethods, animalMethods);

// properties

function createCat(location,numberOfLegs,name,colorOfEyes){
    let cat = createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(animal,catMethods)
    cat.name = name;
    cat.color = colorOfEyes;

    return cat;
}