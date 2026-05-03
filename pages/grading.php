<?php
    session_start();
    include "../assets/files/nav.php";
?>
    <h1>Grading Page</h1>
    <p>How we met requirements</p>

    <h2>Login and Signup</h2>
    <p>We made a login and signup page. On the login side it uses a PHP session so once you log in it remembers who you are and sends you to the quiz page. On the signup side it uses a prepared statement with bind_param to insert the new username and password into the database. If both fields are not filled in it shows an error. The login form also checks if the username exists and if the password matches before creating the session.</p>

    <h2>Quiz</h2>
    <p>We made a 10 question UNIX quiz. The questions are in the HTML and the scoring is done in JavaScript. When you click submit it loops through all 10 answers and compares them to the correct ones. It adds a correct or incorrect class to each question block so you can see which ones you got right. At the end it shows your score out of 10. If you are logged in it sends the score to save_score.php using fetch so it saves without reloading the page. If you are not logged in it tells you to log in to save your score.</p>

    <h2>Quiz Score Submit and High Score</h2>
    <p>When you finish the quiz your score gets sent to quiz_score_submit.php. It updates the quiz column in the database with your most recent score. Then it checks if that score is higher than the score column which stores your best score. If it is higher it updates the best score too. The profile page pulls both values out of the database and shows your last score and your best score.</p>

    <h2>Scoreboard</h2>
    <p>The scoreboard page queries the database for all users who have a score and orders them from highest to lowest. It shows the rank, username, and score in a table. If there are no scores yet it shows a message telling you to take the quiz.</p>

    <h2>History</h2>
    <p>The history page covers the history of UNIX. It goes through what UNIX is, where it started at Bell Labs with Ken Thompson and Dennis Ritchie, how it evolved over the years, and what UNIX based systems look like today. Each section has its own h2 heading and the content is broken into paragraphs.</p>

    <h2>Tutorials</h2>
    <p>The tutorials page has a sidebar with links to the different sections like Requirements and Setup, File System Hierarchy, Security and Permissions, Shell Support, and Scripting. The page goes through how to open a terminal, navigation commands like ls, cd, and pwd, and other common UNIX commands with explanations for what each one does.</p>

    <h2>Terminal</h2>
    <p>We built an interactive terminal in the terminal-env folder. You can type commands like ls, mkdir, and cd and it will act like a real linux terminal. </p>

    <h2>Database</h2>
    <p>We used the Adminer.php database through dbCon.php which connects with mysqli. The database stores usernames, passwords, last quiz scores, and best scores. The login, signup, quiz score submit, and scoreboard pages all use this connection. We used prepared statements and bind_param in the places where we are writing data to prevent SQL injection.</p>

</body>
</html>