---
title: "Project 1: Turtle Time"
layout: page
---

# It's Turtle Time

<div id="world">
  <canvas id="drawing-layer" width="200" height="200">Green rectangle</canvas>
  <canvas id="turtle-layer" width="200" height="200">Backbuffer</canvas>
</div>

## Walking and Turning

1. Open up <em>Tools &gt; Browser Tools &gt; Web Developer Tools</em>. A new window in your browser will appear with many tabs. **Shortcut:** In Firefox, you can use the keyboard shortcut <kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open the Developer Tools window.
2. Click on the <em>Console</em> tab in the Developer Tools window. This console allows you to type and run JavaScript code to control the turtle.
3. Tell the turtle to walk 20 steps forward by typing the command <code>turtle.forward(20);</code> in the JavaScript Console and hitting the <kbd>Enter</kbd>. You should see the turtle move in the direction it is pointing and a line behind it should appear.
4. Tell the turtle to turn 90 degrees to the left by typing the command <code>turtle.left(90);</code>. You should see the direction that the turtle is pointing to change by 90 degrees to the turtle's left.
5. Tell the turtle to move forward and turn again until it has drawn a square.

## A Triangle Path

1. To clear the turtle's world, you can refresh the browser. **Hint:** Typing <kbd>Control</kbd> + <kbd>R</kbd> in most browsers will do the trick.
2. Using `turtle.forward();` and `turtle.left();` commands, try to draw a an equilateral triangle—a triangle with sides of all the same length.

{% include svg/01-turtle-triangle.svg %}

**Hint:** At each corner of triangle there are two angles, the <span style="color: violet">interior angle</span> on the inside of the triangle and the <span style="color: orange">exterior angle</span> on the outside of the shape. In an equilateral triangle all of the interior angles are the same.

How are the interior and exterior angles related? How big are the interior angles? How big are the exterior angles? How many degrees should the turtle turn to form an equilateral triangle?

**Hint:** Pretend to be the turtle and walk the path of an equilateral triangle. Step forward and turn, forward and turn, forward and turn. Is the angle you turn big or small?

## Explore Turtle Commands

The turtle knows a few other commands other than `turtle.forward();` and `turtle.left();`. The turtle can also walk right, back, pick its pen up, and put it down again, hide itself, and show itself again. The turtle can also change the color of its pen.

1. Use `turtle.right(degrees);` to turn the turtle to its right. You will need to replace the placeholder parameter degrees with the number of degrees you would like the turtle to turn.
2. Use `turtle.penUp();` to pick the pen up. Move the turtle afterward. Unlike `turtle.forward(steps);` and `turtle.left(degrees);`, this command does not take any input.
3. Use `turtle.penDown();` to put the pen down to begin drawing again.
4. Use `turtle.setPenStyle(color);` to change the color of the pen that the turtle draws with. You can find the [list of colors](https://en.wikipedia.org/wiki/Web_colors#Extended_colors) that the turtle knows by name on Wikipedia. **Important:** When you tell the turtle to change color of the pen, you need quote the name of the color like this: `turtle.setPenStyle("lime");`.
5. Use the commands `turtle.hide();` and `turtle.show();` to make the turtle disappear and reappear from your drawing.

The list of things a turtle can do is called its _interface_, or sometimes _application programming interface_ or API for short. In programming we make new interfaces or use interfaces that other people made. For now you'll use existing APIs. In time you will create your own!

Use multiple commands from the turtle interface to draw a picture with multiple colors.

## A Fancy Path

1. Type the following code into the JavaScript console to create a fancy path.
```js
turtle.setPenStyle("orange");
for(let i = 0; i < 20; i++) {
  for(let step = 0; step < 180; step++) {
       turtle.forward(1);
       turtle.right(2);
  }
  turtle.right(18);
}
turtle.hide();
```
2. Describe the path the turtle traces.
3. Play with the directions for the turtle path above. Change all of the numbers one at a time. What happens with each change?
  <strong>Hint:</strong> It may helpful to highlight the code by click-dragging the mouse and copying it to a virtual clipboard by type <kbd>Control</kbd> + <kbd>C</kbd> and pasting it into the JavaScript console by clicking the console and pressing <kbd>Control</kbd> + <kbd>V</kbd>.

4. Change the order of the commands around. Can you guess what will happen before you run the code?

## Your Initials

1. Come up with a series of turtle commands that draw your initials. Decorate and personalize your artwork. Save the code in a text file so that you can run it again later.

<script>
{% include js/turtle.js %}

// Create the turtle and add it to the world
const drawingLayer = document.getElementById("drawing-layer");
const turtleLayer = document.getElementById("turtle-layer");
const turtle = new Turtle(drawingLayer, turtleLayer);
</script>
