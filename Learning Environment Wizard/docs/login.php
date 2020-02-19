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
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") { // validate data
      $username = test_input($_POST["username"]);
      $password = test_input($_POST["password"]);
    }
    
    // query for checking if a user with the given username exists in database
    $query = "SELECT `username`, `password` FROM `users_db` WHERE `username` = '$username'";


    $result = mysqli_query($link,$query);
        
    if (mysqli_num_rows($result) == 1) { // one user with the given username exists in database
        while($row = mysqli_fetch_array($result)) {
            if (password_verify($password, ($row['password']))) {// check if password is correct
                // source: https://www.tutorialspoint.com/php/php_mysql_login.htm
                $_SESSION['login_user'] = $row['username'];
                echo "success"; // password was correct, user is logged in
                break;
            }
            else { // password was not correct
                echo "password fail";
            }
                
        }
    }
    elseif (mysqli_num_rows($result) == 0) { // no user with the given username exists in database
        echo "username fail";
    }
    
    
    $link->close();

?>