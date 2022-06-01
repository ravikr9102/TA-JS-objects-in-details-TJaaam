// Prototypal pattern and Object.create

let questionMethods = {
  isAnswerCorrect: function (index) {
    if (index === this.correctAnswerIndex) {
      return true;
    }
    return false;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

function createQuestion(title, options, correctAnswerIndex) {
  let question = Object.create(questionMethods);
  question.title = title;
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  return question;
}


// Test
let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );


  // Pseudoclassical Pattern

function CreateQuestion(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex;
}

createQuestion.prototype = {
    isAnswerCorrect: function (index) {
        if (index === this.correctAnswerIndex) {
          return true;
        }
        return false;
      },
      getCorrectAnswer: function () {
        return this.options[this.correctAnswerIndex];
      },
};

// Test 

let secondQuestion = new createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

  // Create using class pattern

  class CreateQuestion{
      constructor(title,options,correctAnswerIndex){
          this.title;
          this.options;
          this.correctAnswerIndex;
      }
      isAnswerCorrect(index) {
        if (index === this.correctAnswerIndex) {
          return true;
        }
        return false;
      }
      getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
      }
  }

  // Test
 let secondQuestion2 = new createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );