"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//2 + 3 * 2 - 4 * 6 = -34 

const answer1 = 2 + 3 * (2 - 4) * 6;
printOut(answer1 + "");


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters (maximum 2 decimal places in
    the answer).*/
 
    const millInInch = 25.4; 
    const millInMeter = 1000;
    const millInCenti = 10; 

   const meterToMill = (25 * millInMeter);
   /* printOut(meterToMill +""); /*25000*/

    const centiToMill = (34 * millInCenti); 
    /* printOut(centiToMill + ""); /* 340 */

   const totalMill = (meterToMill + centiToMill);
   /*printOut(totalMill +""); */    

   const totalInches = (totalMill / millInInch);
   const answer2 = totalInches;
   /*printOut(answer2 +""); 997.6377952755906 */

   printOut((answer2).toFixed(2) +"");
   
    // husk ( variabel + "") i printOuten

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives*/

const secondsInMinutes = 60;
const minutesInHours = 60; 
const hoursInDays = 24; 

const daysToHours = (3 * hoursInDays); 
/* printOut(daysToHours + ""); 72 */

const totalHours = (daysToHours + 12);
/* printOut(totalHours + ""); 84 */

const hoursToMinutes = (totalHours * minutesInHours); 
/* printOut(hoursToMinutes + ""); 5040 */

/* + 14 minutes */

const secondsToMinutes = (45 / secondsInMinutes); 
/* printOut(secondsToMinutes + ""); 0.75 */

const totalTimeToMinutes = (hoursToMinutes + 14 + secondsToMinutes);
printOut(totalTimeToMinutes +"");

printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives!*/

/* fra tidligere oppgave:
const hoursInDays = 24;
const minutesInHours = 60; 
const minutesInHours = 60;
const secondsInMinutes = 60; 
*/
const timeToDays = 6322.52;
let minutesToDays = (hoursInDays * minutesInHours);  //1440
minutesToDays = (timeToDays / minutesToDays);   //4.390638888888889 days
const days = Math.floor(minutesToDays);
printOut("days = " + days.toString());

let minutesToHours = minutesToDays - days;  //0.39063888888888876
minutesToHours = (minutesToHours * hoursInDays) //9.37533333333333 hours
const hours = Math.floor(minutesToHours);
printOut("hours  = " + hours.toString());

let minutesToMinutes = (minutesToHours - hours) //0.3753333333333302
minutesToMinutes = (minutesToMinutes * minutesInHours) //22.51999999999981 minutes
const minutes = Math.floor(minutesToMinutes);
printOut("minutes = " + minutes.toString());

let minutesToSeconds = (minutesToMinutes - 22) //0.51999999999981
minutesToSeconds = (minutesToSeconds * secondsInMinutes); //31.199999999988677
const seconds = Math.floor(minutesToSeconds);
printOut("seconds = " + seconds.toString());


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars"*/

const oneNOK = 76 / 8.6; 
//printOut(oneNOK + ""); 8.837209302325581

let answer5_1 = (oneNOK * 54);
//printOut(answer5_1 + ""); 477.2093023255814
answer5_1 = answer5_1.toFixed();
printOut(answer5_1 + "NOK");

const oneUSD = 8.6 / 76; 
//printOut(oneUSD + "");  0.1131578947368421

let answer5_2 = (answer5_1 / oneNOK);

answer5_2 = answer5_2.toFixed();
printOut(answer5_2 + "USD");   //6.110526315789473


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Create a variable that contains the following text:
"*/

const text = "There is much between heaven and earth that we do not understand."
printOut(text);

//● Print the number of characters in the text."

const length = text.length; 

printOut(length +""); 

//● Print the character at position number 19.


const char = text.charAt(19);

printOut(char);

//● Print the characters starting at position number 35 and 8 characters forward.!

const part = text.slice(35, 43)
printOut(part +"");

//● Print the index at which "earth" starts in the text.*/

const index = text.indexOf("earth");
printOut(index + "");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?*/

const svar6a = 5 > 3;
printOut(svar6a +"");

//● Is 7 greater than or equal to 7?
const svar6b = 7 >= 7;
printOut(svar6b +"");

//● Is "a" greater than "b"?
const svar6c = "a" > "b";
printOut(svar6c +"");

//● Is "1" less than "a"?
const svar6d = "1" < "a";
printOut(svar6d +""); //???

//● Is "2500" less than "abcd"?
const svar6e = "2500" < "abcd";
printOut(svar6e +"");

//● "arne" is not equal to "thomas".
const svar6f = "arne" !== "thomas";
printOut(svar6f +"");

//● (2 equals 5) is this statement true?
const svar6g = (2 == 5);
printOut(svar6g +""); 

//● ("abcd" is greater than "bcd") is this statement false?*/
const svar6h = ("abcd" > "bcd"); 
printOut(svar6h +"");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Convert and print the following expressions:
//● from text "254" to a number

const answer8a = Number("254");
printOut(answer8a +"");

//● from text "57.23" to a number

const answer8b = Number("57.23"); 
printOut(answer8b +"");

//● from text "25 kroner" to a number*/

const answer8c = parseInt("25 kroner"); 
printOut(answer8c +"");

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/

const answer9a = Math.floor(Math.random() * 360); //Math.random gir alltid et tall mellom 0-1. Random kommer 
//egentlig inn når du bruker math.floor.
printOut(answer9a +"");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days*/

const daysTotal = 131;
const weeks = Math.floor(daysTotal / 7); //18 uker, Modulus viser hva som står igjen etter ukene er telt
//printOut(weeks +" ");
const daysLeft = (daysTotal % 7); //5 days til overs.
const answer10 = (weeks + "uker") + (daysLeft +"dager");

printOut(answer10 +"");

printOut(newLine);