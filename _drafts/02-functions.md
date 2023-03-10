---
title: "Project 2: Functions"
layout: page
nav_order: 1
---

# Old Turtle, New Tricks

From now on, save a new [blank canvas](blank-canvas) to your computer in a file called `functions.html` and open it locally. You should add code for this project to the file you downloaded. There are instructions how to do this on the canvas itself.

You can---and should!---continue to experiment in JavaScript console as you write your code. Test new code in the console and copy working code to your file to build on and run again later. If you forgot how to open the JavaScript console, check out the beginning of [Project 1](01-turtle-time).

## Teaching the Turtle

Remember in [Project 1](01-turtle-time), the first thing we did was tell the turtle to walk in a square path. We used two commands from the turtle's interface, `turtle.forward()` to walk forward and `turtle.left()` to turn at the corners.

```js
turtle.forward(20);
turtle.left(90);
turtle.forward(20);
turtle.left(90);
turtle.forward(20);
turtle.left(90);
turtle.forward(20);
turtle.left(90);
```

It would be convenient if the turtle interface already included a command to make a square. Since it does not, we can create a _new_ command to use over and over again, just like the built-in commands in the turtle's interface. Which of your [four friends](../what-is-coding/#what-can-you-do) is a function?

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
  turtle.left(90);
}
```

Once you have defined a new function like `square()`, you can use it just like any of the built-in commands. Since this command is not part of the turtle interface, call it directly by name `square()` without typing `turtle` at all.

1. Copy and paste the function `square()` into the JavaScript console. How does the console respond? Do you see a square appear&mdash;why or why not?
2. Use the `square()` function to draw many squares in different locations.
3. Use the `square()` function to draw a diamond.
4. Define a new function `triangle()` that directs the turtle to walk an equilateral triangle path of side length 30.
5. Use `square()` and `triangle()` together to create a house. **Note:** The house drawing is one of the first drawings everyone makes with turtle. House has a famous cousin, the [Hello, World!](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program, in many other programming languages.

<figure>
  {% include svg/02-01-house.svg %}
  <figcaption>A square and triangle form a house.</figcaption>
</figure>

## Big Square, Little Square
1. Define a new function `bigger_square()` that traces out a square path with sides 40 steps long.
2. Define a new function `bigger_triangle()` that traces out an equilateral triangle path of side length 50.
2. Use the functions `square()`, `bigger_square()`, `triangle()`, and `bigger_triangle()` to create a drawing that you are proud of.

<figure>
  {% include svg/02-02-squares-and-triangles.svg %}
  <figcaption>This is an example. Don't copy it. Make your own!</figcaption>
</figure>

### Colors

The example drawing uses the colors `springgreen`, `yellowgreen`, `lawngreen`, `orange`, `violet`, and `deeppink`. In case you forgot, here is the [full list of colors](https://en.wikipedia.org/wiki/Web_colors#Extended_colors) the turtle knows by name.

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

## Function Design
Functions are the most common way to organize code in programming. You will make a lot of functions in your career as an engineer. Soon you will be an expert at defining and using functions.

Defining functions is a way to extend the programming language with new commands that are customized specifically for you!

1. What are some functions in the [turtle interface](01-turtle-time#explore-turtle-commands) that do not take input arguments?
2. What are some functions in the [turtle interface](01-turtle-time#explore-turtle-commands) that require input arguments?
3. What are some differences between the functions you listed in (1) and (2)? Does it make sense to you that some of these functions accept an input and others do not---how do they behave differently?
4. Alter `triangle()` to accept an input parameter `steps` that will draw an equilateral triangle of a given side length.
5. Use `square()` and `triangle()` to draw a design using shapes of many different sizes.

<figure>
  {% include svg/02-04-spiral-triangles.svg %}
  <figcaption>What designs will you come up with?</figcaption>
</figure>

## Polygon Preview

The functions `square()` and `triangle()` look similar in that their bodies are composed of alternating calls to `turtle.foward()` and `turtle.left()` only.

Is there a way to define a function `polygon(steps, angle)` that produces a square with one set of inputs and triangles with another set? What do you wish you could be able to do in order to define a `polygon()` function?

We'll see one way to program a general purpose function that can draw polygons in Project 3. There are many different ways to create such a function!
