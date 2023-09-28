document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");
    const questions = form.querySelectorAll(".question");
    const nextButton = document.getElementById("next-button");
    const submitButton = document.getElementById("submit-button");
    let currentQuestion = 0;

    // Function to show the next set of questions
    function showNextQuestions() {
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.display = "none";
        }

        for (let i = currentQuestion; i < currentQuestion + 2; i++) {
            if (i < questions.length) {
                questions[i].style.display = "block";
            }
        }

        if (currentQuestion >= questions.length - 2) {
            nextButton.style.display = "none";
            submitButton.style.display = "block";
        } else {
            nextButton.style.display = "block";
            submitButton.style.display = "none";
        }
    }

    // Initially, show the first set of questions
    showNextQuestions();

    nextButton.addEventListener("click", function () {
        currentQuestion += 2;
        showNextQuestions();
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can collect responses and send them to your backend here
        const formData = new FormData(form);
        const responses = {};

        formData.forEach((value, key) => {
            responses[key] = value;
        });

        // Example: Send responses to the Outerbase database
        sendFeedbackToOuterbase(responses);
    });

    // Replace this function with your actual API call to Outerbase
    function sendFeedbackToOuterbase(data) {
        // You can make an API request to Outerbase here to store the feedback data
        console.log("Feedback data sent to Outerbase:", data);
    }
});
