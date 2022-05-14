"use strict";
const TURTLE_BASE_PX = 8;
const TURTLE_HEIGHT_PX = 10;
const REGION_PX = TURTLE_HEIGHT_PX * 2;

function to_rad(deg) {
  return deg * Math.PI / 180;
}

function drawTurtle(turtle) {
  const context = turtle.bufferContext;
  context.save();
  // Translate and rotate to center on the turtle
  context.translate(turtle.x, turtle.y);
  context.rotate(turtle.heading + Math.PI / 2);
  // Draw the turtle
  context.beginPath();
  context.moveTo(-TURTLE_BASE_PX / 2, 0);
  context.lineTo(TURTLE_BASE_PX / 2, 0);
  context.lineTo(0, -TURTLE_HEIGHT_PX);
  context.fill();
  // Rotate and translate back
  context.restore();
}

function clearTurlte(turtle) {
  const context = turtle.bufferContext;
  context.clearRect(0, 0, turtle.backBuffer.width, turtle.backBuffer.height);
}

function refreshTurtle(turtle) {
  if(turtle.showTurtle) {
    clearTurlte(turtle);
    drawTurtle(turtle);
  }
}

class Turtle {
  constructor(canvas, backBuffer) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.heading = 0;
    this.x = canvas.width / 2 + 0.5;
    this.y = canvas.height / 2 + 0.5;
    this.isPenDown = true;
    this.showTurtle = true;
    this.backBuffer = backBuffer;
    this.bufferContext = backBuffer.getContext("2d");

    refreshTurtle(this);
  }

  penDown() {
    this.isPenDown = true;
  }

  penUp() {
    this.isPenDown = false;
  }

  setPenStyle(color) {
    this.context.strokeStyle = color;
    this.bufferContext.fillStyle = color;
    refreshTurtle(this);
  }

  forward(steps) {
    // Walk forward
    const x0 = this.x;
    const y0 = this.y;
    this.x += Math.cos(this.heading) * steps;
    this.y += Math.sin(this.heading) * steps;
    if(!this.isPenDown) {
      return;
    }
    // Draw the line
    this.context.beginPath();
    this.context.moveTo(x0, y0);
    this.context.lineTo(this.x, this.y);
    this.context.stroke();

    refreshTurtle(this);
  }

  back(steps) {
    this.forward(-steps);
  }

  left(degrees) {
    const rad = to_rad(degrees);
    this.heading -= rad;
    refreshTurtle(this);
  }

  right(degrees) {
    this.left(-degrees);
  }

  show() {
    this.showTurtle = true;
    drawTurtle(this);
  }

  hide() {
    this.showTurtle = false;
    clearTurlte(this);
  }
}
