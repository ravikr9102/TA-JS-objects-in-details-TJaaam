console.log(this.document === document); // True

// ------------

console.log(this === window); // True

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Window

// // ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); // false

// // ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); // Simple function call , true

// // ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); // Anonymous function invocation , true


// // ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); // {someMethod: ƒ}

// // ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // 
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Name: John Reed

// // ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Simple function call , false 
let fun1 = user.foo1;
fun1(); // true
user.foo1(); // false

// // ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // 81

var retrieveX = obj.getX;
retrieveX(); // 9

var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81

// // ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person3 = new Person('John', 'Reed');
person3.displayName(); // Name: John Reed
let person4 = new Person('Paul', 'Adams');
person4.displayName(); // Name: Paul Adams

person.displayName.call(person4); // Name: Paul Adams

// // ------------

const a = {
  a: 'a',
};
const obje = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obje.getThis3 = obje.getThis.bind(obje);
obje.getThis4 = obje.getThis2.bind(obje);

// Window
obje.getThis();

// Window
obje.getThis.call(a);

// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
obje.getThis2();

// {a: 'a'}
obje.getThis2.call(a);

// Window
obje.getThis3();

// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
obje.getThis4();

// // -------------

let person5 = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person5.greet(); // hello, jay

let greet = person5.greet;
greet(); // hello

// -------------

let name = 'Jay Global';
let person6 = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person6.details.print()); // Jay Details
console.log(person6.print()); // Jay Person

let name1 = person6.print;
let name2 = person6.details;

console.log(name1()); // undefined
console.log(name2.print()); // Jay Details

// // --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()(); // Error

// // -----------

// let object = {
//   data: [1, 2, 3],
//   dataDouble: [1, 2, 3],
//   double: function () {
//     console.log('this inside of outerFn double()');
//     console.log(this);
//     return this.data.map(function (item) {
//       console.log(this); // 
//       return item * 2;
//     });
//   },
//   doubleArrow: function () {
//     console.log('this inside of outerFn doubleArrow()');
//     console.log(this);
//     return this.dataDouble.map((item) => {
//       console.log(this); // Output ???
//       return item * 2;
//     });
//   },
// };

// object.double();
// object.doubleArrow();

// // --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // Bob

// // -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2

// // --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // Hey, mom just called.

// // -----------------

const call2 = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call2.says;

newCall(); // Hey, undefined just called.

// //  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call3 = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall2 = call3.anotherCaller;

newCall(); // Hey, undefined just called.
