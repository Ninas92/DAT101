"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps, EGameStatusType, spawnSequence } from "./SimonSays.mjs";

export class TColorButton extends libSprite.TSpriteButton {
  constructor(aSpriteCanvas, aSpriteInfo) {
    super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
    this.sound = null;
  }

  draw() {
    super.draw();
  }

  // Vi har noe som heter A.P.I.E. (Abstract(class for flere knapper samtidig), Polymorphism(f.eks at musa blir en hånd, eller en peker),
  // Inheritance(arv fra forrige FlappyBird-runde), Encapsulation(private(public)))
  //Vi må løse dette med polymorphism, når musa er over smultringen
  isMouseInside(aPoint) {
    //Skal ikke bruke function, fordi vi er inne i en klasse
    let isInside = super.isMouseInside(aPoint);
    //Hvis musa er over, sjekk videre om den er utenfor radius 1 og innenfor radius 2
    if (isInside) {
      const dx = aPoint.x - gameProps.gameCenter.x; //dx = delta x
      const dy = aPoint.y - gameProps.gameCenter.y;
      const dist = Math.hypot(dx, dy);
      isInside = dist >= this.spi.dst.r1 && dist <= this.spi.dst.r2;
    }
    return isInside;
  }
  // Vi må også løse dette med polymorphism, når musa trykkes ned på smultringen

  onMouseDown() {
    this.index = 1;
    this.sound.play();
  }

  onLeave(aEvent) {
    if(aEvent.buttons !== 0) {
      this.index = 0;
      this.sound.stop();
     }  
    }
  
  //Vi må også løse dette med polymorphism, når musa slippes opp på smultringen

  onMouseUp(){
    if(this.index !== 1) return; //Hvis knappen ikke er trykket ned, så gjør ingenting
    this.index = 0;
    this.sound.stop();
    if(gameProps.Status !== EGameStatusType.Player){
      return;
    }
    if(gameProps.activeButton === this){
      console.log("Riktig knapp");
      //Hvis vi har flere knapper i sekvensen, velge neste knapp som aktiv!!!!
      if(gameProps.seqIndex < gameProps.sequence.length - 1){
        gameProps.seqIndex++;
        gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
      }else{
        //Nå er vi på siste knapp i sekvensen, og det er computerens tur!
        gameProps.spnRound.value++;
        spawnSequence();
        console.log(gameProps.GameSpeed);
      }

      //Hvis ikke så spawn en ny knapp i sekvensen
    }else{
      console.log("Feil knapp");
      gameProps.Status = EGameStatusType.GameOver;
      gameProps.buttonStartEnd.index = 1;
      gameProps.buttonStartEnd.visible = true;
    }
  }

}//End of TColorButton class