const answers = {
    q1: "B", q2: "A", q3: "B", q4: "A", q5: "C",
    q6: "B", q7: "A", q8: "B", q9: "A", q10: "B"
};

document.getElementById("quiz_submit").addEventListener("click", function () {
    let score = 0;

    for (let q in answers) {
        const block = document.getElementById(q + "_block");
        const selected = document.querySelector(`input[name="${q}"]:checked`);

        block.classList.remove("correct", "incorrect");

        if (selected && selected.value === answers[q]) {
            score++;
            block.classList.add("correct");
        } else {
            block.classList.add("incorrect");
        }
    }

    document.getElementById("quiz_result").textContent =
        `You scored ${score} out of ${Object.keys(answers).length}!`;
});
