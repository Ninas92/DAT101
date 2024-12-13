"use strict";
/*
const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];


const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
*/


/*const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];
*/

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.
Use the values from the textboxes and display the results in the labels.*/

const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
console.log("Height = " + height);
console.log("Width = " + width);

const perimeter = (height + height + width + width);
const area = (height * width);
console.log("Omkrets: " + perimeter + "Area: " + area);

console.log("Width er av typen: " + typeof width); //Output: undefined
console.log("Heigth er av typen: " + typeof height); 

const txtTask1Output = document.getElementById("txtTask1Output");
txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; Areal: " + area;
}


//--- Part 2 ----------------------------------------------------------------------------------------------
/* ● Part 2: Dynamic Word List (15 points)
Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".
○ Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)*/



const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");
 
function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  switch(key) {
    case "Enter":
      const words = txtTask2Word.value.split(" "); //.split for å få med alle ordene
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* ● Part 3: Checkbox Evaluation (15 points)
Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output.*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = ""; //Tømmer teksten
function cmbTask3CheckAnswerClick() {
const chkTask3 = document.getElementsByName("chkTask3");
for(let i = 0; i <chkTask3.length; i++) {

  /*TODO: Sjekk om checkboxen er huket av, og skriv ut resultatet i txtTaskOutput.
  Skriv ogs ut hvilken checkbox som er huket av, og hva verdien er.
  Det er også mulig å skrive hele teksten til hver checkbox i txtTask33Output.
  */
 const checkBox = chkTask3[i];
 if(checkBox.checked) {
  const value = checkBox.value;
  text += "Du har valgt nummer " + value + ".<br />"; 
   }
  }
  txtTask3Output.innerHTML = text;
  text = ""; //Tømmer teksten


 // txtTask3Output.innerHTML = "Number of words: " + task3Words.length + "<br>" + task3Words.join(" ");
  //console.log(task3Words);
  //break;
}

//txtTask3Output.innerHTML = (typeof chkTask3).toString();
//console.log(chkTask3);
  

//--- Part 4 ----------------------------------------------------------------------------------------------
/* ● Part 4: Radio Button Selection (15 points)
Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.*/

const CarTypes = ["Aston Martin", "Bentley", "Alfa Romeo", "Ferrari", "Subaru", "Porsche", 
  "Tesla", "Toyota", "Renault", "Suzuki", "Mitsubishi", "Nissan"];

const divTask4Cars = document.getElementById("divTask4Cars");

for(let i = 0; i < CarTypes.length; i++) {
const radioButton = document.createElement("input");
radioButton.type = "radio";
radioButton.name = "car";
radioButton.value = CarTypes[i];
radioButton.id = "car_" + i;

const label = document.createElement("Label");
label.textContent = CarTypes[i];
label.setAttribute("for", radioButton.id);

radioButton.addEventListener("change", function() {
const output = document.getElementById("txtTask4Output");
output.textContent = "Selected car: " + this.value; });

divTask4Cars.appendChild(radioButton);
divTask4Cars.appendChild(label);
divTask4Cars.appendChild(document.createElement("br"));
}

//<input type="radio"></input>

//--- Part 5 ----------------------------------------------------------------------------------------------
/* ● Part 5: Dropdown Selection (15 points)
Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.*/

const selectElement = document.getElementById("selectTask5Animals"); //Velg dropdown-elementet
const outputElement = document.getElementById("txtTask5Output"); //Velg value fra HTML-fila
selectElement.addEventListener("change", function() { //Legger til change-event-listner
  const selectedAnimal = selectElement.options[selectElement.selectedIndex].textContent; 
//Henter verdien som ble valgt, med tekst istedenfor value/nummer
  outputElement.textContent = `Du valgte:  ${selectedAnimal}`; //SKriver ut oppdatert tekstinnhold
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* ● Part 6: Dynamic Dropdown & Selection (15 points)
Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output.*/

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", 
  "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

  const selectElement6 = document.getElementById("selectTask6Girls"); //Velger dropdown-elementet fra HTML-fila
  const outputElement6 = document.getElementById("txtTask6Output"); //Velg output-elementet

GirlsNames.forEach(name=> {
const option = document.createElement("option");
option.textContent = name;
option.value = name;
selectElement6.appendChild(option);
});

selectElement6.addEventListener("change", function(){
const selectedName = selectElement6.value;
outputElement6.textContent = `Du valgte: ${selectedName}`
});
 

//--- Part 7 ----------------------------------------------------------------------------------------------
/* ● Part 7: Table Population (15 points)
Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

const selectMovieGenre = document.getElementById("selectMovieGenre"); //Velger dropdown-elementet fra HTML-fila
const movieTableBody = document.querySelector("#movieTable tbody"); // Tabell-body
const addMovieButton = document.getElementById("cmbAddMovie"); // Knapp

MovieGenre.forEach(name=> {
const option = document.createElement("option");
option.textContent = name;
option.value = name;
selectMovieGenre.appendChild(option);
});


///

// Legg til hendelse for "Add Movie"-knappen
addMovieButton.addEventListener("click", function () {
  // Hent verdier fra inputfeltene
  const movieTitle = document.getElementById("movieTitle").value.trim();
  const movieDirector = document.getElementById("movieDirector").value.trim();
  const movieRating = document.getElementById("movieRating").value.trim();
  const movieGenre = selectMovieGenre.value;

  // Valider input
  if (!movieTitle || !movieDirector || !movieRating || isNaN(movieRating)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Opprett en ny rad
  const row = document.createElement("tr");

  // Opprett celler for hver kolonne
  const titleCell = document.createElement("td");
  titleCell.textContent = movieTitle;

  const genreCell = document.createElement("td");
  genreCell.textContent = movieGenre;

  const directorCell = document.createElement("td");
  directorCell.textContent = movieDirector;

  const ratingCell = document.createElement("td");
  ratingCell.textContent = movieRating;

  // Legg cellene til raden
  row.appendChild(titleCell);
  row.appendChild(genreCell);
  row.appendChild(directorCell);
  row.appendChild(ratingCell);

  // Legg raden til tabellens tbody
  movieTableBody.appendChild(row);

  // Tøm inputfeltene
  document.getElementById("movieTitle").value = "";
  document.getElementById("movieDirector").value = "";
  document.getElementById("movieRating").value = "";
});





