// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("locationtipps").innerHTML = this.responseText;
    }
};
xmlhttp.open("GET","/docs/locations.php?campus=tipps",true); // request data on all locations and student tipps
xmlhttp.send();