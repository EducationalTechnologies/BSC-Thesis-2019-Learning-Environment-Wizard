<?php
// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
// source: https://www.tutorialspoint.com/php/php_mysql_login.htm
   
   session_start();
   include("config.php");
   
    // source: https://www.w3schools.com/php/php_form_validation.asp
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data, ENT_QUOTES);
      return $data;
    }
    
    $username = $_SESSION['login_user']; // retrieve username from current session
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") { // user wants to update preference 
      $preference = test_input($_POST["preference"]); // validate data
      $query = "UPDATE `users_db` SET `preference` = '$preference' WHERE `username` = '$username'"; // query for updating the user's preference in the users database
      $result = mysqli_query($link,$query);
      if ($link->query($query) === TRUE) {
        echo "true"; // preference was successfully udpated
      } else {
        echo "Error: " . $query . "<br>" . $link->error; // failure
      }
    
      $link->close();
    }
    else if ($_SERVER["REQUEST_METHOD"] == "GET") { // user wants to view preference
      $query = "SELECT `preference` FROM `users_db` WHERE `username` = '$username'"; // query for retrieving preference from users database
      $result = mysqli_query($link,$query);
       while($row = mysqli_fetch_array($result)) {
           if ($row['preference'] !== NULL) { // user has saved a preference
               echo "An diesem Ort lerne ich am besten: ";
               echo $row['preference']; // display preference
           }
           else { // user has not saved a preference yet
               echo "Du hast noch keine Präferenzen angegeben.";
           }
       }
       $link->close();
    }
    
?>