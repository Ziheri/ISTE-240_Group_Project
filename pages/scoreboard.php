<?php
    include '../../dbcon.php';
    include "../assets/files/nav.php";

    $result = $mysqli->query("SELECT user, score FROM `240UnixGroupProject` ORDER BY score DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro To UNIX - Scoreboard</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Header Section -->
    <section class="grid_container">
        <img id="mobile_nav" src="style_content/Nav Bars.png" alt="Mobile Navigation Button">
        <a href="index.html">
            <img id="title_pc" src="style_content/(Updated-Long) Group-Project_Logo.png" alt="Intro to UNIX title card">
            <img id="title_mobile" src="style_content/(Updated) Group-Project_Logo.png" alt="Intro to UNIX title card">
        </a>
        <nav>
            <ul class="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="history.html">History</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="quiz.html">Quiz</a></li>
                <li><a href="scoreboard.php">Scoreboard</a></li>
            </ul>
            <ul class="navbar-2">
                <li><a href="assets/files/login.html">Login</a></li>
            </ul>
        </nav>
    </section>
    <!-- Header Section ^ -->

    <h1 id="scoreboard_heading">Scoreboard</h1>

    <div id="scoreboard_container">
        <?php if ($result && $result->num_rows > 0): ?>
        <table id="scoreboard_table">
            <thead>
                <tr>
                    <th class="rank_col">#</th>
                    <th>User</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <?php $rank = 1; while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td class="rank_col"><?php echo $rank++; ?></td>
                        <td><?php echo htmlspecialchars($row['user']); ?></td>
                        <td><?php echo htmlspecialchars($row['score']); ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
        <?php else: ?>
            <p id="no_scores">No scores have been recorded yet. Take the quiz to be the first!</p>
        <?php endif; ?>
    </div>
</body>
</html>