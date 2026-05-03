<?php
    session_start();
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
?>
    <h1>Quiz Scores:</h1>
    <!--Check if there are any scores in the table-->
    
<?php
    $records = [];
    if ($res) {
        while($rowholder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
            $records[] = $rowholder;
        }
    }
    
    if (!empty($records)) {
        $recent = $records[0]['quiz'];
        $best = $records[0]['score'];
        echo "<p>Last Score: ". $recent . "</p>";
        echo "<p>Best Score: ". $best . "</p>";
    } else {
        echo "<p>No score recorded. Take the quiz to receive scores.</p>";
    }
?>
</body>
</html>