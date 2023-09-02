const questions = [
    {
        question: "what is css used for?",
        answers: [
            {text: "to create a website's functionality", correct: false},
            {text: "to style a website", correct: true},
            {text: "to make a sandwhich", correct: false},
            {text: "as a backend service for a website", correct: false},
    
        ]
    },
    {
    question: "when was javascript created?",
    answers: [
        {text: "1999", correct: false},
        {text: "2004", correct: false},
        {text: "1995", correct: true},
        {text: "1945", correct: false},
    
    ] 
    }
    ];
const questionButton = document.getElementById("question");
const answerButton = document.getElementById("answerBtn");
const nextButtons = document.getElementById("nextBtn");
let score = 0;
let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            bottom.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.class.list.add("correct");
        score++;
    }
    else{
        selectedBtn.classlist.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true");
        button.disabled = true;
    });
    nextButton.style.display = "block";
};
function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${question.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();