// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
function update_preferences() { // function to update preference in users database
    
    var preference = document.getElementById("preference").value; // retrieve preference data
    
    var data = "preference="+preference; // create data for xmlhttprequest
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.trim() == "true") { // preference was successfully updated
                document.getElementById("save_preferences").innerHTML = "<center><div class='box'>Deine Präferenzen wurden gespeichert!</div><br>Präferenzen aktualisieren:<div id='save_preferences'><form method='post' action='javascript:update_preferences();' id='preferences_form'>An diesem Ort kann ich am besten lernen: <input type='text' id='preference' required><br><input type='submit' id='submit' value='Speichern'></form></div></div>";
            }
        }
    };
    
    xmlhttp.open("POST","/docs/preferences_display_update.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data); // send request to update preference
}

function show_preferences() { // function to retrieve preference from users database
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // preference was successfully retrieved
            document.getElementById("user_preferences").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","/docs/preferences_display_update.php?",true);
    xmlhttp.send(); // send request to retrieve user preference
}