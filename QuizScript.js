let finishButton = document.getElementById("FinButton");
let nextBtn = document.getElementById("nextBtn");
let progressBar = document.getElementById("ProgressBar")
let questionContainer = document.getElementById('questionCont');

let randomQuestionIndex;
let radioButtons = document.querySelectorAll('input[name="answer"]');
let element = document.getElementById("answerlist");
let list = element.querySelectorAll("label");
let currentQuestionIndex=0;
let randomQuestion;
let Askedquestions = [];
let usersAns = [];
let correctAns = [];
let questionsArray = [
    {
        question: "who won the rugby world cup",
        answers: ["Ireland", "new zealand", "South Africa", "none of these"],
        Correct: "new zealand"
    },
    {
        question: "How many eyes does a spider have",
        answers: ["four", "eight", "six", "nine"],
        Correct: "eight"
    },
    {
        question: "Which Star Wars character is best known for the line \"I am your father\"?",
        answers: ["hans solo", "Darth vader", "chewbacca", "obi wan kenobi"],
        Correct: "Darth vader"
    },
    {
        question: "What year was Running Up That Hill by Kate Bush released?",
        answers: ["1999", "1675", "2002", "1985"],
        Correct: "1985"
    },
    {
        question: "Which iconic rock band are Stevie Nicks and Lindsay Buckingham part of?",
        answers: ["ACDC", "iron maiden", "fleetwood mac ", "nirivana"],
        Correct: "fleetwood mac"
    },
    {
        question: "who is the founder of Glastonbury festival",
        answers: ["ray darcy", "micheal eavis", "jam master j", "leo varadkar"],
        Correct: "micheal eavis"
    },
    {
        question: "What was the Turkish city of Istanbul called before 1930?",
        answers: ["mesopatinia", "babylon", "gobbeki teppi", "constantinople"],
        Correct: "constantinople"
    },
    {
        question: "Which country in the world is believed to have the most miles of motorway?",
        answers: ["america", "canada", "austrailia", "china"],
        Correct: "china"
    },
    {
        question: "Which colour pill does Neo swallow in The Matrix?",
        answers: ["yellow", "red", "pink", "blue"],
        Correct: "red"
    },
    {
        question: "Which soft drink is commonly associated with Scotland?",
        answers: ["fanta", "iron bru", "coke", "pepsi"],
        Correct: "iron bru"
    }
];



window.onload = function ()
{
    showQuestion()
}
nextBtn.addEventListener('click', function () {
    console.log( currentQuestionIndex);

    let UserAnswer = document.querySelector('input[name="answer"]:checked');
    if(UserAnswer == null)
    {
        window.alert("Please select an answer to continue ")
    }
    else {
        if (currentQuestionIndex < 5) {
            finishButton.style.display = "none";
            StoreAnswer();
            showQuestion();

        }
        else if (currentQuestionIndex===5)
        {
            nextBtn.style.display = "none";
            finishButton.style.display = "block";
            list.forEach(function (label) {
                label.style.display = "none";
               // https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
            });
            questionContainer.innerText = "Congratulations you have finished the quiz please press Finish to continue"}
    }
});
function showQuestion() {

    randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    while (Askedquestions.includes(questionsArray[randomQuestionIndex].question)) {
        randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
    }
    randomQuestion = questionsArray[randomQuestionIndex];
    Askedquestions.push(randomQuestion.question);
    console.log(Askedquestions);
    questionContainer.innerText = randomQuestion.question;
    finishButton.style.display = "none";

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
        list[i].innerText = randomQuestion.answers[i];
    }
}
function StoreAnswer() {
    const UserAnswer = document.querySelector('input[name="answer"]:checked');
    if (UserAnswer !== null ) {
        usersAns[currentQuestionIndex] = list[UserAnswer.value].innerText;
        correctAns[currentQuestionIndex] = questionsArray[randomQuestionIndex].Correct;
        currentQuestionIndex++;
        console.log(currentQuestionIndex);
        localStorage.setItem("usersAnswers", JSON.stringify(usersAns));
        localStorage.setItem("askedQuestions", JSON.stringify(Askedquestions));
        localStorage.setItem("CorrectAnswer",JSON.stringify(correctAns));
        console.log(usersAns);
    }
    progressBar.innerText = "You have answered  " + (currentQuestionIndex) + " out of five";
    }
finishButton.addEventListener('click',function ()
{
    window.open("Summary.html", '_blank', 'width="50%",height="50%"')

})