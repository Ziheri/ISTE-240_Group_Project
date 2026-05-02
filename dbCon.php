<?php
    // Connect to MySQL Server using mysqli & Adminer credentials
    //mysqli(server, username, password, dbName)
    $mysqli = new mysqli('localhost', 'iste240t50', 'Potations4#emydidae', 'iste240t50');
    //$mysqli is holding an object! that we can access with some php functions
    // $mysqli->method() & $mysqli->property()
    if(mysqli_connect_errno()) { // If this is true/exists, something when wrong with my conditional
        echo 'connection failed: ' . mysqli_connect_error();
        exit();
    } else {
        // echo 'connection good';
    }

?>