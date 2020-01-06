// Create variables for html elements
// variable for score
let score = 0

// function to build quiz
function buildQuiz() {

}

// Function to show results
// Display the questions
// Show results on click, submit the answer and return the number correct out of total number


// Change to oop
class TriviaQuestions {
    constructor(question, options, correctAnswer) {
        this.question = question
        this.options = options
        this.correctAnswer = correctAnswer
    }
}
const questions =
    newTriviaQuestion('What planet is Dr. Who from?', ['Jupiter', 'Galifrey', 'Time Lord Home World', 'Titan 1'], 'Galifrey')

// Create quiz questions- array of object literals
const TriviaQuestions = [
    {
        question: 'What planet is Dr. Who from?',
        options: {
            a: 'Jupiter',
            b: 'Galifrey',
            c: 'Time Lord Home World',
        },
        correctAnswer: 'b'
    }
    {
        question: '',
        options: {
            a: '',
            b: '',
            c: '',
        },
        correctAnswer: 'c'
    }
    {
        question: '',
        options: {
            a: '',
            b: '',
            c: '',
        },
        correctAnswer: 'c'
    }
        {
        question: '',
        options: {
            a: '',
            b: '',
            c: '',
        },
        correctAnswer: 'c'
    }
]

// way to select an answer- button? checkbox? circle(radio)? or input letter in a form?

// loop to iterate through question array for loop
for (i = 0; i < TriviaQuestions.length; i++) {
    let response = 'click'
    if (response == correct answer) {
        return 'correct'
    } else {
        return 'wrong'
    }
}

// buttons- 