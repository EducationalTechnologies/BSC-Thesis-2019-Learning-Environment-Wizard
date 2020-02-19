<?php

// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome


// connection information
$host="localhost"; // Host name 
$username="id11793799_biancalien"; // username 
$password="***********"; // password 
$db_name="id11793799_feedback_db"; // Database name 


// db connection
$link = mysqli_connect($host, $username, $password, $db_name);

// no connection could be made
if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

?>