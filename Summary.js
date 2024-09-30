let Results = document.getElementById("question1");

let questionsAsked = JSON.parse(localStorage.getItem("askedQuestions"));
let userAnswers = JSON.parse(localStorage.getItem("usersAnswers"));
let correctAnswers = JSON.parse(localStorage.getItem("CorrectAnswer"));
let usersCorrection = document.getElementById('UsersCorrection');
let UserCorrect =0;

for (let i = 0; i < questionsAsked.length; i++) {

    Results.innerHTML += `Question: ${questionsAsked[i]}<br>Your Answer: ${userAnswers[i]}<br>Correct Answer: ${correctAnswers[i]}<br><br>`;


    if (userAnswers[i] === correctAnswers[i]) {
        UserCorrect++;
        console.log(UserCorrect)
    }
}
usersCorrection.innerHTML = " you have gotten  " + UserCorrect + "  out of " + questionsAsked.length+"  questions correct";