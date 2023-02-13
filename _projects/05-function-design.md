---
layout: turtle-template
title: "Project 5: Function Design"
---

# Project 5: Function Design

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
