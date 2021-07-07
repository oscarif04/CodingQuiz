document.querySelector(".section2").style.display = "block";
document.querySelector(".question1").style.display = "none";
document.querySelector(".question2").style.display = "none";
document.querySelector(".question3").style.display = "none";
document.querySelector(".question4").style.display = "none";
document.querySelector(".question5").style.display = "none";
document.querySelector(".AllDone").style.display = "none";
document.querySelector(".Highscores").style.display = "none";

var startBtn = document.querySelector("#StartQuiz-btn");

var Q1A1_btn = document.querySelector("#Q1A1");
var Q1A2_btn = document.querySelector("#Q1A2");
var Q1A3_btn = document.querySelector("#Q1A3");
var Q1A4_btn = document.querySelector("#Q1A4");

var Q2A1_btn = document.querySelector("#Q2A1");
var Q2A2_btn = document.querySelector("#Q2A2");
var Q2A3_btn = document.querySelector("#Q2A3");
var Q2A4_btn = document.querySelector("#Q2A4");

var Q3A1_btn = document.querySelector("#Q3A1");
var Q3A2_btn = document.querySelector("#Q3A2");
var Q3A3_btn = document.querySelector("#Q3A3");
var Q3A4_btn = document.querySelector("#Q3A4");

var Q4A1_btn = document.querySelector("#Q4A1");
var Q4A2_btn = document.querySelector("#Q4A2");
var Q4A3_btn = document.querySelector("#Q4A3");
var Q4A4_btn = document.querySelector("#Q4A4");

var Q5A1_btn = document.querySelector("#Q5A1");
var Q5A2_btn = document.querySelector("#Q5A2");
var Q5A3_btn = document.querySelector("#Q5A3");
var Q5A4_btn = document.querySelector("#Q5A4");

var submit_btn = document.querySelector("#submit");

console.log(quiz());

function quiz(){
    startBtn.addEventListener("click", beginQuiz);
};

function beginQuiz(){
    document.querySelector(".section2").style.display = "none";
    document.querySelector(".question1").style.display = "block";

    Q1();
    Q2();
    Q3();
    Q4();
    Q5();
    AllDonePage();
};

function Q1(){
    Q1A1_btn.addEventListener("click", q1ToQ2);
    Q1A2_btn.addEventListener("click", q1ToQ2);
    Q1A3_btn.addEventListener("click", q1ToQ2);
    Q1A4_btn.addEventListener("click", q1ToQ2);
};

function Q2(){
    Q2A1_btn.addEventListener("click", q2ToQ3);
    Q2A2_btn.addEventListener("click", q2ToQ3);
    Q2A3_btn.addEventListener("click", q2ToQ3);
    Q2A4_btn.addEventListener("click", q2ToQ3);
};

function Q3(){
    Q3A1_btn.addEventListener("click", q3ToQ4);
    Q3A2_btn.addEventListener("click", q3ToQ4);
    Q3A3_btn.addEventListener("click", q3ToQ4);
    Q3A4_btn.addEventListener("click", q3ToQ4);
};

function Q4(){
    Q4A1_btn.addEventListener("click", q4ToQ5);
    Q4A2_btn.addEventListener("click", q4ToQ5);
    Q4A3_btn.addEventListener("click", q4ToQ5);
    Q4A4_btn.addEventListener("click", q4ToQ5);
};

function Q5(){
    Q5A1_btn.addEventListener("click", q5ToAllDone);
    Q5A2_btn.addEventListener("click", q5ToAllDone);
    Q5A3_btn.addEventListener("click", q5ToAllDone);
    Q5A4_btn.addEventListener("click", q5ToAllDone);
};

function AllDonePage(event){
    event.preventDefault();
    submit_btn.addEventListener("click", AllDoneToHighscores);
}

function q1ToQ2(){
    document.querySelector(".question1").style.display = "none";
    document.querySelector(".question2").style.display = "block";
};

function q2ToQ3(){
    document.querySelector(".question2").style.display = "none";
    document.querySelector(".question3").style.display = "block";
};

function q3ToQ4(){
    document.querySelector(".question3").style.display = "none";
    document.querySelector(".question4").style.display = "block";
};

function q4ToQ5(){
    document.querySelector(".question4").style.display = "none";
    document.querySelector(".question5").style.display = "block";
};

function q5ToAllDone(){
    document.querySelector(".question5").style.display = "none";
    document.querySelector(".AllDone").style.display = "block";
};

function AllDoneToHighscores(){
    document.querySelector(".AllDone").style.display = "none";
    document.querySelector(".Highscores").style.display = "block";
}