<?php
    include '../dbCon.php';
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

    echo "Success!";
    $start->close();
    
    // if($_POST['usernames'] == $query[0]){
    //     echo "<p> usernames has already been claimed</p>";
    // } else {
    //     if($mysqli && !empty($_POST['usernames']) && !empty($_POST['passwords'])){
    //         $start = $mysqli->prepare('INSERT INTO 240UnixGroupProject (User, Pass) VALUES (?, ?)');
    //         $start->bind_param("ss", $_POST['usernames'], $_POST['passwords']);
    //         $start->execute();
    //         $start->close();
    //     }
    // }
?>

<script>
    // function updateDisplay() {
    // const usernamess = document.POSTElementById('usernames').value;
    // const password = document.POSTElementById('password').value;

    // for (let i = 0; i < "databases rows amount".length; i++){
    //     if ((usernames && password) == "id, Database usernames && id, database password"){
    //         "does something id yet"
    //     }
    //     else{
    //       "invalid, password or usernames is unavailable."
    //     }
    // }

// }
</script>
