---
title: "Project 3: Loops"
layout: page
nav_order: 1
---

# Repeating, Repeating

For this project, save a new [blank canvas](blank-canvas) to your computer and open the file locally. You should add code for this project to the copy you downloaded. There are instructions how to do this on the canvas itself.

You can---and should!---continue to experiment in JavaScript console as you write your code. Test new code in the console and copy working code to your file to build on and run again later. If you forgot how to open the JavaScript console, check out the beginning of [Project 1](01-turtle-time).

## A Shorter Square

Do you remember the function you wrote to make a square with sides of length `steps`? It looked like this:

```js
function square(steps) {
  turtle.forward(steps);
  turtle.left(90);
  turtle.forward(steps);
  turtle.left(90);
  turtle.forward(steps);
  turtle.left(90);
  turtle.forward(steps);
  turtle.left(90);
}
```

Do you see any patterns in the body of `square()`---are any there lines of code that are repeated? Yes! The first two lines are repeated four times, once for each side of the square. Whenever you see lines of code that are repeated, that's a sign that you might benefit from using a *loop*.

Loops repeat instructions. If we were telling the turtle how to trace out a square of side length `50` we might say something like this.

> Repeat 4 times:
> 1. Walk forward `50`.
> 2. Turn `90` degrees to the left.

We can use special syntax called a *for-loop* to tell the turtle to repeat a series of commands. Here's how you would translate the plain language instructions into JavaScript code.

```js
for(let side = 0; side < 4; side = side + 1) {
  turtle.forward(50);
  turtle.left(90);
}
```

Notice that we introduced a variable `side` to count how many times to perform the loop. At the beginning `side` starts with value `0`. Each time the loop executes, `side` gets the new value `side + 1`---it goes up by one each iteration of the loop.

Before the start of each loop, the JavaScript interpreter checks whether the value of `side` is smaller than `4`. If the value of `side` is smaller, the loop continues. Once `side` is `4` or bigger, the loop stops.

1. Watch the value of `side` change as the loop executes by adding the line `console.log(side);` to the beginning of the loop.
2. Change every part of the for-loop you can think to change. What happens with each change?
3. Write a for-loop that draws a triangle.
4. Add extra turtle commands to the for-loop that draws a square. What sort of paths does it draw?

[INSERT DIAGRAM]
{% include svg/03-01-square.svg %}

## Fun Functions and Loops

We can use for-loops inside of functions to make them easier to read and easier to change. Let's rewrite the `square()` function to use a loop. Can you already guess how?

```js
function square(steps) {
  for(let side = 0; side < 4; side = side + 1) {
    turtle.forward(steps);
    turtle.left(90);
  }
}
```

1. Rewrite `triangle()` to use a for-loop.
2. Write a function `pentagon()` that traces out the shape of pentagon.
3. Write a function `hexagon()` that traces out the shape of a hexagon.
4. Write a function `circle()` that traces out the shape of a circle. **Hint:** Try to walk in a circle like the turtle would in real life. You can approximate a circle with a polygon that has very many tiny sides.
**Bonus:** Can you calculate the radius of the circle from the step length of each side?  
{% include svg/03-02-shapes.svg %}
5. Draw a picture out are proud of that uses triangles, squares, pentagons, hexagons, and circles of different sizes.

{% include svg/03-03-shape-zoo.svg %}

**Bonus:** Think about how to use a for-loop to create a `polygon(sides, steps)` function that can generate a polygon with `sides` sides each of which is `steps` long. What about a function that used the `angle` to turn instead of the number of sides to walk?
