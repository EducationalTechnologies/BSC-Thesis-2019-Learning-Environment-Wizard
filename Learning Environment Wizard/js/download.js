// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome

function download_csv() {
    
// function for downloading feedback data as csv

var separator = document.querySelector('input[name="separator"]:checked').value; // selected separator symbol

xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // trim source: http://vertstudios.com/blog/avoiding-ajax-newline-pitfall/
        data = this.responseText.trim();
        
        // source for download: https://stackoverflow.com/a/23922475
        var pom = document.createElement('a');
        var blob = new Blob([data],{type: 'text/csv;charset=utf-8;'});
        var url = URL.createObjectURL(blob);
        pom.href = url;
        pom.setAttribute('download', 'Lernortbewertungen.csv');
        pom.click();
    }
};
xmlhttp.open("GET","/docs/survey_data.php?separator="+separator,true); // request for feedback data separated by separator
xmlhttp.send();

}