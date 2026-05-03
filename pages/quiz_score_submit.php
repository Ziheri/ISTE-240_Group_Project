<?php
session_start();
include '../dbCon.php';

$score = (int)$_GET['score'];
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
    $stmt = $mysqli->prepare("SELECT quiz, score FROM 240UnixGroupProject WHERE user = ?");
    $stmt->bind_param("s", $selection);
    $stmt->execute();
    $res = $stmt->get_result();

    $records = [];
    if ($res) {
		while($rowholder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
			$records[] = $rowholder;
		}
	}

    //
    if(!empty($records)) {
        $recent = $records[0]['quiz'];
        $best = $records[0]['score'];

        //Checks if the recent score if higher than the best score
        if ($recent > $best) {
            $start = $mysqli->prepare("UPDATE 240UnixGroupProject SET score = ? WHERE user = ?");
            $start->bind_param("is", $recent, $selection);
            $start->execute();
            $start->close();
        }
    }
?>