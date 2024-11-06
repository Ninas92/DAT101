"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Part 1 Counting Up and Down (8 points)
Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

let text = "";
for (let i = 1; i < 11; i++) {
  text += i;
  if (i < 10) {
    text += ", ";
  }
}
printOut(text + "");

let answer = "";
for (let i = 10; i > 0; i--) {
  answer += i;
  if (i > 1) {
    answer += ", ";
  }
}
printOut(answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Number Guessing Game (12 points) 
Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress*/

const resultNumber = 22;
let guessNumber = 0;

while (resultNumber !== guessNumber) {
  guessNumber = Math.ceil(Math.random() * 60);
}
printOut("GuessNumber : " + guessNumber.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Guessing Game - Level Up! (20 points)
Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time*/

let guessCount = 0;
guessNumber = 0;
const startTime = Date.now();
while (resultNumber !== guessNumber) {
  guessCount++;
  guessNumber = Math.ceil(Math.random() * 100000);
}

printOut("Antall gjetninger : " + guessCount.toString());
printOut(newLine);

const endTime = Date.now();
const timeUsed = endTime - startTime;

printOut("Antall gjetninger : " + guessCount.toString() + "tok " + timeUsed.toString() + " ms");
printOut(" ");

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Part 4 Prime Number Hunter (15 points)
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI)*/

for (let number = 2; number <= 200; number++) {
  let divider = 2;
  let isPrime = true;
  while (number > divider) {

    const rest = number % divider;
    if (rest === 0) {
      isPrime = false;
      break;
    }
    divider++;
  }
  if (isPrime) {
    printOut(number.toString());
  }
}


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Part 5 Nested Loops & Patterns (15 points)
Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7*/

let kol1 = " "; 
let rad1 = " "; 

for(let rad = 1; rad <= 7; rad++) {
  let radText = " "; 
  for(let kol = 1; kol <= 9; kol++) {
   kol1 = "K" + kol.toString();
   rad1 = "R" + rad.toString();
   radText += kol1 + rad1 + "&nbsp;"; 
  }
radText += newLine;
printOut(radText);
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Grade Simulator & Sorting Challenge (10 points + Bonus Hint)
Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

const task6Poeng = Math.floor(Math.random() * 237);
const task6Prosent = task6Poeng / 236 * 100;
let karakter;
if (task6Prosent < 40) {
  karakter = "F"
} else if (task6Prosent <52) {
karakter = "E" 
} else if (task6Prosent <64) {
  karakter = "D"
} else if (task6Prosent <76) { 
karakter = "C" 
} else if (task6Prosent < 88) { 
karakter = "B"
} else {
  karakter = "A"
}

printOut("Studenten fikk " + task6Prosent.toFixed(0) + "% , som tilsvarer " + task6Poeng.toString() + " poeng." );
printOut("Dette tilsvarer karakteren " + karakter.toString());


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Part 7 Dice Rolling Extravaganza (20 points)
Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

  let answerTask7 = "";
  let rolls = 0;
  let done = false;
  let hasYahtzee = false;   
  let hasStraight = false; 
  let has3Pair = false;    
  let hasTower = false;     
  do {
    const d1 = Math.ceil(Math.random() * 6);  
    const d2 = Math.ceil(Math.random() * 6);
    const d3 = Math.ceil(Math.random() * 6);  
    const d4 = Math.ceil(Math.random() * 6);  
    const d5 = Math.ceil(Math.random() * 6);  
    const d6 = Math.ceil(Math.random() * 6); 
    const txtD = (d1 + "," + d2 + "," + d3 + "," + d4 + "," + d5 + "," + d6); 
    if ((d1 === d2) && (d1 === d3) && (d1 === d4) && (d1 === d5) && (d1 === d6)) {
      
      if (hasYahtzee === false) {
        hasYahtzee = true;
        answerTask7 += txtD + newLine;
        answerTask7 += "Yatzi!" + newLine;
        answerTask7 += "På " + rolls.toString() + " kast!" + newLine + newLine;
      }
    } else {
      
      const cD1 = (txtD.match(/1/g) || "").length; 
      const cD2 = (txtD.match(/2/g) || "").length;
      const cD3 = (txtD.match(/3/g) || "").length;
      const cD4 = (txtD.match(/4/g) || "").length;
      const cD5 = (txtD.match(/5/g) || "").length;
      const cD6 = (txtD.match(/6/g) || "").length;
      if ((cD1 === 1) && (cD2 === 1) && (cD3 === 1) && (cD4 === 1) && (cD5 === 1) && (cD6 === 1)) {
        
        if (hasStraight === false) {
          hasStraight = true;
          answerTask7 += txtD + newLine;
          answerTask7 += "På " + rolls.toString() + " kast!" + newLine + newLine;
        }
      } else {
       
        const txtCD = cD1 + "," + cD2 + "," + cD3 + "," + cD4 + "," + cD5 + "," + cD6;
        const ccD2 = (txtCD.match(/2/g) || "").length;
        const ccD4 = (txtCD.match(/4/g) || "").length;
        if (ccD2 === 3) {
          
          if (has3Pair === false) {
            has3Pair = true;
            answerTask7 += txtD + newLine;
            answerTask7 += "3 Par" + newLine;
            answerTask7 += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        } else if ((ccD2 === 1) && (ccD4 === 1)) {
         
          if (hasTower === false) {
            hasTower = true;
            answerTask7 += txtD + newLine;
            answerTask7 += "Tårn" + newLine;
            answerTask7 += "På " + rolls.toString() + " kast!" + newLine;
          }
        }
      }
    }
    done = hasYahtzee && hasStraight;
  } while (done === false);
  printOut(answerTask7 + newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
