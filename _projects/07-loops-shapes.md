---
layout: turtle-template
title: "Project 7: More shapes"
---

# Project 7: More Shapes

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
{% include svg/03-03-shape-zoo.svg %}

## A Face
1. Using a paper and pencil, sketch a face using squares, triangles, pentagons, hexagons, circles, and other patterns.
2. Create a function to draw the face your sketched!
3. Group calls to shape functions inside of `face()` into smaller functions that refer to parts of your face, such as `eyes()` and `mouth()` or `earRing()`.
