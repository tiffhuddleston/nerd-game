// Objects - Quiz itself, changing questions
// Actions- show questions, change questions, keep score, register selections, count questions(?) show final score
// Create variables for html elements
// variable for score
// let score = 0

// // function to build quiz score, questions, question number
// function trivia() {

// }

// function buildQuestions() {

// }

// function buildTrivia() {
//     if(){

//     } else {

//     }
// }
// Function to show results
// Display the questions
// Show results on click, submit the answer and return the number correct out of total number

// Change to oop, can I use function and delete a line of code here?
class TriviaQuestion {
  constructor(question, options, correctAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
}
TriviaQuestion.prototype.correctAnswer = function(selection) {
  this.correctAnswer === selection;
};

const questions = [
  new TriviaQuestion(
    'What planet is Dr. Who from?',
    ['Jupiter', 'Galifrey', 'Time Lord Home World', 'Titan 1'],
    'Galifrey'
  ),
  new TriviaQuestion(),
  new TriviaQuestion()
];

console.log(question1);

// Create quiz questions- array of object literals
// const TriviaQuestions = [
//     {
//         question: 'What planet is Dr. Who from?',
//         options: {
//             a: 'Jupiter',
//             b: 'Galifrey',
//             c: 'Time Lord Home World',
//         },
//         correctAnswer: 'b'
//     }
//     {
//         question: '',
//         options: {
//             a: '',
//             b: '',
//             c: '',
//         },
//         correctAnswer: 'c'
//     }
//     {
//         question: '',
//         options: {
//             a: '',
//             b: '',
//             c: '',
//         },
//         correctAnswer: 'c'
//     }
//         {
//         question: '',
//         options: {
//             a: '',
//             b: '',
//             c: '',
//         },
//         correctAnswer: 'c'
//     }
// ]

// way to select an answer- button? checkbox? circle(radio)? or input letter in a form?

// loop to iterate through question array for loop
// for (i = 0; i < TriviaQuestions.length; i++) {
//     let response = 'click'
//     if (response == correct answer) {
//         return 'correct'
//     } else {
//         return 'wrong'
//     }
// }

// buttons-
