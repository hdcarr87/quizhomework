var start = document.getElementById("start");
var startquiz = document.getElementById("startquiz");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var score = document.getElementById("score");
var scoreSheet = document.getElementById("scoresheet");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings", 
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C",
    },
    {
        question: "The condition in an if/else statemtn is enclosed within ______.",
        choiceA: "quotes",
        choiceB: "parentheses",
        choiceC: "curly brackets", 
        choiceD: "square brackets",
        correct: "B"
    },
    {
        question: "What is the correct place to insert a JavaScript within the html?",
        choiceA: "The <head> or the <body>",
        choiceB: "the <body>",
        choiceC: "the <head>",
        choiceD: "We do not need to insert, it will link automatically",
        correct: "A"
    }
];

var lastQuest = questions.length -1;
var currentQuest = 0;
var count = 60;
var quizLength = 60;
var gaugeWidth = 600;
var gaugeUnit = quizLength / gaugeWidth;
var pointsScored = 0;


function startQuiz() {
    start.style.display = "none";
    displayQuestion();
    quiz.style.display = "block";
    displayProgress();
    displayCounter();
    TIMER = setInterval(displayCounter, 1000);
}

function quizFinished() {
    quiz.style.display = "none";
    score.style.display = "block";
    console.log("quiz is done")
}

startquiz.addEventListener("click", startQuiz);

function displayQuestion() {
    var quest = questions[currentQuest];
    question.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    choiceD.innerHTML = quest.choiceD;
}


function displayProgress() {
    for (questIndex = 0; questIndex <= lastQuest; questIndex++) {
        progress.innerHTML += "<div clss= 'prog' id=" + questIndex +"></div>";
    }
}


function displayCounter() {
    if (count <= quizLength) {
        counter.innerHTML = count;
        timeGauge.style.width = count - gaugeUnit -"1px";
        count--;
    }

    if (count <= -1) {
        clearInterval(TIMER);
          console.log("time is up!");
          quizFinished();
          renderScore();
    }
}

function checkChoice (answer) {
    if (answer == questions[currentQuest].correct){
        answerIsCorrect();
        console.log("its correct!");
    } else {
        answerIsWrong();
        count = count - 15;
        console.log("you're wrong:(");
    }
    if(currentQuest < lastQuest) {
        currentQuest++;
        displayQuestion();
        console.log("next");
    } else {
        quizFinished();
        renderScore();

    }

}

function answerIsCorrect(){
    document.getElementById(currentQuest).style.backgroundColor = "green";
}

function answerIsWrong(){
  document.getElementById(currentQuest).style.backgroundColor = "red";
}


function renderScore () {
    var score = function calculatescore(){
        answerIsCorrect.count
    };
    score.style.display = "block";
}

yourScore.AddEventListener("submit", renderScore);

var userInitials = document.querySelector("#userInitials");
var finalscore = document.querySelector("#yourScore");


localStorage.setItem("userInitials", userInitials);
localStorage.setItem("userScore", pointsScored);
 
var lastUserInitials = localStorage.getItem("userInitials");
var lastyourScore = localStorage.getItem("yourScore");

userInitials.textContent = userInitials.value;
finalscore.textContent = pointsScored;

