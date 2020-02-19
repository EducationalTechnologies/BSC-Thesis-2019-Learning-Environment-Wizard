<?php
include("config.php");
// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome

$campus = $_GET['campus'];

if (($campus == "other") or ($campus == "tipps")) { // no campus was selected or the table is for the tipps section 
    $sql="SELECT * FROM `locations_db`"; // all locations will be displayed
}
else { // a specific campus was selected
    $sql="SELECT * FROM `locations_db` WHERE `campus` = '" . $campus . "'"; // only display locations on that campus
}

$result = mysqli_query($link,$sql); // retrieve data from locations database


// build table containing the information
echo "<div id='table'><table>
<tr>
<th>Name</th>
<th>Sterne</th>
<th>Empfehlung</th>
<th>Warnungen</th>";
if ($campus == "tipps") {
    echo "<th>Tipps</th>"; // column with links to tipps only displayed in the tipps table
}
echo "<th>Adresse</th>
<th>Öffnungszeiten</th>
<th>Tische und Stühle</th>
<th>Essen/Trinken erlaubt</th>
<th>Essen/Trinken zum Verkauf</th>
<th>Toiletten</th>
<th>Sonstiges</th>
</tr>";


while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['location_name'] . "</td>";
    $sql3="SELECT `location`,`recommend`,`rating`,`attributes` FROM `feedback_db` WHERE `location`='" . $row['location_name'] . "'"; // query for retrieving feedback information on a location
    $result3 = mysqli_query($link,$sql3);
    if (mysqli_num_rows($result3) == 0) { // location has not been reviewed yet
        echo "<td><i><font color='#9e9e9e'>keine Bewertungen</font></i></td><td><i><font color='#9e9e9e'>keine Bewertungen</font></i></td><td><i><font color='#9e9e9e'>keine Bewertungen</font></i></td>";
    }
    else { // location has at least one review
        $numOfReviews = 0;
        $sumOfStars = 0;
        $numOfRecommend = 0;
        $attributes = array();

        while($row3 = mysqli_fetch_array($result3)) { // calculate sum of ratings and sum of recommendations, and gather attributes
            $numOfReviews = $numOfReviews + 1;
            $sumOfStars = $sumOfStars + $row3['rating'];
            if ($row3['recommend'] == "ja") {
                $numOfRecommend = $numOfRecommend + 1;
            }
            if ($row3['attributes'] !== "") { // attributes were selected in the review
                $att_array = explode(',', $row3['attributes']); // create array of attributes (since one word in db)
                foreach ($att_array as &$value) {
                    if (in_array($value, $attributes) == false) { // single attribute has not been included yet
                        array_push($attributes,$value); // single attribute is included in aggregated array of attributes
                    }
                }
            }
        }
        $avgStars = $sumOfStars/$numOfReviews; // average rating
        $avgStars = round($avgStars);
        echo "<td>";
        for ($i = 0; $i < $avgStars; $i++) {
            echo "&#11088"; // display according number of stars
        }
        echo "</td>";
        $avgRecommend = round($numOfRecommend/$numOfReviews,2)*100; // calculate percentage of recommendations
        echo "<td>" . $avgRecommend . "%</td>"; // display percentage of recommendations
        if ($attributes == []) {
            echo "<td>keine</td>"; // no attributes were selected in all reviews
        }
        else { // at least one attribute was selected in at least one review
            echo "<td bgcolor='#ff4444'>";
            foreach ($attributes as &$attribute) {
                echo $attribute . "\n";
            }
            echo "</td>";
        }
    }
    if ($campus == "tipps") { // add links to tipps for tipps table
        echo "<td><a href='#" . $row['location_name'] . "'>Zu den Tipps!</a></td>";
    }
    echo "<td>" . $row['address'] . "</td>";
    echo "<td>" . $row['opening_hours'] . "</td>";
    echo "<td>" . $row['tables'] . "</td>";
    echo "<td>" . $row['food_allowed'] . "</td>";
    echo "<td>" . $row['food_offered'] . "</td>";
    echo "<td>" . $row['restrooms'] . "</td>";
    echo "<td>" . $row['tech'] . "</td>";
    echo "</tr>";
}

echo "</table></div><br>";


if ($campus == "tipps") { // for the tipps page, also display students' tipps from reviews 
    $result = mysqli_query($link,$sql);
    while($row = mysqli_fetch_array($result)) {
        echo "<div id='" . $row['location_name'] . "'><p><b>" . $row['location_name'] . "</b><br><br><a href='review.html'>Jetzt Lernort bewerten!</a><br><ul type='round'>";
        $sql2="SELECT `tipps` FROM `feedback_db` WHERE `location`='" . $row['location_name'] . "'"; // retrieve tipps
        $result2 = mysqli_query($link,$sql2);
        while($row2 = mysqli_fetch_array($result2)) {
            if ($row2['tipps'] !== '""') {
                echo "<li>" . $row2['tipps'] . "</li>"; // display tipps
            }
        }
        
        echo "</ul><br><a href='#table'>Zurück nach oben</a></p><br></div>";
    }
}

mysqli_close($link);
?>