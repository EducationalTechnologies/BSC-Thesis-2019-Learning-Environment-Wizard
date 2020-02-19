// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome

function submit_survey() {
    // function to send review data to server
    
    // retrieve survey form data
    // attributes/checkboxes:
    var attributes = [];
    var html_attributes = document.getElementsByName("attributes[]");
    for (var i = 0; i < html_attributes.length; i++) {
        if (html_attributes[i].checked) {
            attributes.push(html_attributes[i].value);
        }
    }
    attributes = attributes.join(); // convert to string for post
    // drop down menu:
    var location = document.getElementById("location").value;
    var time = document.getElementById("time").value;
    var tipps = document.getElementById("tipps").value;
    tipps = tipps.replace(/(\r\n|\n|\r)/gm, " "); // source: https://stackoverflow.com/a/10805198
    // radio button:
    var task = document.querySelector('input[name="task"]:checked').value;
    var collaboration = document.querySelector('input[name="collaboration"]:checked').value;
    var satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    var recommend = document.querySelector('input[name="recommend"]:checked').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    
    // create data for the request to write review into feedback database
    var data = "location="+location+"&time="+time+"&task="+task+"&collaboration="+collaboration+"&attributes="+attributes+"&satisfaction="+satisfaction+"&recommend="+recommend+"&rating="+rating+"&tipps="+tipps;
    
    xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // trim source: http://vertstudios.com/blog/avoiding-ajax-newline-pitfall/
                if (this.responseText.trim() == "true") { // review was successfully written into feedback database
                    document.getElementById("survey").innerHTML = "Vielen Dank für deine Bewertung.<br>Weiteren Lernort bewerten?<br>";
                }
                else { // failure
                    document.getElementById("survey").innerHTML = "Leider konnte deine Bewertung nicht empfangen werden.<br>Bitte versuche es später nochmal.";
                }
            }
        };

        xmlhttp.open("POST","/docs/feedback.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(data); // send request to write review into feedback database
}