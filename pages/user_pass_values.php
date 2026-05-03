<?php
    include '../dbCon.php';
    // $query = "SELECT * FROM 240UnixGroupProject (user, pass)";

    //Queries the Database for Usernames and Passwords
    $records = [];
    $res = $mysqli->query("SELECT user, pass FROM 240UnixGroupProject");
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
                echo "<p> This Username has already been taken. </p>";
                $taken = true;
                break;
            } else {
                $taken = false;
                continue;
            }
        }
        if($mysqli && !empty($_POST['usernames']) && !empty($_POST['passwords']) && !$taken) {
            $start = $mysqli->prepare('INSERT INTO 240UnixGroupProject (User, Pass) VALUES (?, ?)');
            $start->bind_param("ss", $_POST['usernames'], $_POST['passwords']);
            $start->execute();
            $start->close();
            header('Location: profile.php');
        }
    } else {
        echo "<p>Username or Password is Missing.";
    }
    //End Signup Function

    //Start Login Function
    $login = false;
    if(!empty($_POST['usernamel']) && !empty($_POST['passwordl'])) {
        foreach($records as $this_row) {
            if($_POST['usernamel'] == $this_row['user'] && $_POST['passwordl'] == $this_row['pass']) {
                session_start();
                $_SESSION['username'] = $_POST['usernamel'];
                $login = true;
                break;
            } else {
                $login = false;
                continue;
            }
        }
        if(!$login) {
            echo "<p>Login Failed. Username or Password is Incorrect.</p>";
        } else {
            header('Location: profile.php');
            exit();
        }
    }
    //End Login Function
?>