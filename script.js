// get containers form HTML
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
    `What is the magic word spoken to summon things in the 'Harry Potter' series?`,
    ['Accio', 'Alohomora', 'Come here, dammit', 'Expelliarmus'],
    0
  ),
  new TriviaQuestion(
    `What is the name of the angel guide who helps and saves Lyra and Will in Book 3 of the 'His Dark Materials' trilogy?`,
    ['Gabriel', 'Peter', 'Enoch', 'Balthamos'],
    3
  ),
  new TriviaQuestion(
    `What was the real name of Rorschach in the 'Watchmen' graphic novel?`,
    ['Jasper Davis', 'Alan Moore', 'Walter Kovacs'],
    2
  ),
  new TriviaQuestion(
    `What kind of droid is C3PO in 'Star Wars?'`,
    ['Translator', 'Helper', 'Protocol', 'Accidental'],
    2
  ),
  new TriviaQuestion(
    `How many members were in the original fellowship of the ring in 'The Lord of the Rings'?`,
    ['5', '14', '7', '42', '9'],
    4
  ),
  new TriviaQuestion(
    `What actor is known for playing Sulu in the original 'Star Trek' series?`,
    [
      'Brent Spiner',
      'George Takei',
      'William Shatner',
      'Leonard Nimoy',
      'Patrick Stewart',
      'DeForest Kelley'
    ],
    1
  )
];

// Build question object with correct answer function
function TriviaQuestion(question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
}
TriviaQuestion.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

// Build Quiz Object with functions to build the quiz, put radios with the answers, insert questions and answers in to quiz, to move through questions, to end the quiz (radio button logic made with help of friend)
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.buildQuestion = function(index) {
  let insertQuestion = this.questions[index];
  questionContainer.innerHTML = insertQuestion.question;
  let radioHtml = '';
  let optionIndex = 0;
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
  answerContainer.innerHTML = radioHtml;
};

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isOver = function() {
  return this.questions.length === this.questionIndex;
};
let restart = false;

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
    keepScore.innerHTML = `${this.score}/${allQuestions.length}`;
  }
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

// Run quiz
let theQuiz = new Quiz(allQuestions);
function buildQuiz() {
  theQuiz.buildQuestion(0);
  answerButton.hidden = false;
  questionContainer.hidden = false;
  answerContainer.hidden = false;
  beginQuizButton.hidden = true;
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
