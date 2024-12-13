"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* ● Part 1: Array Creation & Traversal (5 points)
Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array.
○ Hint: Look at the learning outcomes to find the solutions to the task.*/

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

for(let i = 0; i < numbers.length; i++) {
printOut(`Element ${i + 1} : ${numbers[i]}`);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* ● Part 2: Array Joining (5 points)
Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
○ Hint: You should be able to do it with just one line of code
😃*/

printOut(numbers.join("  | "));

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Part 3: String to Array & Traversal (10 points)
Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e.,each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself.*/

const hei = "Hei på deg, hvordan har du det?";
const ord = hei.split(" ");

for(let i = 0; i < ord.length; i++) {
    printOut(`Ord nr ${i + 1}, indeks ${i}: ${ord[i]}`);
}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* ● Part 4: Array Manipulation: Removing Elements (10 points)
Create an array with these names: .
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array.*/

const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeName(names, element) {
    const index = names.indexOf(element);

    names.splice(index, 1);
    printOut(`Elementet ${element} ble fjernet. Ny navneliste.`, names)
}

removeName(girlNames, "Ingrid");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* ● Part 5: Array Merging (10 points)
Create a new array with these names:  Merge the arrays with girl names and boy names into a new
array with all the names.
○ Hint: You can solve this with two lines of code. Remember that an empty array also has
properties and methods 😃*/

const boysNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"];

const allNames = girlNames.concat(boysNames);
printOut(allNames.join(" ,"));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* ● Part 6: Creating a Book Class (10 points)
Create a class named TBook.
SE OPPGAVEN.
Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list.*/

class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

const books = [
new TBook("Programmering for dummies!", "Arne-Thomas Fore Leser", "834-2324-232"), //Denne ønsker jeg meg til jul!
new TBook("Hva var det jeg sa?", "Nina Simonstad", 356-2323-753),
new TBook("Små ting som gjør deg glad", "Siren Juleglad", 8423-6111-357),
];
for(const book of books) {
    printOut(book.toString());
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"}, //1 og mandag som nøkler for å få verdien
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x10, name: "Torsdag"},
    WeekDay5: {value: 0x20, name: "Fredag"},
    WeekDay6: {value: 0x040, name: "Lørdag"},
    WeekDay7: {value: 0x01, name: "Søndag", type: "Helligdag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
    WorkoutDays: {value: 0x01 + 0x04 + 0x10, name: "Treningsdager"}
};

const keys = Object.keys(EWeekDays); // Dette gir oss alle nøklene i objektet EWeekDays
printOut("Keys: " + keys.join(", ")); //Her printer vi ut alle nøklene i objektet EWeekDays

const values = Object.values(EWeekDays); // Dette gir oss alle verdiene i objektet EWeekDays
printOut("Values: " + values.join("; ")); // Her printer vi ut alle verdiene i objektet EWeekDays

let valueKeys = Object.values(EWeekDays[keys[7]]); //Her ser vi på verien til nøkkelen Workdays(7)
printOut("ValueKeys; " + valueKeys.join(", ")); // Her printer vi ut verien til nøkkelen i WorkDays(7)

//Vi går gjennom alle nøklene i objektet  EWeekDays med for-løkka
for (let index = 0; index < keys.length; index++) {
    let text = "";
  //Vi henter ut navnet på nøkkelen
   const key = keys[index];
   text = key + ":";

//TODO: SKriv ut alle nøklene og veriene til nøklene
const keyObject = EWeekDays[key]; //Her henter vi objectet til nøkkelen, f.eks. WeekDay1
const keyObjectKeys = Object.keys(keyObject); // Her henter vi ale nøklene til f.eks. WeekDay1 (Name og Value)
for (let i = 0; i < keyObjectKeys.length; i++){ 
    const keyObjectKey = keyObjectKeys[i]; // Her henter vi ut nøkkelen (f.eks. Value)
    const keyObjectValue = keyObject[keyObjectKey]; // Her henter vi ut verdien til nøkkelen (f.eks. 0x01)
    text += " " + keyObjectKey + ": " + keyObjectValue;
    }
    printOut(text);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* 
Part 8 Sorting & Callbacks (15 points)
Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array
*/

const randomValues = [];
for (let i = 0; i < 35; i ++) {
const randomNumbers = Math.floor(Math.random() * 20) + 1 ; //Math.ceil(Math.random() * 20);
//TODO: Legg til randomNumbers i randomValues

randomValues.push(randomNumbers)
}
printOut(randomValues.join(","));
//TODO: Sorter tabellen i stigende rekkefølge, og bruk en callback-funksjon
//Hvordan man sorterer, sorterer i stigende rekkefølge, og hvordan bruke en callback-funksjon

randomValues.sort(sortRandomValues); 
printOut("Tilfeldige tall i stigende rekkefølge" + randomValues.join(", "));
randomValues.reverse(); //Ingen sortering, må sorteres først.
printOut("Tilfeldige tall i synkende rekkefølge" + randomValues.join(", "));

 function sortRandomValues(aValue1, aValue2) {
    return aValue1 - aValue2;
 }

 /*Pilfunksjoner: ((argumenter) => {body})
 Ikke navngitte funksjoner: function(argumenter){body}
 Vanlige navngitte funksjoner: function nanvn (argumenter){body} */

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* ● Part 9 Frequency Analysis (15 points)
Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number.*/

const freq = {};
for(let i = 0; i < randomValues.length; i++) {
    const value = randomValues[i];
    if(freq[value]) { //Husk at undefined er false
    freq[value]++;
    } else {
        freq[value] = 1;
    }
}

//Her er alle tallene og frekvensen til tallene i ovjektet freq
//Sorter denne listen slik at de mest frekvente tallene kommer først

let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq); //Sorterer listen med callback-funksjon

function sortFreq(aValue1, aValue2){
    //Her sorterer vi listen basert på frekvensen til tallene
    const freq1 = freq[aValue1];
    const freq2 = freq[aValue2];
    return freq2 - freq1;
}

let text = " "; //Klargjør teksten som skal skrives ut (tømmer den)
for(let i = 0; i < freqKeys.length; i++){
    const freqKey = freqKeys[i]; //Hjelpevariabler for å hente ut nøkkelen
    const freqValue = freq[freqKey]; // Hjelpevariabler for å hente ut verdien
    text += freqKey + ": " + freqValue + ", "; //Legger til tall og frekvens i teksten
}
/*Eksempel på tomme objekter
const testObject = {};
console.log(testObject);
const rand = Math.ceil(Math.random() * 20);
testObject[rand] = 0;
console.log
*/
printOut(text);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* ● Part 10 Two-Dimensional Arrays (10 points)
Create an array that contains rows and columns (2 dimensions, 5x9). 
Start with an empty array. Use "for"
loops to create rows and columns, respectively. 
In each "cell," create a text that shows which row and column the "cell" is in. 
Then create two new sets of "for" loops to print the array itself.
○ Hint: For each round in the OUTER loop for the rows, you create a column. And for each round in the
columns, you write the "cell" value*/

const myTable = [];
for(let row = 0; row < 5; row++){
const columns = [];
for(let column = 0; column < 9; column++){
    const cell = row + ", " + column;
    columns.push(cell);
}
myTable.push(columns);
}

text = ""; //Klargjør teksten som skal skrives ut (tømmer den)
for(let row = 0; row < myTable.length; row++) {
    //Hva gjør vi nå? Vi må hente ut radene 
    const columns = myTable[row];
    //Traversere kolonnene
    for(let column = 0; column < columns.length; column++){
        const cell = columns[column];
        text += "[" + cell + "]";
    }
    printOut(text); //Skriver ut teksten
    text = ""; //Tømmer teksten
}

 