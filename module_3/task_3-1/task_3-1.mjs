"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

printOut("Task 1, 2 and 3");
const wakeUpTime = 7;

if (wakeUpTime ==7) {
    printOut("Jeg kan ta bussen til skolen.");
}
else if (wakeUpTime == 8) {
    printOut("Jeg kan ta toget.")
}
else {  
    printOut("Jeg må ta bilen.")  
}

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

function testNum(x) {
  let result;
  if (x > 0) {
    result = 'positive';
  } 
  else if (x == 0){
    result = 'zero'
  } 
  else {
    result = 'negative'
  }
  return result;
}
const x = 5
testNum(x);
printOut(testNum(x));

const y = -4
testNum(y);
printOut(testNum(y));

const z = 0; 
testNum(z); 
printOut(testNum(z));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

let minImageSize = 4;

let imageSize = Math.floor(Math.random() * 8) + 1 ;

if (imageSize < minImageSize) {
   printOut("The image size is too small.")
} 
else {
   printOut("Thank you.")
}

printOut(imageSize +"MP");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let tooBigImage = 6;

if (imageSize < minImageSize) {
    printOut("The image size is too small.")
} 
else if (imageSize > tooBigImage) { 
    printOut("The image is too big.")
} 
else {
    printOut("Thank you.")
}

printOut(imageSize +"MP");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September",
  "Oktober", "November", "Desember"]; 
const noOfMonth = monthList.length; 
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

//https://www.w3schools.com/jsref/jsref_includes.asp

  if (monthName.includes("r")) {
    printOut("Du må ta vitamin D-tilskudd.")
  } else { 
    printOut("Du trenger ikke å ta vitamin D-tilskudd.")
  }
  printOut(monthName +"");
  
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = monthList.indexOf(monthName);
const days = daysInMonth[monthIndex]; 

printOut("The number of days in " + monthName + " is " + days); 
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//https://www.w3schools.com/php/php_operators.asp

let galleryOpeningHours;
if (monthName === "March" || monthName === "Mai") {
  galleryOpeningHours = " stengt pga oppussing.";
} else if (monthName === "April") {
  galleryOpeningHours = " midlertidig åpent i nabobygget."
} else {
  galleryOpeningHours = " åpent.";
}

printOut("I " + monthName + " er galleriet  " + galleryOpeningHours);
printOut(newLine);
