let questionHeading = document.getElementById('question_heading');
let beginQuizButton = document.getElementById('begin_quiz_btn');
let answerButton = document.getElementById('answer_btn');
let questionContainer = document.getElementById('question_title');
let answerContainer = document.getElementById('answer_radio_group');
let scoreLabel = document.getElementById('score_label');
let keepScore = document.getElementById('running_score');

// Build Questions
const allQuestions = [
  new TriviaQuestion(
    'What planet is Dr. Who originally from?',
    ['Jupiter', 'Galifrey', 'Time Lord Home World', 'Titan 1'],
    1
  ),
  new TriviaQuestion(
    'What is the magic word spoken to summon things in the world of Harry Potter?',
    ['Accio', 'Alohomora', 'Come here, dammit', 'Expelliarmus'],
    0
  ),
  new TriviaQuestion(
    'What is the name of the angel guide who helps and saves Lyra and will in Book 3 of the His Dark Materials trilogy?',
    ['Gabriel', 'Peter', 'Enoch', 'Balthamos'],
    3
  ),
  new TriviaQuestion(
    'What was the real name of Rorschach in the Watchmen graphic novel?',
    ['Jasper Davis', 'Alan Moore', 'Walter Kovacs'],
    2
  )
];

// Build question object
function TriviaQuestion(question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
}
// Set correct answer function for TriviaQuestion
TriviaQuestion.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

// Build Quiz Object
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
// Prototype function to get question div and submit answer button
Quiz.prototype.buildQuestion = function(index) {
  // Put questions and answers into quiz
  let insertQuestion = this.questions[index];
  questionContainer.innerHTML = insertQuestion.question;
  // Create radio button response
  let radioHtml = '';
  let optionIndex = 0;
  //   Got help on this logic and syntax from friend, gave radio input option to each possible answer and answer option text inserted as object literal
  insertQuestion.options.forEach(
    option => (
      (radioHtml += `
        <input 
            type='radio' 
            name='question'
            value=${optionIndex}>
            ${option}
        </input>
        <br>
    `),
      (optionIndex += 1)
    )
  );
  //   Answer options into div with radio response
  answerContainer.innerHTML = radioHtml;
};

// Quiz function to move through questions
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

// Quiz function to end quiz when all questions have been answered
Quiz.prototype.isOver = function() {
  return this.questions.length === this.questionIndex;
};
let restart = false;

// Quiz function to tally correct answers compared to # of questions and keep track in running_score div to display progress
Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
    keepScore.innerHTML = `${this.score}/${allQuestions.length}`;
  }
  //   Ends game, shows score, unhides button to begin quiz if player wants to restart
  this.questionIndex++;
  if (this.isOver()) {
    scoreLabel.innerHTML = 'Final Score';
    beginQuizButton.innerHTML = 'Try Again?';
    beginQuizButton.hidden = false;
    questionHeading.hidden = true;
    questionContainer.hidden = true;
    answerContainer.hidden = true;
    answerButton.hidden = true;
    theQuiz.questionIndex = 0;
    this.score = 0;
    restart = true;
    return;
  }
  this.buildQuestion(this.questionIndex);
};

let theQuiz = new Quiz(allQuestions);
// Build quiz itself- populate the questions
function buildQuiz() {
  theQuiz.buildQuestion(0);
  // Shows answer button, questions, choice options, hides begin quiz button during gameplay
  answerButton.hidden = false;
  questionContainer.hidden = false;
  answerContainer.hidden = false;
  beginQuizButton.hidden = true;
  // Shows initial score
  keepScore.innerHTML = `0/${allQuestions.length}`;
  if (restart === true) {
    scoreLabel.innerHTML = 'Score';
    restart = false;
  }
}

// Checks for correct answer,
function processAnswer() {
  let radios = answerContainer.getElementsByTagName('input');
  for (let i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      insertAnswer = parseInt(radios[i].value);
      break;
    }
  }
  theQuiz.guess(insertAnswer);
}
