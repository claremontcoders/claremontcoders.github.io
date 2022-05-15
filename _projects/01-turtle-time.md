---
title: "Project 1: Turtle Time"
layout: page
---

# It's Turtle Time

<div id="world">
  <canvas id="drawing-layer" width="200" height="200">Path layer</canvas>
  <canvas id="turtle-layer" width="200" height="200">Turtle layer</canvas>
</div>

## Walking and Turning
1. Open up <em>Tools &gt; Browser Tools &gt; Web Developer Tools</em>. A new window in your browser will appear with many tabs. **Shortcut:** In Firefox, you can use the keyboard shortcut <kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open the Developer Tools window.
2. Click on the <em>Console</em> tab in the Developer Tools window. This console allows you to type and run JavaScript code to control the turtle.
3. Tell the turtle to walk 20 steps forward by typing the command <code>turtle.forward(20);</code> in the JavaScript Console and hitting the <kbd>Enter</kbd>. You should see the turtle move in the direction it is pointing and a line behind it should appear.
4. Tell the turtle to turn 90 degrees to the left by typing the command <code>turtle.left(90);</code>. You should see the direction that the turtle is pointing to change by 90 degrees to the turtle's left.
5. Tell the turtle to move forward and turn again until it has drawn a square.

## A Bigger World
1. Open up a [blank canvas](blank-canvas){:target="_blank"} in a new browser tab.
2. Open the JavaScript console if it is not already open in this new tab.
3. Do all of your coding in the new tab.

## Make a Mistake
Everyone makes mistakes when coding. So it's good to practice what happens when something goes wrong.

1. Misspell the command to go forward `turtle.foward(20);`.
2. Congratulate yourself on creating your first bug.

    The JavaScript interpreter will with an error message. Error messages try to point out where a problem is, but they don't tell you how to fix it.
```
Uncaught TypeError: turtle.foward is not a function
    <anonymous> debugger eval code:1
```
3. What does the error message say the problem is? Come up with a plan to fix it.
4. Press the <kbd>Up</kbd> in the JavaScript console to scroll back to the last command you typed. Edit it and hit <kbd>Enter</kbd>.

## A Triangle Path

1. To clear the turtle's world, you can refresh the browser. **Hint:** Typing <kbd>Control</kbd> + <kbd>R</kbd> in most browsers will do the trick.
2. Using `turtle.forward();` and `turtle.left();` commands, try to draw a an equilateral triangle—a triangle with sides of all the same length.

{% include svg/01-turtle-triangle.svg %}

**Hint:** At each corner of a triangle there are two angles, the <span style="color: violet">interior angle</span> on the inside of the triangle and the <span style="color: orange">exterior angle</span> on the outside of the shape. In an equilateral triangle all of the interior angles are the same size.

How are the interior and exterior angles related to one another? How big are the interior angles in an equilateral triangle? How big are the exterior angles? How many degrees should the turtle turn to form an equilateral triangle?

**Hint:** Pretend to be the turtle and walk the path of an equilateral triangle. Step forward and turn, forward and turn, forward and turn. Is the angle you turn big or small?

## Explore Turtle Commands

The turtle knows a few commands other than `turtle.forward();` and `turtle.left();`. The turtle can also walk right, back, pick its pen up, and put it down again, hide itself, and show itself again. The turtle can also change the size and color of its pen.

1. Use `turtle.right(degrees);` to turn the turtle to its right. You will need to replace the placeholder parameter degrees with the number of degrees you would like the turtle to turn.
2. Use `turtle.penUp();` to pick the pen up. Move the turtle afterward. Unlike `turtle.forward(steps);` and `turtle.left(degrees);`, this command does not take any input.
3. Use `turtle.penDown();` to put the pen down to begin drawing again.
4. Use `turtle.setPenWidth(size)` to change the width of the pen.
5. Use `turtle.setPenColor(color);` to change the color of the pen that the turtle draws with. You can find the [list of colors](https://en.wikipedia.org/wiki/Web_colors#Extended_colors) that the turtle knows by name on Wikipedia. **Important:** When you tell the turtle to change color of the pen, you need quote the name of the color like this: `turtle.setPenColor("lime");`.
6. Use the commands `turtle.hide();` and `turtle.show();` to make the turtle disappear and reappear from your drawing.

The list of things a turtle can do is called its _interface_, or sometimes _application programming interface_ or API for short. In programming we make new interfaces or use interfaces that other people made. For now you'll use existing APIs. In time you will create your own!

Use multiple commands from the turtle interface to draw a picture with multiple colors. Save your drawing so you and other people can admire it forever.

**You are a programmer now!**

<script>
{% include js/turtle.js %}

// Create the turtle and add it to the world
const drawingLayer = document.getElementById("drawing-layer");
const turtleLayer = document.getElementById("turtle-layer");
const turtle = new Turtle(drawingLayer, turtleLayer);
</script>
