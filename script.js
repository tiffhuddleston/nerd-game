// Build Questions
const allQuestions = [
  new TriviaQuestion(
    'What planet is Dr. Who from?',
    ['Jupiter', 'Galifrey', 'Time Lord Home World', 'Titan 1'],
    1
  ),
  new TriviaQuestion('Who likes bones?', ['Dogs', 'Cats', 'Birds'], 0),
  new TriviaQuestion('What is best?', ['Sleep', 'Food', 'Work'], 0)
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
  var title_div = document.getElementById('question_title');
  var answer_radios = document.getElementById('answer_radio_group');
  // Put questions and answers into quiz
  var insertQuestion = this.questions[index];
  title_div.innerHTML = insertQuestion.question;
  // Create radio button response
  var radioHtml = '';
  var optionIndex = 0;
  //   Got help on this logic and syntax from friend
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
  answer_radios.innerHTML = radioHtml;
};

// Quiz function to iterate through questions
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

// Quiz function to end quiz when all questions have been answered
Quiz.prototype.isOver = function() {
  return this.questions.length === this.questionIndex;
};

// Quiz function to tally correct answers compared to # of questions and keep track in running_score div to display progress
Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
    let keepScore = document.getElementById('running_score');
    keepScore.innerHTML = `${this.score}/${allQuestions.length}`;
  }
  //   Ends game, shows score, unhides button to begin quiz if player wants to restart
  this.questionIndex++;
  if (this.isOver()) {
    let scoreLabel = document.getElementById('score_label');
    scoreLabel.innerHTML = 'Final Score';
    document.getElementById('begin_quiz_btn').hidden = false;
    return;
  }
  this.buildQuestion(this.questionIndex);
};

var theQuiz = new Quiz(allQuestions);

// Build quiz itself- populate the questions
function buildQuiz() {
  this.theQuiz.buildQuestion(0);
  // Shows answer button
  document.getElementById('answer_btn').hidden = false;
  // Hides 'begin quiz' button during game play
  document.getElementById('begin_quiz_btn').hidden = true;
  // Shows initial score
  let keepScore = document.getElementById('running_score');
  keepScore.innerHTML = `0/${allQuestions.length}`;
}

// Checks for correct answer,
function processAnswer() {
  var inserAnswer = '';
  var radio_group = document.getElementById('answer_radio_group');
  var radios = radio_group.getElementsByTagName('input');
  for (var i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      insertAnswer = parseInt(radios[i].value);
      break;
    }
  }
  theQuiz.guess(insertAnswer);
}
