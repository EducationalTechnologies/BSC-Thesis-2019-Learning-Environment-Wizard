// Bianca Lien (6306494), Goethe-Universität 2020, getestet mit Google Chrome
// source for basic wizard design: https://www.sitepoint.com/simple-javascript-quiz/?utm_source=sitepoint&utm_medium=articletile&utm_campaign=comments&utm_term=javascript/

const wizardContainer = document.getElementById('wizard');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let currentSlide = 0;
var lastCheckedSlide = -1;
// array of wizard questions and their answer options:
const myQuestions = [
    {
    	question: "Wirst du an komplexen Aufgaben oder an simplen Aufgaben (z. B. Korrekturlesen) arbeiten?",
    	answers: {
    		a: "simple Aufgaben",
    		b: "komplexe Aufgaben",
    		c: "beides",
    		d: "keine Ahnung"
    	}
    },
    {
    	question: "Macht dir die Aufgabe, die du bearbeiten willst, Spaß oder bearbeitest du sie nur aus anderen Gründen (z. B. für gute Noten)?",
    	answers: {
    		a: "Die Aufgabe macht mir Spaß.",
    		b: "Ich bearbeite die Aufgabe nur aus anderen Gründen.",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Würdest du dich als introvertiert bezeichnen?",
    	answers: {
    		a: "ja",
    		b: "nein",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Wirst du in wenigen Stunden schlafen gehen?",
    	answers: {
    		a: "ja",
    		b: "nein",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Hast du Zugang zu kaltweißem Licht oder Tageslicht?",
    	answers: {
    		a: "ja",
    		b: "nein",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Hast du Rosmarin- oder Zitronenöl bei dir? Wenn nein, hast du andere Duftöle bei dir (außer ggf. Lavendel)?",
    	answers: {
    		a: "Ja, ich habe Rosmarin- oder Zitronenöl.",
    		b: "Ich habe kein Rosmarin-/Zitronenöl, aber andere Duftöle.",
    		c: "Ich habe keine Duftöle.",
    		d: "keine Ahnung"
    	}
    },
    {
    	question: "Magst du den Duft von deinem/von einem deiner Duftöle (außer ggf. Lavendel)?",
    	answers: {
    		a: "ja",
    		b: "nein",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Ist die Temperatur drinnen oder draußen angenehmer?",
    	answers: {
    		a: "drinnen",
    		b: "draußen",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Hast du gerade die Möglichkeit, irgendwo hinzugehen?",
    	answers: {
    		a: "Ja, ich kann irgendwo hingehen.",
    		b: "Nein, ich muss hier bleiben.",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Bist du gerade in Frankfurt a.M. oder könntest du da hingehen?",
    	answers: {
    		a: "ja",
    		b: "nein",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Ist ein Campus in deiner Nähe? Wenn ja, welcher?",
    	answers: {
    		a: "Westend",
    		b: "Bockenheim",
    		c: "Riedberg",
    		d: "Niederrad",
    		e: "Ginnheim",
            f: "Kein Campus ist in meiner Nähe.",
    		g: "keine Ahnung"
    	}
    },
    {
    	question: "Würdest du jetzt gerne Musik beim Lernen hören?",
    	answers: {
    		a: "ja",
    		b: "nein",
    		c: "keine Ahnung"
    	}
    },
    {
    	question: "Welche der folgenden Kategorien beschreibt am besten die Aufgabe, die du bearbeiten willst?",
    	answers: {
    		a: "Korrekturlesen",
    		b: "Brainstorming/Kreativitätsaufgabe",
    		c: "Lesen",
    		d: "Auswendiglernen",
    		e: "Sprechen/Hören",
    		f: "keine Ahnung"
    	}
    },
    {
    	question: ""
    }
];


function showSlide(n) {
// function to hide the current slide (= question) and make slide n visible
slides[currentSlide].classList.remove('active-slide'); // hide current slide
slides[n].classList.add('active-slide'); // make slide n visible
currentSlide = n; // set slide n to current slide
if(currentSlide === 0){ // first slide is the slide question, so the previousbutton is hidden
  previousButton.style.display = 'none';
}
else{ // current slide is not the first slide, so the previousbutton is visible
  previousButton.style.display = 'inline-block';
}
if(currentSlide === slides.length-1){ // current slide is last slide, so the nextbutton is hidden and the submitbutton is visible
  nextButton.style.display = 'none';
  submitButton.style.display = 'inline-block';
}
else{ // current slide is not last slide, so the submitbutton is hidden
  submitButton.style.display = 'none';
    if (currentSlide > lastCheckedSlide) { // no answer of the current question has been selected yet
        nextButton.style.display = 'none'; // the next button is hidden to enforce answering of question
    }
    else { // an answer has already been selected so the user is allowed to go to the next question
        nextButton.style.display = 'inline-block';
    }
    

}
}

function showNextSlide() {
    // function to calculate which next slide must be displayed, according to the wizard flowchart
    var nextslide = currentSlide;
    if (currentSlide === 0) {
        if (document.getElementById("0b").checked === true) {
            nextslide += 1; // skip one question
        }
        else if (document.getElementById("0c").checked === true) {
            nextslide += 1;
        }
    }
    else if (currentSlide === 3) {
        if (document.getElementById("3a").checked === true) {
            nextslide += 1;
        }
    }
    else if (currentSlide === 5) {
        if (document.getElementById("5c").checked === true) {
            nextslide += 1;
        }
        else if (document.getElementById("5d").checked === true) {
            nextslide += 1;
        }
    }
    else if (currentSlide === 8) {
        if (document.getElementById("8b").checked === true) {
            nextslide += 2; // skip two questions
        }
    }
    else if (currentSlide === 9) {
        if (document.getElementById("9b").checked === true) {
            nextslide += 1;
        }
    }
    else if (currentSlide === 12) { // last slide will be the next slide
        // display all questions and their currently checked answers so user can check them before submission
        var output = [`<p style='color:red;'>Alle Angaben korrekt?</p><br><ul type="round">`];
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
            if (questionNumber !== 13) { // display all questions except for last one
                output.push(`<li>${currentQuestion.question} Antwort: `);
            }
            for(var letter in currentQuestion.answers){ // letter = answer option index
                if (checkedAnswers.includes(`${questionNumber+letter}`)) { // answer is currently checked
                    output.push(`${currentQuestion.answers[letter]}</li>`); // display currently checked answer
                }
            }
          }
        );
        output.push(`</ul>`);
        slides[12].classList.remove('active-slide'); // make current slide invisible so nothing is displayed in wizard container
        wizardContainer.classList.remove("wizard-container"); // remove size settings of wizard container
        document.getElementById("instructions").classList.remove("box");
        document.getElementById("instructions").innerHTML = "";
        resultsContainer.innerHTML = output.join(''); // display data in results container
    }
    showSlide(nextslide+1); // call function to display the next question
}

function showPreviousSlide() {
// function to calculate which previous slide must be displayed, according to the wizard flowchart
var nextslide = currentSlide;
    if (currentSlide === 2) {
        if (document.getElementById("0b").checked === true) {
            nextslide -= 1; // skip one question
        }
        else if (document.getElementById("0c").checked === true) {
            nextslide -= 1;
        }
    }
    else if (currentSlide === 5) {
        if (document.getElementById("3a").checked === true) {
            nextslide -= 1;
        }
    }
    else if (currentSlide === 7) {
        if (document.getElementById("5c").checked === true) {
            nextslide -= 1;
        }
        else if (document.getElementById("5d").checked === true) {
            nextslide -= 1;
        }
    }
    else if (currentSlide === 11) {
        if (document.getElementById("8b").checked === true) {
            nextslide -= 2; // skip two questions
        }
        else if (document.getElementById("9b").checked === true) {
            nextslide -= 1;
        }
    }
    if (currentSlide !== 13) { // current slide is not last slide
        showSlide(nextslide-1);
    }
    else { // current slide is last slide
        wizardContainer.classList.add("wizard-container"); // add size settings to wizard again
        document.getElementById("instructions").classList.add("box");
        document.getElementById("instructions").innerHTML = "Wähle eine Antwort aus und klicke auf 'Weiter'.<br>Der 'Weiter' Button erscheint, sobald du eine Antwort ausgewählt hast.";
        resultsContainer.innerHTML = ""; // remove data from results container
        showSlide(12); // make slide before last slide visible again
    }
}


function buildWizard(){
    // function to build wizard html out of array of questions
    
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = []; // contains html answer choices of question
        for(var letter in currentQuestion.answers){ // letter = answer option index
            answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}" id="${questionNumber}${letter}" onclick="enableNextButton()">
              ${currentQuestion.answers[letter]}
            </label>` // html button for each answer (id is questionnumber concatenated with answer option letter)
            );
        }
        
    
        // put question and its answers in output variable
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("<br>")} </div>
          </div>`
        );
      }
    );

    wizardContainer.innerHTML = output.join(''); // display quiz in wizard container
}

const previousButton = document.getElementById("previous");

function showResults(){
    // function to calculate the results, according to the framework of wizard

    var results = ["","","","","","","",""]; // eight different result texts
    const output = [`<div>Dein Ergebnis:</div>`];
    
    if (checkedAnswers.includes("0a") || checkedAnswers.includes("0d")){ // answer a or d was checked in question 0
        results[0] = "Lerne alleine.";
    }
    else if (checkedAnswers.includes("0b") || checkedAnswers.includes("1b") || checkedAnswers.includes("1c")) {
        results[0] = "Lerne zusammen mit anderen Studenten. Stellt sicher, dass ihr euch gut hören könnt. Wenn es in eurem Raum kalt ist, wie wäre es damit, eure Hände an einer heißen Tasse Kaffee oder Tee zu wärmen?";
    }
    else if (checkedAnswers.includes("0c")) {
        results[0] = "Bearbeite die einfachen Aufgaben alleine. Die komplexen Aufgaben kannst du mit anderen Studenten bearbeiten. Stellt sicher, dass ihr euch gut hören könnt. Wenn es in eurem Raum kalt ist, wie wäre es damit, eure Hände an einer heißen Tasse Kaffee oder Tee zu wärmen?";
    }
    if (checkedAnswers.includes("2a")) {
        results[1] = "Achte besonders darauf, dass deine Lernumgebung still ist.";
    }
    if (checkedAnswers.includes("3a")) {
        results[2] = "Lerne möglichst mit warmweißen Licht und minimiere ggf. Tageslicht. Positioniere dich so, dass du nicht geblendet wirst.";
    }
    if (checkedAnswers.includes("4a")) {
        results[2] = "Lerne mit Tageslicht oder alternativ kaltweißem Licht. Positioniere dich so, dass du nicht geblendet wirst.";
    }
    else if (checkedAnswers.includes("4b") || checkedAnswers.includes("4c")) {
        results[2] = "Lerne mit möglichst hellem Licht, solange es für deine Augen angenehm ist. Positioniere dich so, dass du nicht geblendet wirst.";
    }
    if ((checkedAnswers.includes("5a") || checkedAnswers.includes("5b")) && (checkedAnswers.includes("6b")) !== true) {
        if (checkedAnswers.includes("5a")) {
            results[3] = "Benutze das Rosmarin- oder Zitronenöl (z. B. auf einem Duftstein), solange dich der Duft nicht ablenkt.";
        }
        else {
            results[3] = "Benutze (z. B. auf einem Duftstein) dein/eins deiner Duftöle, das du magst, solange dich der Duft nicht ablenkt. Benutze kein Lavendelöl.";
        }
    }
    if (checkedAnswers.includes("7a") || checkedAnswers.includes("8b")) {
        results[4] = "Lerne drinnen. Denk daran, regelmäßig zu lüften, v. a. bei Kopfweh, Müdigkeit oder Übelkeit.";
    }
    else if (checkedAnswers.includes("7b") && (checkedAnswers.includes("8b") !== true)){
        results[4] = "Lerne draußen, solange das Wetter angenehm ist. Denk daran, deine Kleidung an die Temperaturen anzupassen und nicht in der direkten Sonne zu sitzen.";
    }
    else if (checkedAnswers.includes("7c") && (checkedAnswers.includes("8b") !== true)) {
        results[4] = "Wenn du willst, kannst du rausgehen und bei schönem Wetter dort lernen. Wenn du drinnen bleibst, denk daran, regelmäßig zu lüften, v. a. bei Kopfweh, Müdigkeit oder Übelkeit.";
    }
    if (checkedAnswers.includes("10a")) {
        results[5] = "Lerne am Campus Westend.";
    }
    else if (checkedAnswers.includes("10b")) {
        results[5] = "Lerne am Campus Bockenheim.";
    }
    else if (checkedAnswers.includes("10c")) {
        results[5] = "Lerne am Campus Riedberg.";
    }
    else if (checkedAnswers.includes("10d")) {
        results[5] = "Lerne am Campus Niederrad.";
    }
    else if (checkedAnswers.includes("10e")) {
        results[5] = "Lerne am Campus Ginnheim.";
    }
    else if (checkedAnswers.includes("10f") || checkedAnswers.includes("10g")) {
        results[5] = "Lerne in einer Bibliothek, einem Buchladen oder einem ruhigen Cafe.";
    }
    if ((checkedAnswers.includes("9b") !== true) && (checkedAnswers.includes("8b") !== true) && ((results[4] !== "Lerne drinnen. Denk daran, regelmäßig zu lüften, v. a. bei Kopfweh, Müdigkeit oder Übelkeit.") && results[4] !== "")) {
        results[5] = results[5].concat(" Du könntest auch in den Palmengarten oder Grüneburgpark gehen.")
    }
    if (checkedAnswers.includes("11a")) {
        if (checkedAnswers.includes("2a")) {
            results[6] = "Auch wenn du beim Lernen gerne Musik hörst, wäre es wahrscheinlich besser für dich, keine Musik zu hören. Wenn du trotzdem Musik hören willst, dann nur instrumentale Musik ohne Liedtext.";
        }
        else {
            results[6] = "Wenn du Musik hören willst, dann nur instrumentale Musik ohne Liedtext.";
        }
    }
    else if (checkedAnswers.includes("11b") || checkedAnswers.includes("11c")) {
        results[6] = "Höre keine Musik beim Lernen.";
    }
    if (checkedAnswers.includes("12a") || checkedAnswers.includes("0a")) {
        results[7] = "Durchgehende Geräusche werden dich nicht viel stören. Du kannst also ruhig in ein Cafe oder in den Park gehen, wenn du willst.";
    }
    else if (checkedAnswers.includes("12b")) {
        results[7] = "Gehe am besten irgendwo hin, wo du einen mittelstarken Geräuschpegel hast, z. B. in ein Cafe oder in den Park. Wenn du am PC arbeitest, schalte darauf einen blauen Hintergrund ein.";
    }
    else if (checkedAnswers.includes("12c") || checkedAnswers.includes("12e")) {
        results[7] = "Achte besonders auf eine leise Umgebung.";
    }
    else if (checkedAnswers.includes("12d")) {
        results[7] = "Achte besonders auf eine leise Umgebung. Wenn du am PC arbeitest, schalte darauf einen roten Hintergrund ein.";
    }
        

    
    
    results.forEach(
      (result) => {
          if (result) { // add result to output if it is not empty
              output.push(`<br>${result}`);
          }
      }
     );
     
    wizardContainer.innerHTML = '';
    previousButton.style.display = "none";
    submitButton.style.display = "none";
    if (checkedAnswers.includes("10f")) { // no campus was selected
        resultsContainer.innerHTML = output.join('');
    }
    else { // a specific campus was selected; add locations table of that campus to output
        locationRec();
        resultsContainer.innerHTML = output.join('') + "<br><br>Weitere Tipps zu Lernumgebungen allgemein und Tipps von anderen Studierenden zu spezifischen Lernorten findest du <a href='tipps.html'>hier.</a>";
    }
}

// build and display wizard html
buildWizard();


const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide"); // all elements with class "slide" (= a question and its answers)


// show first question:
showSlide(currentSlide);


function enableNextButton() {
    // function to display the next button of a previously unanswered question one a radio button is checked
    // to avoid skipping of questions
    
    if (currentSlide > lastCheckedSlide) {
        lastCheckedSlide = currentSlide;
        nextButton.style.display = 'inline-block';
    }
}


function currentCheckedAnswer(){
    // function to determine the checked answer on the current slide and update the array checkedAnswers with all checked answers (used later when calculating the results, could also be used to save data in database)
    checkedOption = "";
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        if (questionNumber === currentSlide) {
            for(var letter in currentQuestion.answers){ //letter = answer option index
                if (document.getElementById(`${currentSlide+letter}`).checked){ // answer option is currently checked
                    checkedOption = `${currentSlide+letter}`;
                    checkedAnswers.push(checkedOption); // add answer id to checkedAnswers array
                }
                else if (checkedAnswers.includes(`${currentSlide+letter}`)) { // answer option is not currently checked but used to be the checked option for that question
                    var oldAnswer = `${currentSlide+letter}`;
                    // source for deleting element from array: https://mariusschulz.com/blog/removing-elements-from-javascript-arrays (20.1.20)
                    checkedAnswers = checkedAnswers.filter(answer => answer !== oldAnswer); // delete id from checkedAnswers array
                }
            }
        }
      }
    );
    return checkedOption;
}


var checkedAnswers = [];

function nextSlideFunction(){
    // function to save currently checked answer option and to display the next slide
    currentCheckedAnswer();
    showNextSlide();
}

function locationRec() {
    // function to request location table on the selected campus
    
    var nearCampus = "";
    if (checkedAnswers.includes("10a")) {
        nearCampus = "Westend";
    }
    else if (checkedAnswers.includes("10b")) {
        nearCampus = "Bockenheim";
    }
    else if (checkedAnswers.includes("10c")) {
        nearCampus = "Riedberg";
    }
    else if (checkedAnswers.includes("10d")) {
        nearCampus = "Niederrad";
    }
    else if (checkedAnswers.includes("10e")) {
        nearCampus = "Ginnheim";
    }
    else if (checkedAnswers.includes("10g")) {
        nearCampus = "other";
    }
    
    if (nearCampus) { // a campus was selected
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() { // table was successfully retrieved
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("locations").innerHTML = "<br><br>Unten befindet sich eine Übersicht an empfohlenen Lernorten in deiner Nähe: <br>" + this.responseText; // display table
            }
        };
        xmlhttp.open("GET","/docs/locations.php?campus="+nearCampus,true);
        xmlhttp.send(); // send request for location table on the selected campus
    }
    else { // no campus was selected; display nothing
        document.getElementById("locations").innerHTML = "";
        return;
    }
}


submitButton.addEventListener('click', showResults); // display results when submit button is clicked
previousButton.addEventListener("click", showPreviousSlide); // display next question when next button is clicked
nextButton.addEventListener("click", nextSlideFunction); // display previous question when previous button is clicked
