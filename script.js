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
TriviaQuestion.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

// Build Quiz Object
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.buildQuestion = function(index) {
  var title_div = document.getElementById('question_title');
  var answer_radios = document.getElementById('answer_radio_group');

  var question = this.questions[index];
  title_div.innerHTML = question.question;
  var radioHtml = '';
  var optionIndex = 0;
  question.options.forEach(
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
  answer_radios.innerHTML = radioHtml;
};

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isOver = function() {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
    let keepScore = document.getElementById('running_score');
    keepScore.innerHTML = `${this.score}/${allQuestions.length}`;
  }
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

// Build quiz- populate the questions
function buildQuiz() {
  console.log('buildQuiz fired');

  this.theQuiz.buildQuestion(0);
  document.getElementById('answer_btn').hidden = false;
  document.getElementById('begin_quiz_btn').hidden = true;
  let keepScore = document.getElementById('running_score');
  keepScore.innerHTML = `0/${allQuestions.length}`;
}

function processAnswer() {
  console.log('processAnswer fired');
  var answer = '';
  var radio_group = document.getElementById('answer_radio_group');
  var radios = radio_group.getElementsByTagName('input');
  for (var i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      console.log(`answer found: ${radios[i].value}`);
      answer = parseInt(radios[i].value);
      break;
    }
  }
  console.log(`answer: ${answer}`);
  theQuiz.guess(answer);
}
