<?php

include '../dbCon.php';

session_start();

$score = $_GET['score'];
$selection = $_SESSION['username'];

//Start Submit Quiz
    if (!empty($selection)) {
        $start = $mysqli->prepare("UPDATE 240UnixGroupProject SET quiz = ? WHERE user = ?");
        $start->bind_param("is", $score, $selection);
        $start->execute();
        $start->close();
    }
//End Submit Quiz

//Start High Score Check
    //Queries the database, identifying quiz score values
    $res = $mysqli->query("SELECT id, quiz, score FROM 240UnixGroupProject WHERE user = '$selection'");
    if ($res) {
		while($rowholder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
			$records[] = $rowholder;
		}
	}
    $recent = $records[0]['quiz'];
    $best = $records[0]['score'];
    var_dump($records);

    //Checks if the recent score if higher than the best score
    if ($recent > $best) {
        $start = $mysqli->prepare("UPDATE 240UnixGroupProject SET score = ? WHERE user = ?");
        $start->bind_param("is", $recent, $selection);
        $start->execute();
        $start->close();
    }
?>