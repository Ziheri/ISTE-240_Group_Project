<?php
    session_start();

    // Redirect to login if not logged in
    if (!isset($_SESSION['username'])) {
        header('Location: login.php');
        exit();
    }
    
    // quiz = last score
    // score = best score
    include '../dbCon.php';
    include "../assets/files/nav.php";

    $selection = $_SESSION['username'];

    // query to get id, last score, and best score from table
    $stmt = $mysqli->prepare("SELECT id, quiz, score FROM 240UnixGroupProject WHERE user = ?");
    $stmt->bind_param("s", $selection);
    $stmt->execute();
    $res = $stmt->get_result();

    // Populate $records
    $records = [];
    if ($res) {
        while($rowholder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
            $records[] = $rowholder;
        }
    }
?>
    <div id="profile_container">
        <h1>Welcome, <?php echo htmlspecialchars($selection); ?>!</h1>
        <a href="logout.php"><button class="logout_button">Logout</button></a>
        <h2>Quiz Scores</h2>
        <?php if (!empty($records) && $records[0]['quiz'] !== null): ?>
            <p>Last Score: <?php echo $records[0]['quiz']; ?></p>
            <p>Best Score: <?php echo $records[0]['score']; ?></p>
        <?php else: ?>
            <p>No score recorded. Take the quiz to receive scores.</p>
        <?php endif; ?>
    </div>
</body>
</html>