class Player{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        alert(`Hey ${this.name}`);
    }
    sleep(){
        alert(`Hey ${this.name} is sleep`);
    }
    walk(){
        alert(`Hey ${this.name} can walk`);
    }
}


class Player extends Persons{
    constructor(sportname,name,age,gender){
        super(name,age,gender)
        this.sportname = sportname;
    }
    play(){
        alert(`${this.name} can play`);
    }
}

class Teacher extends Persons{
    constructor(institueName,name,age,gender){
        super(name,age,gender)
        this.institueName = institueName;
    }
    teach(){
        alert(`${this.name} can teach`);
    }
}

class Artist extends Persons{
    constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind = kind;
    }
    createArt(){
        alert(`Hey ${this.name} can createArt`)
    }
}

class Cricketer{
    constructor(name,age,gender,sportname,teamName){
        super(name,age,gender,sportname)
        this.teamName = teamName;
    }
    playCricket(){
        alert(`Hey ${this.name} can play`);
    }
}

let dhoni = new Cricketer();

let Teacher = new Teacher();

