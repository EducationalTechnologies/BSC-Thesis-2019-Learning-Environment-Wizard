// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
function login() {
    // function to log in user and display content after successful or unsuccessful login
    
    // retrieve login form data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = "username="+username+"&password="+password; // create data for xmlhttprequest
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "success") {
                if (username == "admin") { // user is admin and will be able to download feedback data as CSV
                    document.getElementById("login_div").innerHTML = "<center><br><div id='download'>Daten als CSV exportieren:<br>Trennzeichen:<br><label><input type='radio' name='separator' value='semicolon' required>Semikolon</label><br><label><input type='radio' name='separator' value='comma'>Komma</label><br><input type='submit' name='submit' onclick='download_csv()' value='CSV Download'><p></form></div><form action='logout.php'><input type='submit' value='Ausloggen' /></form></p></center>";
                }
                else { // user is not admin and will be able to view and update preferences
                    document.getElementById("login_div").innerHTML = "<center><h2>Präferenzen</h2><div><script src='../js/preferences.js'></script><input type='button' value='Präferenzen anzeigen' onclick='show_preferences();' /><div id='user_preferences'></div></div><br><div><div id='save_preferences'>Präferenzen aktualisieren:<br><form method='post' action='javascript:update_preferences();' id='preferences_form'>An diesem Ort kann ich am besten lernen: <input type='text' id='preference' required><br><input type='submit' id='submit' value='Speichern'></form></div></div><p><form action='logout.php'><input type='submit' value='Ausloggen' /></form></p></center>";
                }
            }
            else if (this.responseText == "username fail") { // no user is registered under the given username
                document.getElementById("login_div").innerHTML = "<br><center><p>Es ist kein User unter diesem Usernamen bekannt.</p><br><form action='logout.php'><input type='submit' value='Zurück zum Login' /></form></center>";
            }
            else if (this.responseText == "password fail") { // password is incorrect (but user exists)
                document.getElementById("login_div").innerHTML = "<br><center><p>Das Passwort ist falsch.</p><br><form action='logout.php'><input type='submit' value='Zurück zum Login' /></form></center>";
            }
            else { // failure
                document.getElementById("login_div").innerHTML = "error";
            }
        }
    };

    xmlhttp.open("POST","/docs/login.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data); // send request to log in user
}