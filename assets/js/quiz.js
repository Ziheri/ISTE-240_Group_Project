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

    const total = Object.keys(answers).length;
    const resultEl = document.getElementById("quiz_result");
    resultEl.textContent = `You scored ${score} out of ${total}!`;

    // POST score to server — only saves if user is logged in
    const formData = new FormData();
    formData.append('score', score);

    fetch('/pages/save_score.php', { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                resultEl.textContent += ' Score saved to scoreboard!';
            } else if (data.message === 'Not logged in') {
                resultEl.textContent += ' Log in to save your score to the scoreboard.';
            }
        })
        .catch(() => {
            // Network error — score display still works
        });
});