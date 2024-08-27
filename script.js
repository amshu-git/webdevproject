document.addEventListener("DOMContentLoaded", function() {
    const startQuizButton = document.getElementById("startQuizButton");
    const quizContainer = document.getElementById("quizContainer");
    const questions = document.querySelectorAll(".question");
    const resultSection = document.getElementById("resultSection");
    const resultText = document.getElementById("resultText");
    const retakeQuizButton = document.getElementById("retakeQuizButton");

    let currentQuestionIndex = 0;

    /* main button to start the travel quiz & triggers the 1st question when I click on it*/
    startQuizButton.addEventListener("click", function() {
        startQuizButton.style.display = "none";
        quizContainer.style.display = "block";
        showQuestion(currentQuestionIndex);
    });

    document.querySelectorAll(".quiz-option").forEach(option => {
        option.addEventListener("click", function() {
            const nextQuestionId = option.getAttribute("data-next");

            if (nextQuestionId === "results") {
                displayResult(option.getAttribute("data-answer"));
            } else {
                hideQuestion(currentQuestionIndex);
                currentQuestionIndex = getNextQuestionIndex(nextQuestionId);
                showQuestion(currentQuestionIndex);
            }
        });
    });

    function showQuestion(index) {
        questions[index].style.display = "block";
    }

    function hideQuestion(index) {
        questions[index].style.display = "none";
    }

    function getNextQuestionIndex(questionId) {
        return Array.from(questions).findIndex(question => question.id === questionId);
    }

    function displayResult(answer) {
        let destination;

        /*need to fix this part by having less options cause right now its attaching destination to each option but ideally, this would work as a sequence e.g. beach > nightlife > so on = destination*/
        if (answer === "beach") {
            destination = "Crete, Greece";
        } else if (answer === "mountains") {
            destination = "Dolomites, Italy";
        } else if (answer === "nightlife") {
            destination = "Ibiza, Spain";
        } else if (answer === "relaxation") {
            destination = "Faro, Portugal";
        } else if (answer === "city") {
            destination = "NYC, USA";
        } else if (answer === "town") {
            destination = "Lake Bled, Slovenia";
        } else if (answer === "historical") {
            destination = "Granada, Spain";
        } else if (answer === "advanced") {
            destination = "Shanghai, China";
        } else if (answer === "food") {
            destination = "Mexico City, Mexico";
        } else if (answer === "culture") {
            destination = "Rome, Italy";
        }

        quizContainer.style.display = "none";
        resultSection.style.display = "block";
        resultText.textContent = destination;
    }
});