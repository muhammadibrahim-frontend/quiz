const questions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Lahore", "Islamabad", "Karachi", "Quetta"],
    correctAnswer: "B",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "B",
  },
  {
    question: "Who is our national hero?",
    options: [
      "Illama Iqbal",
      "Quaid-e-azam",
      "Sarsyed Ahmad Khan",
      "Mirza Ghalib",
    ],
    correctAnswer: "B",
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Mont Blanc"],
    correctAnswer: "B",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    correctAnswer: "A",
  },
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];
//This will display the next question
function showQuestion(index) {
  const questionContainer = document.getElementById(
    `question-container-${index}`
  );
  questionContainer.style.display = "block";
}

//The previous question display will be none
function hideQuestion(index) {
  const questionContainer = document.getElementById(
    `question-container-${index}`
  );
  questionContainer.style.display = "none";
}
//Scoring
function checkAnswer(questionIndex, answer) {
  const correctAnswer = questions[questionIndex - 1].correctAnswer;
  console.log(questionIndex);
  if (answer === correctAnswer) {
    score++;
  }
  userAnswers[questionIndex - 1] = answer;

  hideQuestion(questionIndex);
  if (questionIndex < questions.length) {
    showQuestion(questionIndex + 1);
  } else {
    showResult();
  }
}
//It will display the correct answer at last
function showResult() {
  document.getElementById("result").style.display = "block";
  document.getElementById("score").innerText = score;
  console.log(score);
  const correctAnswersText = questions
    .map((q, index) => {
      return `Q${index + 1}: Correct answer was "${
        q.options[q.correctAnswer.charCodeAt(0) - 65]
      }"`;
    })
    .join("<br>");
  document.getElementById("correct-answers").innerHTML = correctAnswersText;
  document.getElementById("restart-btn").style.display = "inline-block";
}
// It will restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers.length = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";
  showQuestion(1);
}
// When page reload it will display the first question
window.onload = () => {
  showQuestion(1);
};
