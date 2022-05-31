// Without object

let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index){
    if(index === correctAnswerIndex){
        return true;
    } else{
        return false;
    }
}

function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

// Using object

let question = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        if(index === correctAnswerIndex){
            return true;
        } else{
            return false;
        }
    },
    getCorrectAnswer(){
        return options[correctAnswerIndex];
    }
}

// Use a function to create object

function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function (index){
        if(index === question.correctAnswerIndex){
            return true;
        } else{
            return false;
        }
    };
    question.getCorrectAnswer = function (){
        return question.options[question.correctAnswerIndex]
    }
    return question;
}

// using the this keyword  in the function

function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function (index){
        if(index === this.correctAnswerIndex){
            return true;
        } else{
            return false;
        }
    };
    question.getCorrectAnswer = function (){
        return this.options[this.correctAnswerIndex]
    }
    return question;
}

// Calling The function

let questionOne  = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let questionTwo = createQuestion(
    "What is the capital of himachal pradesh ",
    ['shimla','kangra','mandi'],
    1
);