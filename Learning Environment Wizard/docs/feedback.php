<?php
include("config.php");
// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome

if ($_SERVER["REQUEST_METHOD"] == "POST") { //retrieve and validate data
  $location = test_input($_POST["location"]);
  $time = test_input($_POST["time"]);
  $task = test_input($_POST["task"]);
  $collaboration = test_input($_POST["collaboration"]);
  $attributes = test_input($_POST["attributes"]);
  $satisfaction = test_input($_POST["satisfaction"]);
  $recommend = test_input($_POST["recommend"]);
  $rating = test_input($_POST["rating"]);
  $tipps = '"' . test_input($_POST["tipps"]) . '"';

}

// source: https://www.w3schools.com/php/php_form_validation.asp
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data, ENT_QUOTES);
  return $data;
}

// query for inserting survey data into the feedback database
$query = "INSERT into `feedback_db`(`location`, `time`, `task`, `collaboration`, `attributes`, `satisfaction`, `recommend`, `rating`, `tipps`) VALUES ('$location', '$time', '$task', '$collaboration', '$attributes', '$satisfaction', '$recommend', '$rating', '$tipps')";


if ($link->query($query) === TRUE) {
    echo "true"; // data was successfully written into the database
} else {
    echo "Error: " . $query . "<br>" . $link->error; // failure
}

$link->close();

?>

