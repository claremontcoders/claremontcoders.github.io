"use strict";
const TURTLE_BASE_PX = 8;
const TURTLE_HEIGHT_PX = 10;
const REGION_PX = TURTLE_HEIGHT_PX * 2;

function to_rad(deg) {
  return deg * Math.PI / 180;
}

function drawTurtle(turtle) {
  const context = turtle.turtleContext;
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
  const context = turtle.turtleContext;
  context.clearRect(0, 0, turtle.turtleCanvas.width, turtle.turtleCanvas.height);
}

function refreshTurtle(turtle) {
  if(turtle.showTurtle) {
    clearTurlte(turtle);
    drawTurtle(turtle);
  }
}

class Turtle {
  constructor(worldDiv, drawingCanvas, turtleCanvas) {
    const {offsetWidth: width, offsetHeight: height} = worldDiv;

    this.drawingCanvas = drawingCanvas;
    this.drawingContext = drawingCanvas.getContext("2d");
    this.drawingContext.canvas.width = width;
    this.drawingContext.canvas.height = height;

    this.heading = 0;
    this.x = drawingCanvas.width / 2 + 0.5;
    this.y = drawingCanvas.height / 2 + 0.5;
    this.isPenDown = true;
    this.showTurtle = true;
    this.turtleCanvas = turtleCanvas;
    this.turtleContext = turtleCanvas.getContext("2d");
    this.turtleContext.canvas.width = width;
    this.turtleContext.canvas.height = height;

    refreshTurtle(this);
  }

  penDown() {
    this.isPenDown = true;
  }

  penUp() {
    this.isPenDown = false;
  }

  setPenColor(color) {
    this.drawingContext.strokeStyle = color;
    this.turtleContext.fillStyle = color;
    refreshTurtle(this);
  }

  setPenWidth(size) {
    this.drawingContext.lineWidth = size;
  }

  forward(steps) {
    // Walk forward
    const x0 = this.x;
    const y0 = this.y;
    this.x += Math.cos(this.heading) * steps;
    this.y += Math.sin(this.heading) * steps;
    if(!this.isPenDown) {
      refreshTurtle(this);
      return;
    }
    // Draw the line
    this.drawingContext.beginPath();
    this.drawingContext.moveTo(x0, y0);
    this.drawingContext.lineTo(this.x, this.y);
    this.drawingContext.stroke();

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
