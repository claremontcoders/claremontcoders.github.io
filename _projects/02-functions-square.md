---
layout: turtle-template
title: "Project 2: Teaching the Turtle"
---

# Project 2: Teaching the Turtle

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

## Square

1. Copy and paste the function `square()` into the JavaScript console. How does the console respond? Do you see a square appear&mdash;why or why not?
2. Use the `square()` function to draw many squares in different locations.
3. Use the `square()` function to draw a diamond.

## Triangle

4. Define a new function `triangle()` that directs the turtle to walk an equilateral triangle path of side length 30.

## Square and Triangle

<figure>
  {% include svg/02-01-house.svg %}
  <figcaption>A square and triangle form a house.</figcaption>
</figure>

5. Use `square()` and `triangle()` together to create a house. **Note:** The house drawing is one of the first drawings everyone makes with turtle. House has a famous cousin, the [Hello, World!](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program, in many other programming languages.

6. Can you make a new function called `house()`? Use it to make a neighborhood of houses of many different colors.
