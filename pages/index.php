<?php 
    session_start();
    include "../assets/files/nav.php"; 
?>

    <h1>Learning Unix By Doing</h1>
    <p>Welcome to Intro to UNIX a beginner-friendly guide to understanding the UNIX operating system. Explore the sections below to get started.</p>

    <section id="tracks_grid">
        <a href="history.php">
            <h2 class="tracks">History</h2>
            <p>Learn about the origins of UNIX, how it was developed at Bell Labs in 1969, and how it shaped modern operating systems like Linux and macOS.</p>
        </a>
        <a href="tutorials.php">
            <h2 class="tracks">Tutorial</h2>
            <p>Get hands-on with essential UNIX commands like ls, cd, pwd, cp, and rm through step-by-step examples.</p>
        </a>
        <a href="quiz.php">
            <h2 class="tracks">Quiz</h2>
            <p>Test your knowledge with a 10-question quiz covering UNIX history and commands. Log in to save your score and track your best result.</p>
        </a>
        <a href="scoreboard.php">
            <h2 class="tracks">Scoreboard</h2>
            <p>See how you rank against other users on the scoreboard.</p>
        </a>
    </section>

</body>
</html>