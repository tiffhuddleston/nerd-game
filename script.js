// Create variables for html elements
// variable for score
let score = 0

// function to build quiz
function buildQuiz() {

}

// Function to show results
// Display the questions
// Show results on click, submit the answer and return the number correct out of total number

// Create quiz questions- array of object literals
const quizQuestions = [
    {
        qeustion: 'What planet is Dr. Who from?',
        answers: {
            a: 'Jupiter',
            b: 'Galifrey',
            c: 'Time Lord Home World',
        },
        correctAnswer: 'b'
    }
        {
        qeustion: '',
        answers: {
            a: '',
            b: '',
            c: '',
        },
        correctAnswer: 'c'
    }
        {
        qeustion: '',
        answers: {
            a: '',
            b: '',
            c: '',
        },
        correctAnswer: 'c'
    }
]

// way to select an answer- button? checkbox? circle(radio)? or input letter in a form?

// loop to iterate through question array for loop
for (i = 0; i < quizQuestions.length; i++) {
    let response = 'click'
    if (response == correct answer) {
        return 'correct'
    } else {
        return 'wrong'
    }
}