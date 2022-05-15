---
title: "Project 2: Fancy Paths"
layout: page
---

# Fancy Paths

Open up a [blank canvas](blank-canvas){:target="_blank"} to experiment on. Open up the JavaScript console to write your code. If you forgot how to open the JavaScript console, check out the beginning of [Project 1](01-turtle-time).

## A Mystery
Below is some code that uses features of JavaScript we haven't seen yet to combine multiple turtle commands to create a complicated figure.

Some of syntax is new and unfamiliar. That's okay for now. In the next project we will go over all of the pieces in this example. And you can experiment with this program to create cool designs today!

1. Type the following code into the JavaScript console to create a fancy path.
```js
turtle.setPenColor("orange");
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
