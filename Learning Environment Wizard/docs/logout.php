<?php
// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
// source: https://www.tutorialspoint.com/php/php_mysql_login.htm
   session_start();
   
   if(session_destroy()) { // destroy the current session, user is logged out
      header("Location: http://lewizard.000webhostapp.com/docs/login.html"); // go back to login page
   }
?>