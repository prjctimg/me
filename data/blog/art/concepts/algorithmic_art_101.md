---
title: Algorithmic art 101
date: 2024-10-31
draft: true
tags: [art]
layout: PostSimple
summary: Understanding the concepts behind it and the problem space it intends to solve.
---
## Introduction

The definition of "algorithm" is used in the context of computer science but the origin of this term dates back to ancient times, way before we figured how to electrify rocks and make them "think". 

But what is an algorithm ? In simple terms, an algorithm is a step by step instruction to solve a problem. The goal of an algorithm is to provide the most efficient solution to the problem at hand.

At the end of the post, I'll include links to references.

## Math for artists

When we talk of generative art, which focuses on creating dynamic and ever evolving artworks mathematics comes into play. Personally, I don't enjoy math (most normal people don't  👀) but you can't run away from numbers forever. Trust me, I tried

Some useful topics include (this list is not exhaustive) :
- Geometry
	- Shapes
	- Coordinate systems
	- Transformations
	- Tessellations
	- Fractals
- Trigonometry
	- Angles and radians
	- Sine and cosine waves
- Linear algebra
- Number theory

JavaScript comes along with a good standard library for handling math operations but we'll be using [math.js]() for performing mathematical operations in our sketches. Not only will it reduce the amount of time we'll spend trying to implement the 'math magic🧙' ourselves but it includes a very comprehensive API which will give us room to experiment with different numerical behavior.

> [!note]  Deep dive🏊
> 
You can also check out [Tyler Hobbs](https://tylerxhobbs.com) , an awesome generative artist doing cool stuff with code math in the generative art world.
## The palette 🎨
Color is more than the perceived hue of an object, it is a communication medium. As humans, we rely on color to convey information quickly, for instance traffic lights rely on 3 colors to signal the traffic to stop,move or get ready to go. 

Color helps you, associate behaviors or properties to object. For instance, one can tell that a bar of steel is hot if it has a reddish glow (so obviously you won't touch it).

%% add an image here %%

In the context of generative art, we rely on careful selection of colors that will compliment our intended design. Too much color is not good and too little will also make our designs look bland. Striking that balance requires a good understanding of color theory. 

Here are some topics that can help you make better informed decisions when picking your palette:

- Color wheel
- Color harmonies
- Color properties
- Color context
- Color temperature
- Color psychology
- Color mixing (additive)

We'll be using [huetiful-js](https://huetiful-js.com) which is a TypeScript library based on [Culori](https://culorijs.org) for handling all sorts of color manipulations and generating palettes.

> [!note] Deep dive🏊
> 
You can check out  George Francis' post to get an idea of some of the things we can do with color theory and code. It was the post that post that helped me develop a keen interest in color theory.

## Ain't no art without shapes, right ?
In the simplest sense, a shape is a two-dimensional area defined by an outline and is one of the fundamental elements of art. Shapes create form and structure and also convey meaning and emotion. Understanding how shapes are formed and what they mean can help us create meaningful designs.

There are two kinds of shapes (obviously). 
- Geometric shapes
- Organic shapes
In generative art, shapes can be created using scaleable vector graphics or SVG for short.  We'll be using [svg.js]() for manipulating shapes on our digital canvas. 

> [!note]- Deep dive 🏊
> 


## What next ?
Combining these three concepts helps us create stunning and and dynamic generative artworks. You can check also checkout Rune Madsen's, [Programming Design Systems](https://programmingdesignsystems.com/) for a comprehensive take on the subject of designing with code. Here's more