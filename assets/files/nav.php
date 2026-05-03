<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro To UNIX</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <!-- Header Section -->
    <section class="grid_container">
    <img id="mobile_nav" src="../assets/images/Nav_Bars.png" alt="Mobile Navigation Button">
    <a href="index.php">
        <img id="title_pc" src="../assets/images/Long_Title.png" alt="Intro to UNIX title card">
        <img id="title_mobile" src="../assets/images/Mobile_Logo.png" alt="Intro to UNIX title card">
    </a>
    <nav>
        <ul class="navbar">
            <li><a href="index.php">Home</a></li>
            <li><a href="history.php">History</a></li>
            <li><a href="tutorials.php">Tutorial</a></li>
            <li><a href="quiz.php">Quiz</a></li>
            <li><a href="scoreboard.php">Scoreboard</a></li>
            <li><a href="grading.php">Grading</a></li>
        </ul>
        <ul class="navbar-2">
            <?php if (isset($_SESSION['username'])): ?>
            <li><a href="logout.php">Logout</a></li>
            <?php else: ?>
            <li><a href="login.php">Login</a></li>
            <?php endif; ?>
        </ul>
    </nav>
    <!-- Header Section ^ -->