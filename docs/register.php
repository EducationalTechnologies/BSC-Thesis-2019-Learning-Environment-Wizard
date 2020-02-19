<?php
// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
   
   session_start();
   include("config.php");
   
    // source: https://www.w3schools.com/php/php_form_validation.asp
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data, ENT_QUOTES);
      return $data;
    }
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") { // retrieve and validate data
      $username = test_input($_POST["username"]);
      $password = test_input($_POST["password"]);
    }
    
    $sql="SELECT `username` FROM `users_db` WHERE `username` = '$username'"; // query for selecting user from the users database with the same username
    $result = mysqli_query($link,$sql);
        
    if (mysqli_num_rows($result) > 0) { // username is already taken
        echo "username taken";
        $link->close();
    }
    else { // username is not taken yet
        $hashed_password = password_hash($password, PASSWORD_DEFAULT); // hash password
        $query = "INSERT into `users_db`(`username`, `password`) VALUES ('$username', '$hashed_password')"; // query for entering new user and password into the users database
    
        if ($link->query($query) === TRUE) {
            echo "true"; // user was successfully entered into the users database
        } else {
            echo "Error: " . $query . "<br>" . $link->error; // failure
        }
        
        $link->close();
    }

?>