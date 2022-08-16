---
title: "Project 4: Lists"
layout: page
nav_order: 1
---

# Lists

For this project, save a new [blank canvas](blank-canvas) to your computer in a file called `lists.html` and open it locally. You should add code for this project to the file you downloaded. There are instructions how to do this on the canvas itself.

You can---and should!---continue to experiment in JavaScript console as you write your code. Test new code in the console and copy working code to your file to build on and run again later. If you forgot how to open the JavaScript console, check out the beginning of [Project 1](01-turtle-time).

## A Pinwheel
So far we have learned how to write [functions](02-functions) to reuse useful sequences of commands and [loops](03-loop) to repeat useful sequences of commands. Next we are going to learn how to group many values together and use loops to repeat a design, tweaking the process during each repetition. Our aim is to make a pinwheel like the one in the figure below.

First we'll do it without loops or lists and then rewrite, or *refactor*, our program to make it easier to experiment with.

<figure>
 <img src="/static/img/04-01-pinwheel.png" style="width:176px;height:176px" alt="A colorful pinwheel">
 <figcaption>A colorful pinwheel</figcaption>
</figure>

### One Spoke
Look at the pinwheel. Are there any parts or patterns that repeat? Those components are good candidates for a function definition.

The spokes of our pinwheel are identical, except for orientation and color. The structure is otherwise the same among them.

<figure>
  <img src="/static/img/04-02-spoke.png" style="width:124px;height:86px" alt="Spoke of a pinwheel">
  <figcaption>What shapes make up a spoke?</figcaption>
</figure>

1. Describe in words how to make a spoke of the pinwheel.
2. Define a function `spoke()` that draws a spoke of the pinwheel.
3. To make `spoke()` easier to use, make sure the turtle ends up in the same location and facing in the same direction as it started after each call.

### Many Spokes
Before we add any color, let's arrange the spokes in the pinwheel using the `pinwheel()` function you created. We need to arrange 7 spokes equally spaced around a circle. Since there are 360 degrees in a circle, we need to divide 360 degrees into 7 equal parts.

But 7 doesn't divide evenly into 360! Instead of typing out an approximation or guessing what the angle should be between each pinwheel we can calculate the value and assign it to a *constant* with a name that we can remember. In JavaScript we use the special keyword `const` to define constants. Constants are values that cannot be updated. Which of our [four friends](/what-is-coding/#what-can-you-do) are constants?

```js
const angle = 360 / 7;
```

Now we can reuse `angle` to construct our pinwheel.

```js
function pinwheel() {
  // Spoke 0
  spoke();
  turtle.left(angle);
  // Spoke 1
  spoke();
  turtle.left(angle);
  spoke();
  // Spoke 2
  turtle.left(angle);
  spoke();
  // Spoke 3
  turtle.left(angle);
  spoke();
  // Spoke 4
  turtle.left(angle);
  spoke();
  // Spoke 5
  turtle.left(angle);
  // Spoke 6
  spoke();
  turtle.left(angle);
}
```

1. Refactor `pinwheel()` to use a for-loop.
2. How will you set up the loop?
3. What is a useful loop test?
4. How will you update the loop variable between iterations?

<figure>
 <img src="/static/img/04-03-pinwheel.png" style="width:176px;height:176px" alt="A monochromatic pinwheel">
  <figcaption>A monochromatic pinwheel made of seven spokes</figcaption>
</figure>

### Add Color
Now let's add in some color. We'll use the colors in [Roy G Biv](https://www.youtube.com/watch?v=Gf33ueRXMzQ): red, orange, yellow, green, blue, indigo, and violet. To start, let's do add in color the long way, without loops.

```js
function pinwheel() {
  // Red spoke
  turtle.setPenColor("red");
  spoke();
  turtle.left(angle);
  // Orange spoke
  turtle.setPenColor("orange");
  spoke();
  turtle.left(angle);
  spoke();
  // Yellow spoke
  turtle.setPenColor("yellow");
  turtle.left(angle);
  spoke();
  // Green spoke
  turtle.setPenColor("green");
  turtle.left(angle);
  spoke();
  // Blue spoke
  turtle.setPenColor("blue");
  turtle.left(angle);
  spoke();
  // Indigo spoke
  turtle.setPenColor("indigo");
  turtle.left(angle);
  // Violet spoke
  turtle.setPenColor("violet");
  spoke();
  turtle.left(angle);
}
```

1. What pattern of function calls do you see?
2. What difficulty do we run into when trying to turn this pattern into a loop?

### Grouping Values with a List
The sequence of commands in our `pinwheel()` function has a pattern.

> 1. Change the pen color.
> 2. Draw a spoke.
> 3. Turn to the left.

We already know how to draw a spoke and turn to the left. The stay the same between every iteration of the loop. The color changes each time, though! First red, then orange, then yellow, then green, then blue, then indigo, then violet.

We can group all of the colors together into a single constant using a special list notation. Lists are a single data value that contain multiple values inside of it. To make a list, we use square brackets to enclose values separated by commas. What of our [four friends](/what-is-coding#what-can-you-do) is a list?

```js
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
```

Notice that the order of the colors in our list `colors` is the same order that appears in our `pinwheel()` function. If you change the order of the colors in the list, you will change the order in the pinwheel.

### A New Loop
We can use a special for-of loop to loop through each color in our list. A for-of loop is like the for-loop we already know how to use but for lists. For-of loops will iterate through each element in a list.

We use the same special keyword `for` to write a for-of loop. What we put in the between the parentheses is different, however. Here we make a loop constant with the `const` special keyword to name the current element in the list we are processing, followed by the special keyword `of` and the name of our list. The loop body is the same in both for-loops and for-of loops

```js
for(const color of colors) {
  // Loop body
}
```

When we use a for-of loop to loop over the list `colors`, the loop constant `color` will be `"red"` first, then `"orange"`, then `"yellow"`, then `"green"`, then `"blue"`, then `"indigo"`, then "`violet`".

To see this loop in action, let's print the value of `color` to the screen using the built-in function `console.log()`.

```js
for(const color of colors) {
  console.log("The current color is:", color);
}
```

1. Replace the for-of loop body above with the commands `turtle.setPenColor()`, `spoke()`, and `turtle.left()` to create a colorful pinwheel.
2. Rearrange the elements in `colors`. How does that change the design?
3. Add elements to the list `colors`. How does that change the design?
4. Remove elements from the list `colors`. How does that change the design?
5. Refactor `pinwheel(colors)`to accept a list of colors that draws a pinwheel with spokes the color of the elements of `colors`.

<figure>
  <img src="/static/img/04-04-pinwheel.png" style="width:176px;height:176px;" alt="Cornflower blue and orange pinwheel">
  <figcaption>The result of calling <code>pinwheel(colors)</code> with <code>const colors = ["violet", "cornflowerblue", "orange", "cornflowerblue", "orange", "cornflowerblue", "orange"];</code>
  </figcaption>
</figure>

### Decisions
Lists are a good way to group individual values together. We used a list to change the behavior of a loop to create a colorful design. In this way, the list provided a mechanism to decide which color to draw with.

Lists are both a way to store data and retrieve it later, organize values, and to decide between alternatives. Lists exhibit properties of at least three of our [four friends](/what-is-coding#what-can-you-do)!

1. Use lists, loops, and functions to create a design you are proud of.
