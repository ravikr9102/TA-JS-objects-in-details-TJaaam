// Using function to create object

function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };
  user.changeName = function (newName) {
    user.name = newName;
    return user.name;
  };
  user.incrementProject = function () {
    user.noOfProjects = +1;
    return user.noOfProjects;
  };
  user.decrementProject = function () {
    user.noOfProjects = -1;
    return user.noOfProjects;
  };
  return user;
}

// Object.create (prototypal pattern)

let userMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  incrementProject: function () {
    this.noOfProjects = +1;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects = -1;
    return this.noOfProjects;
  },
};

function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;

  return user;
}


//  Pseudoclassical Way

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  incrementProject: function () {
    this.noOfProjects = +1;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects = -1;
    return this.noOfProjects;
  },
};


//   Using Class

class CreateUser {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  incrementProject() {
    this.noOfProjects = +1;
    return this.noOfProjects;
  }
  decrementProject() {
    this.noOfProjects = -1;
    return this.noOfProjects;
  }
}
