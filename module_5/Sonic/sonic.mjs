"use strict";
import libSprite from "../../libs/libSprite.mjs";               //../ betyr ut av mappe, så x2 i dette tilfellet
//--------------- Objects and Variables ----------------------------------//

// prettier-ignore
const SpriteInfoList = {
  sonic1: { x: 0, y:   0, width: 102, height: 125, count: 6},
  sonic2: { x: 0, y: 125, width: 102, height: 125, count: 9},
  sonic3: { x: 0, y: 250, width: 102, height: 125, count: 9},
  sonic4: { x: 0, y: 375, width: 102, height: 75, count: 7},
  sonic5: { x: 0, y: 450, width: 98, height: 125, count: 5},
  sonic6: { x: 0, y: 575, width: 102, height: 125, count: 3},
  sonic7: { x: 0, y: 700, width: 102, height: 125, count: 2},
  sonic8: { x: 0, y: 825, width: 102, height: 125, count: 2},
  sonic9: { x: 0, y: 950, width: 102, height: 125, count: 4}
}

let spIndex = 0;
let spi = SpriteInfoList.sonic1;

const cvs = document.getElementById("cvs");
const spriteCanvas = new libSprite.TSpriteCanvas(cvs);
spriteCanvas.loadSpriteSheet("./media/sonic_sprite_sheet.png", onLoaded); //Ett punktum betyr "Bli i mappa, men henter fra en annen fil eller mappe"

//--------------- Functions ----------------------------------------------//

function animateSprite() {
  spriteCanvas.clearCanvas();
 spriteCanvas.drawSprite(spi, 200, 200, spIndex);
  spIndex++;
  if (spIndex >= spi.count) {
    spIndex = 0;
  }
}
//--------------- Event Handlers -----------------------------------------//
function onLoaded() {
  console.log("Sprite sheet loaded.");
  setInterval(animateSprite, 100);

}
//--------------- Main Code ----------------------------------------------//


