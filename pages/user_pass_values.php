<?php
    session_start();
    include '../dbCon.php';
    // $query = "SELECT * FROM 240UnixGroupProject (user, pass)";

    //Queries the Database for Usernames and Passwords
    $records = [];
    $stmt = $mysqli->prepare("SELECT user FROM 240UnixGroupProject");
    $stmt->execute();
    $res = $stmt->get_result();
    if($res) {
		while($rowholder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
			$records[] = $rowholder;
		}
	}

    //Start Signup Function
    $taken = false;
    if(!empty($_POST['usernames']) && !empty($_POST['passwords'])) {
        foreach($records as $this_row) {
            if($_POST['usernames'] == $this_row['user']) {
                $taken = true;
                break;
            }
        }

        if(!$taken) {
            $start = $mysqli->prepare('INSERT INTO 240UnixGroupProject (User, Pass) VALUES (?, ?)');
            $start->bind_param("ss", $_POST['usernames'], $_POST['passwords']);
            $start->execute();
            $start->close();
            $_SESSION['username'] = $_POST['usernames'];
            header('Location: profile.php');
            exit();
        } else {
            header('Location: login.php?error=taken');
            exit();
        }
    } else {
        header('Location: login.php?error=missing');
        exit();
    }
    //End Signup Function
?>