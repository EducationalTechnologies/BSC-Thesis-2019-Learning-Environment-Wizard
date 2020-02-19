<?php
// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
include("config.php");

$separator = $_GET['separator']; // retrieve data (separator symbol for CSV document)

$sql="SELECT * FROM `feedback_db`"; // query for retrieving all data from the feedback database

$result = mysqli_query($link,$sql);


if ($separator == "semicolon") {
    $sepSymbol = ";";
}
else {
    $sepSymbol = ",";
}

// column names
echo "location" . $sepSymbol . "time" . $sepSymbol . "task" . $sepSymbol . "collaboration" . $sepSymbol . "attributes" . $sepSymbol . "satisfaction" . $sepSymbol . "recommend" . $sepSymbol . "rating" . $sepSymbol . "tipps\n";

while($row = mysqli_fetch_array($result)) {
    echo $row['location'] . $sepSymbol; // separate data with separator symbol
    echo $row['time'] . $sepSymbol;
    echo $row['task'] . $sepSymbol;
    echo $row['collaboration'] . $sepSymbol;
    if ($sepSymbol == ",") { // separator symbol is comma
        echo str_replace(",",";",$row['attributes']) . $sepSymbol; // comma in attributes is replaced with semicolon
    }
    else { // separator symbol is semicolon and attributes do not need to be changed
        echo $row['attributes'] . $sepSymbol;
    }
    echo $row['satisfaction'] . $sepSymbol;
    echo $row['recommend'] . $sepSymbol;
    echo $row['rating'] . $sepSymbol;
    echo $row['tipps'] . "\n";
}

mysqli_close($link);
?>