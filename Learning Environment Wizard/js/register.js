// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome

function register() {
    // function to register user
    
    // retrieve registration form data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var second_password = document.getElementById("second_password").value;
    
    if (password !== second_password) { // both passwords are not the same
        alert("Die Passwörter müssen übereinstimmen.");
    }
    else { // passwords are the same
        var data = "username="+username+"&password="+password; // create data for xmlhttprequest
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) { // request was successful
                if (this.responseText.trim() == "true") { // user was successfully registered
                    document.getElementById("register_div").innerHTML = "<center><br><p>Deine Registrierung war erfolgreich!</p><br>Jetzt einloggen:<form action='../docs/login.html'><input type='submit' value='Zum Login' /></form></center>";
                }
                else if (this.responseText.trim() == "username taken") { // username is already taken
                    alert("Dieser Username ist bereits vergeben. Bitte wähle einen anderen Usernamen.");
                }
            }
    };
    
    xmlhttp.open("POST","/docs/register.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data); // send request to register user
    }
}