---
layout: turtle-template
title: "Project 4: Spirals"
---

# Projec 4: Spirals
## All the Squares
So far we have had to make a new function to re-use our code to make shapes of a particular side length. Typing mostly identical code over and over again is tedious and error prone.

To make a single function that can draw squares of multiple different sizes, we will alter `square()` to accept an _input argument_. The input to this improved version of `square()` will be the number `steps` of steps that the turtle will walk along each side of the square.

To use the input parameter `steps`, we need to make two changes. First, we need to include it in between the parentheses after the name of the function `square(steps)`. Second, we need to use `steps` in the body definition. In this case, when the turtle walks forward.

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

The input parameter `steps` is a placeholder for a number. Now when you call the function `square()`, you need to provide a number as input. That number will be used when invoking `turtle.forward()`. By varying the value of `steps`, you can draw squares of different sizes with the same code.

1. Edit `square()` to accept an input parameter `steps` as above.
2. Use `square(steps)` to draw nested squares.
3. Reuse `square(steps)` to draw square spirals.

<figure>
  {% include svg/02-03-nested-squares.svg %}
  <figcaption>These are for inspiration. You can make any kind of nested squares and spirals!</figcaption>
</figure>
