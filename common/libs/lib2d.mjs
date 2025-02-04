"use strict";

/**
 * @library lib2d
 * @description A library for classes that manages 2D graphics.
 */

class TPoint {
  x = 0;
  y = 0;
  constructor(aX, aY) {
    this.x = aX;
    this.y = aY;
  }
} // End of TPoint class

class TPosition extends TPoint {
  //Extend tar med seg alle public variabler      //Polymorphisme, "Flere muligheter"
  constructor(aX, aY) {
    super(aX, aY);
  }

  clone() {
    return new TPosition(this.x, this.y);
  }

  distanceToPoint(aPoint) {
    const dX = this.x - aPoint.x;
    const dy = this.y - aPoint.y;
    return Math.hypot(dX, dy);
  }
} //End of TPosition class

//kollisjonsdeteksjon vha. bounding box + top/bottom left/right++

class TRectangle extends TPosition {
  constructor(aX, aY, aWidth, aHeight) {
    super(aX, aY);
    this.width = aWidth;
    this.height = aHeight;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.width;
  }

  get top() {
    return this.y;
  }

  get bottom() {
    return this.y + this.height;
  }

  isInsideRect(aRect) {
    if (this.left >= aRect.right) return false;
    if (this.right <= aRect.left) return false;
    if (this.top >= aRect.bottom) return false;
    if (this.bottom <= aRect.top) return false;
    return true;
  }

  isPositionInside(aPosition){
    if (this.left >= aPosition.x) return false;
    if (this.right <= aPosition.x) return false;
    if (this.top >= aPosition.y) return false;
    if (this.bottom <= aPosition.y) return false;
    return true;
  }

  get center() {
    return new TPosition(this.x + this.width / 2, this.y + this.height / 2);
  }

  set center(aPoint) {
    this.x = aPoint.x - this.width / 2;
    this.y = aPoint.y - this.height / 2;
  }
}
// End of TRectangle class

const RAD = Math.PI / 180;

class TSineWave {
  #amplitude;
  #frequency;
  #angle;
  constructor(aAmplitude, aFrequency) {
    this.#amplitude = aAmplitude;
    this.#frequency = aFrequency;
    this.#angle = 0;
  }

  get value() {
    let value = this.#amplitude * Math.sin(this.#angle * RAD);
    this.#angle += this.#frequency;
    return value;
  }
}

//End of TSineWave

export default {
  /**
   * @class TPoint
   * @description A class representation for x and y position in 2D.
   * @param {number} aX - The x-coordinate.
   * @param {number} aY - The y-coordinate.
   */
  TPoint,
  /**
   * @class TPosition
   * @dscription A position class for manipulation of point in 2D.
   * @param {number} aX - The x-coordinate.
   * @param {number} aY - The y-coordinate.
   * @extends TPoint
   * @method clone - A method to clone the position object.
   * @method distanceToPoint - A method to calculate the distance to another point.
   */
  TPosition,

  /**
   * @class TRectangle,
   * @extends TPosition
   * @description a class representation for a rectangle in 2D.
   * @param {number } aX - the x-coordinate.
   * @param { number } aY - the y-coordinate.
   * @param {number} aWidth - the width of the rectangle.
   * @param {number} aHeight - the width of the rectangle.
   * @param { }
   */
  TRectangle,
  /**
   * @class TSineWave
   * @description A class representation for a sine wave
   * @param {number} aAmplitude - the amplitude of the wave.
   * @param {number} aFrequency - the frequency of the wave
   * @param {number} value - the next value of a wave.
   */
  TSineWave,
};
