<?php
    include '../../dbcon.php';
    // $query = "SELECT * FROM 240UnixGroupProject (user, pass)";

    //echo $_POST["usernames"];
    //echo $_POST["passwords"];
    //echo $query;
    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);

    // $start = $mysqli->prepare("INSERT INTO `240UnixGroupProject` (user, pass) VALUES (?, ?)");
    // $start->bind_param("ss", $_POST['usernames'], $_POST['passwords']);
    // $start->execute();
    // $start->close();

    // var_dump($_POST);
    // die();

    if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
    }

    $start = $mysqli->prepare("INSERT INTO `240UnixGroupProject` (user, pass) VALUES (?, ?)");

    if (!$start) {
        die("Prepare failed: " . $mysqli->error);
    }

    $start->bind_param("ss", $_POST['usernames'], $_POST['passwords']);

    if (!$start->execute()) {
        die("Execute failed: " . $start->error);
    }

    $start->close();
    header('Location: /pages/login.php');
    exit();
?>
