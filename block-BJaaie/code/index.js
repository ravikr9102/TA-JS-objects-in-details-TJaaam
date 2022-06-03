// Pseudoclassical Pattern

// #### Animal

// Properties

function CreateAnimal (location,numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

// Methods

CreateAnimal.prototype = {
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

let animal = new CreateAnimal("dharamsala", 6);

//  ### Dog

// Properties

function CreateDog (location,numberOfLegs,name,color){
    CreateAnimal.call(this,location,numberOfLegs)
    this.name = name;
    this.color = color;
}


// Methods

CreateDog.prototype = {
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

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

let dog = new CreateDog("dharamsal",7,"Dodo", "Yellow");

// #### Cat

// Properties

function CreateCat (location,numberOfLegs,name,colorOfEyes){
    CreateAnimal.call(this,location,numberOfLegs)
    this.name = name;
    this.color = colorOfEyes;
}


// Methods

CreateCat.prototype = {
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

Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

let cat = new CreateCat("dharamsal",7,"Meow", "brown");



// Class Pattern

class Animal{
    constructor(location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat!`);
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

let anim = new Animal("Bihar", 7);

// Dog
class Dog extends Animal {
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs);
        this.name = name;
        this.color = color;
        
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
     }
     changeName(newName){
         this.name = newName;
         return this.name;
     }
     changeColor(newColor){
         this.color = newColor;
         return this.color;
     }
     summary(){
         return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
     }
}

let doggy = new Dog("Bihar", 9,"pochi", "red");

// Cat
class Cat extends Animal {
    constructor(location,numberOfLegs,name,colorOfEyes){
        super(location,numberOfLegs);
        this.name = name;
        this.color = colorOfEyes;
        
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
     }
     changeName(newName){
         this.name = newName;
         return this.name;
     }
     changeColorOfEyes(newColor){
         this.color = newColor;
         return this.color;
     }
     summary(){
         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
         ;
     }
}

let pussy = new Cat("Bihar", 9,"pochi", "red");