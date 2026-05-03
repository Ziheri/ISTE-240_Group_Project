<?php
    // quiz = last score
    // score = best score
    include '../dbCon.php';
    include "../assets/files/nav.php";

    session_start();

    $selection = $_SESSION['username'];

    // query to get id, last score, and best score from table
    $res = $mysqli->query("SELECT id, quiz, score FROM 240UnixGroupProject WHERE user = '$selection'");
?>
    <h1>Quiz Scores:</h1>
    <!--Check if there are any scores in the table-->
    
<?php
        if ($res) {
        while($rowholder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
            $records[] = $rowholder;
            } 
        } else {
            echo "<p>No score recorded. Take the quiz to receive scores.</p>";
        }
        $recent = $records[0]['quiz'];
        $best = $records[0]['score'];

        echo "<p>" . "Last Score: ". $recent . "</p>" ;
        echo "<p>" . "Best Score: ". $best . "</p>" ;
?>
</body>
</html>