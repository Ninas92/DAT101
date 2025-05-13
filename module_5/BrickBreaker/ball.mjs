"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList, GameProps} from "./BrickBreaker.mjs";
import TBallPhysics from "./ballPhysics.mjs";


export class TBall extends libSprite.TSprite {
  #physics;
  constructor(aSpriteCanvas) {
    const pos = new lib2D.TPoint(370, 620);
    // Vi oppretter en ny ball sprite av typen sirkel
    super(aSpriteCanvas, SpriteInfoList.Ball, pos, lib2D.TCircle);
    this.#physics = new TBallPhysics(this, new lib2D.TPoint(1, -1), 5.1);   //(1, -1 er startposisjonen til ballen, 2.1 er farten
  }

  update() {
    this.#physics.update(GameProps.bounds, GameProps.hero, GameProps.bricks);
  }
}