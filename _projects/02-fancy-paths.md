---
title: "Project 2: Fancy Paths"
layout: page
---

# Fancy Paths

Open up a [blank canvas](blank-canvas) to experiment on. Open up the JavaScript console to write your code. If you forgot how to open the JavaScript console, check out the beginning of [Project 1](01-turtle-time).

# Old Turtle, New Tricks

Remember in [Project 1](01-turtle-time), the first thing we did was tell the turtle to walk in a square path. We used two commands from the turtle's interface, `turtle.forward()` to walk forward and `turtle.left()` to turn at the corners.

```js
turtle.forward(20);
turtle.left(90);
turtle.forward(20);
turtle.left(90);
turtle.forward(20);
turtle.left(90);
turtle.forward(20);
```

It would be convenient if the turtle interface already included a command to make a square. Since it does not, we can create a _new_ command to use over and over again, just like the built-in commands in the turtle's interface.

We can group together a sequence of commands by using a **function**. To create a function, we use the special JavaScript keyword `function` and give the function a name. In this case, let's call it `square()`. Function names end in parentheses to let you know that they are functions. The commands that you want to execute in your function go between a pair of curly braces.

```js
function square() {
  turtle.forward(20);
  turtle.left(90);
  turtle.forward(20);
  turtle.left(90);
  turtle.forward(20);
  turtle.left(90);
  turtle.forward(20);
}
```

Once you have defined a new function like `square()`, you can use it just like any of the built-in commands. Since this command is not part of the turtle interface, call it directly by name `square()` without typing `turtle` at all.

1. Copy and paste the function `square()` into the JavaScript console. How does the console respond? Do you see a square appear&mdash;why or why not?
2. Use the `square()` function to draw many squares in different locations.
3. Use the `square()` function to draw a diamond.
4. Define a new function `triangle()` that directs the turtle to walk an equilateral triangle path.
