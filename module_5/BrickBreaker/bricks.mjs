"use strict";
import libSprite_v2 from "../../common/libs/libSprite_v2.mjs";
import lib2d_v2 from "../../common/libs/lib2d_v2.mjs";
import { SpriteInfoList } from "./BrickBreaker.mjs";

export class TBrick extends libSprite_v2.TSprite {
    constructor(spcvs, pos){
       // const pos = new lib2d_v2.TPoint(35, 110) 
        super(spcvs, SpriteInfoList.BrickPurple, pos, lib2d_v2.TRectangle);

    }
}