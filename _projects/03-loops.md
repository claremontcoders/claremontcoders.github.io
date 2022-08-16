---
title: "Project 3: Loops"
layout: page
nav_order: 1
---

# Repeating, Repeating

For this project, save a new [blank canvas](blank-canvas) to your computer in a file called `loops.html` and open it locally. You should add code for this project to the file you downloaded. There are instructions how to do this on the canvas itself.

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

We can use special syntax called a *for-loop* to tell the turtle to repeat a series of commands. The for in a for-loop is short for "for each". Which of your [four friends](../what-is-coding/#what-can-you-do) is a for-loop?

A for-loop has a few pieces to it that can be overwhelming the first time you see it. It begins with the special keyword `for` and a pair of parentheses. Inside the parentheses there are three parts separated by semicolons: the setup, the loop test, and an update that happens after each loop iteration.

After the parentheses, we write a pair of curly braces around the commands we'd like to repeat. This block of commands is called the *body* of the loop. The syntax for the loop body is very similar to the way we define functions with curly braces and function bodies.

```js
for(let side = 0; side < 4; side = side + 1) {
  turtle.forward(50);
  turtle.left(90);
}
```

### The Loop Setup

Since we're going to draw a square, we'll use a *variable* called `side` keep track of which side of the square we're currently going to draw. A variable is a value, in this case a number, that we can update. Which of your [four friends](../what-is-coding/#what-can-you-do) is a variable?

To create a variable we use the special keyword `let` followed by the variable name and the symbol `=` (called "gets") and the value of the variable. The way you read the setup is "`side` gets the value `0`."

```js
let side = 0;
```

Why do we start at zero instead of one? We could start a one, but in coding it's conventional to start at zero. When we start at zero it makes the second part of the loop---the loop test---easier to read and write. When we start at zero instead of one, the loop test for drawing a square has a four in it instead of a five. (And four reminds us more of a square than a five does.)

### The Loop Test

Before each iteration of a for-loop, the JavaScript interpreter will check the loop test. The loop test is a yes/no question. If the answer to the question is yes, the loop continues. If the answer is no, the loop stops.

The test in our example for-loop asks, "Is the current value of `side` smaller than four?" Whenever `side` is less than four, the loop repeats one more time. Once `side` is equal to four or bigger, the loop ends.

```js
side < 4;
```

### The Loop Update
After the loop repeats, the loop update command gets executed. This is an opportunity to update the loop variables we defined in the setup step.

The update step in our for-loop updates the value of the variable `side`. Each time the loop executes, the turtle draws and side of the square and sets up for the next one to be drawn. To keep track that the turtle has completed another side, we update the loop variable `side` with a new value that is one more its current value `side + 1`.

We use the assignment operator (`=`) again to update the value of side. Because we are not setting up a new variable, we do not use the special keyword `let`. That is used only to create new variables. It is not used to update existing variables.

```js
side = side + 1
```

The variable `side` gets the current value of `side` plus one more.

1. Watch the value of `side` change as the loop executes by adding the line `console.log(side);` to the beginning of the loop.
2. Change every part of the for-loop you can think to change. What happens with each change?
3. Write a for-loop that draws a triangle.
4. Add extra turtle commands to the for-loop that draws a square. What sort of paths does it draw?

<figure>
  {% comment %}
  {% include svg/03-01-square.svg %}
  {% endcomment %}
</figure>

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

# Polygon Function

How does the function parameter `sides` in `polygon(sides, steps)` relate to the `sides` loop variable you made above to draw a square?

Can you create a function `polygon(sides, steps)` that can generate a polygon with `sides` sides each of which is `steps` long?
