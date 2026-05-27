document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.querySelector("#quoteButton");
    const quoteOutput = document.querySelector("#quoteOutput");

    const ideas = [
        "Емоції важливо не приховувати, а розуміти.",
        "Самоконтроль допомагає приймати спокійніші рішення.",
        "Емпатія робить спілкування добрішим і чеснішим.",
        "Емоційний інтелект можна розвивати щодня."
    ];

    if (quoteButton && quoteOutput) {
        quoteButton.addEventListener("click", function () {
            const randomIndex = Math.floor(Math.random() * ideas.length);
            quoteOutput.textContent = ideas[randomIndex];
        });
    }

    const recommendationButton = document.querySelector("#recommendationButton");
    const recommendationBox = document.querySelector("#recommendationBox");

    if (recommendationButton && recommendationBox) {
        recommendationButton.addEventListener("click", function () {
            recommendationBox.classList.toggle("visible");
            if (recommendationBox.classList.contains("visible")) {
                recommendationButton.textContent = "Приховати рекомендацію";
            } else {
                recommendationButton.textContent = "Показати рекомендацію";
            }
        });
    }
});
