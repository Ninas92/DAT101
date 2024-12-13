"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*● Part 1 (3 points)
Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

function toDay() {
    const iDag = new Date();
    const alternativer = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', }
    const norskFormat = iDag.toLocaleDateString('no-NB', alternativer);
printOut(norskFormat + "");
    
 return norskFormat;
}

toDay();


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* ● Part 2 (20 points)
Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:
● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.*/

function releaseDate() { 
    const dateMay = new Date("2025-05-14");
    const norskFormat2 = dateMay.toLocaleDateString('no-NB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

return norskFormat2; 
   
}
printOut(releaseDate() + " er dagen 2XKO slippes! Woooohoo");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Part 3 (8 points)
Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/

function circle(radius) {
    if (radius <= 0){
        printOut("Radius må være større enn null.");
        return;
    }
const diameter = radius * 2; 
const circumference = 2 * Math.PI * radius; 
const area = Math.PI * radius * radius;

printOut(`Diameter: ${diameter}`);
printOut(`Omkrets: ${circumference}`);
printOut(`Areal: ${area}`);
}
circle(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* ● Part 4 (8 points)
Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/

function rectangleArea(width, height) {
    if (height <= 0 || width <= 0)
        return "Høyde og bredde må være større enn null";

let area = height * width;
return `Areal: ${area}`;
}
function rectangleCircumference(width, height) {
    if(height <= 0 || width <= 0)
        return "Høyde og bredde må være større enn null";

let circumference = (height + height + width + width);
return `Omkrets: ${circumference}`;
}
printOut(rectangleArea(5, 4));
printOut(rectangleCircumference(5,4));  

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* ● Part 5 (12 points)
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. 
Formula:  
Fahrenheit = (Kelvin - 273.15) * 9/5+32;
Celcius = Kelvin - 273.15;
Celcius = (Fahrenheit - 32) * 5/9;
*/

function convertTemp(value, type) {
   let celcius, fahrenheit, kelvin;

   if(type === "C") {
    celcius = value;
    kelvin = Math.round(value + 273.15);
    fahrenheit = Math.round((value * 9 / 5) + 32);
   }
   else if (type === "F") {
    fahrenheit = value;
    celcius = Math.round((value - 32) * 5 / 9);
    kelvin = Math.round( celcius + 273.15);
   }
   else if (type === "K") {
    kelvin = value;
    celcius = Math.round(value - 273.15); 
    fahrenheit = Math.round((celcius * 9 / 5) + 32);
   }
   else {
    return "Ugyldig type"
   }
   return `Celcius: ${celcius}, Fahrenheit: ${fahrenheit}, Kelvin: ${kelvin}`;
   }
 printOut(convertTemp(100, "C"));
 printOut(convertTemp(30, "F"));
 printOut(convertTemp(200, "K"));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* ● Part 6 (12 points)
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).*/


function calculateNetPrice(grossAmount, taxGroup) {
    let vat;

switch (taxGroup.toLowerCase()) {
    case 'normal': 
    vat = 25;
        break;
    case 'food': 
    vat = 15;
        break;
    case 'hotel':
    case 'transport':
    case 'cinema': 
    vat = 10;
        break;
    default: 
    console.log("Ukjent VAT-gruppe.");
    return NaN;
}

let netPrice = (100* grossAmount) / ( vat + 100);
return netPrice;
}

printOut("Momsgruppe normal: " + calculateNetPrice(125, 'normal'));
printOut("Momsgruppe mat: " + calculateNetPrice(115, 'food'));
printOut("Momsgruppe transport: " +calculateNetPrice(110, 'transport'));
printOut("Momsgruppe goblins: " +calculateNetPrice(120, 'goblins'));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* ● Part 7 (5 points)
Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate 
the distance. If more than one parameter is missing, return NaN.*/

function calculate (distance, speed, time) {
    if (distance === undefined && time === undefined ||
         speed === undefined && time === undefined || 
         distance === undefined && speed === undefined) {
            return NaN;
         }
         if (speed === undefined) {
            return distance / time;
         }
         if (time === undefined) {
            return distance / speed;
         }
         if (distance === undefined) {
            return speed * time;
         }
}

printOut("Hastighet: " + calculate(100, 2, undefined));
printOut("Tid: " + calculate(100, undefined, 50));
printOut("Avstand: " + calculate(undefined, 2, 50));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* ● Part 8 (5 points) 
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.
Lag en funksjon som tar fire parametere og returnerer et resultat. 
Parameter én: En tekststreng. 
Parameter to: Verdi for maksimal størrelse på tekststrengen. 
Parameter tre: Tekstkarakter. 
Parameter fire: Konsekutiv innsending av tegn (boolean-verdi). 
Ta tekstparameteren; hvis den er mindre enn maksimum, gjør den større med det spesifiserte tegnet, 
enten før eller etter, ved å bruke den angitte boolean-verdien. 
La funksjonen returnere den nye strengen og skriv den ut.!*/




printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* ● Part 9 (25 points)
From mathematics, we have the following expression:
                      1 + 2 = 3
                  4 + 5 + 6 = 7 + 8
           9 + 10 + 11 + 12 = 13 + 14 + 15
     16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, 
print out where the two sides are not equal and stop the loop. 
If all 200 lines are OK, print "Maths fun!".*/

//https://www.w3schools.com/js/js_array_iteration.asp --- reduce()- summerer totalen på hver side til èn sum

/*function isMathFun() {
    let thisNumber = 1;

    for(let line = 1; line <= 200; line++) {
        const leftSide = [];
        const rightSide = [];

    for(let i = 0; i < line; i++) { 
        leftSide.push(thisNumber++)
    }
    for(let i = 0; i < line; i++) {
        rightSide.push(thisNumber++)
    }
  
    const leftSum = leftSide.reduce((sum, num) => sum + num, 0);
    const rightSum = rightSide.reduce((sum, num) => sum + num, 0);

    if(leftSum !== rightSum) {
        printOut(`Feil på linje ${line}: Venstre (${leftSum}) != Høyre (${rightSum})`);
        return;
    }
    }
    printOut("Math is fun!");
}
isMathFun();

printOut(newLine);
*/

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* ● Part 10 (10 points)
Recursive function. Create a function that calculates the factorial of a given number. 
Factorial of 5 = 5 * 4 * 3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.
*/



printOut("Replace this with you answer!");
printOut(newLine);
