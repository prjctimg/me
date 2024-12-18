---
title: Look ma, I know JS!
date: 2024-09-29
canonicalUrl: "https://deantarisai.me/blog/random_stuff_about_js"
draft: false
tags: [javascript]
summary: Random stuff I (dis)like about the language.
layout: PostSimple
---

## Introduction

JavaScript has many interesting behaviours and different ways of doing the same thing, with slight nuances in how the alternate syntaxes work.

This makes it flexible, so flexible that you may waste a significant amount of your life refactoring syntax just to comply to conventions of different tools/libraries you may use. 

For example, certain tools only want the expected symbol (`function`,`object` etc) exported as the default not named export:


```js
// Default export
export default async(){}


// named export. Won't work on certain react based tools 
// if its loader expects a default export

export async function func(){}
```

Which really sucks because there are more deadlier bugs that require our attention than silly export mismatches. That's one thing that made it so hard for me to learn JS because I was trying to learn the language via tools/frameworks.

Due to the subtle differences in behaviour in alternate syntaxes it's very easy to create bugs that will only popup in edge cases you didn't know exist. 

For example, when you refactor variable declarations from `var` to `const` it means that the symbol can no longer be reassigned and is no longer being hoisted. What this ultimately means is that if you reassigned the symbol somewhere in your program, it will break. 

But I'm not here to tutor JS lol.


In this post, I'll share some of my favourite and usually abused features of the language. 

## Array destructuring

Variable declarations allow us to tell our program to store values which we can retrieve later when needed in the program. One of my favourite way of doing this *array destructuring*. We can do funny things with this feature🙃:


```js
var [a, b, c, [d, e, [f, g]]] = [1, 2, 3, [4, 5, [6, 7]]]
```

The variables `a`,`b`,`c`,`d`,`e`,`f` and `g` are assigned the values in the array on the right side of the assignment operator. The engine will recursively assign nested values to their respective nested declarations.

I sorta abuse this syntax and put literally anything in there (including functions, don't mention readability please).

I don't know if there's any perfomance tradeoffs with this.

## Immediately Invoked Function Expression (IIFE)

As the name implies, this function is called (or invoked) as soon as it is defined. It's useful if you want to write a once off function that, for example computes the value of a key in an object.

```js
const obj = {
  name: "ディーン・タリサイ",
  secret: (() => Math.random() * new Date().
    getMilliseconds())(),
};

console.log(obj);
```

In the above example, the `secret` key of the `obj` object will have a dynamic value that is unique everytime we access it. So one use case would be to create values that are computed 'on the fly'. 

## Disjunction and conjuction

Big words for logical OR `||` ,and  AND `&&` (pun intended) respectively, these symbols can act as a makeshift ternary operator or `if..else` statement if combined:

```js
const func = (x)=> typeof x === 'number' && `The number is ${x}` || `The value is ${x}`
```

What the Javascript engine does is follow the order of precedence, that is:

- `!`
- `&&`
- `||`

 In our case, this means that the AND expression is evaluated first so it would look like this:


```js

const func = (x)=> (typeof x === 'number' && `The number is ${x}`) || `The value is ${x}`

```

> [!tip]
>
> We can create our desired order of precedence by wrapping the expression we want to be evaluated first in parentheses which then enforces the PEMDAS order of precedence. 
> 
> _Source:_ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

If we run our function it will work as expected:

```js
console.log(func(5))

// The number is 5


console.log(func('ディーン・タリサイ'))


// The value is ディーン・タリサイ
```

> [!Caution]
> 
> However if one of your expressions throws (an error or exception, duh 🙄), it may break the program by immediately halting the execution and throwing the unhandled exception. Use this cautiously (or not at all).


## Nullish coalescing

For the lazier ones, we can use the `??` operator which returns the expression on the right side if the one on the left is falsy. 

Very useful for defining default values in a concise way.


```js
const func = (x) => x ?? 'The default value'

console.log(func(void 0))

// The default value

console.log(func('This will be printed'))

// This will be printed
```

> As you probably can see, handling falsy values is a very big fuss in the language.

## Spread operator

The spread operator a.k.a `...` allows us to expand elements of an iterable like an `Array`. This is useful if we don't know the exact length of our iterable or wish to just unpack the iterable into elements:


```js
const arr = [0,1,2,3]


// In this example we'll spread the iterable to our variables using array destructuring assignment


const [zero,one,two,three] = [...arr]
console.log([zero,one,two,three])

// [0,1,2,3]
```

Of course, the above syntax is redundant because we could have just passed the array as it is and it would work. 
But then again, I'm not here to teach 'good practices' (whatever that is 👀).

> [!TIP]
>
> Also check out rest parameters. The magic behind this language construct is similar to the spread operator but just a different context. In this case, rest parameters allow us to specify an indefinite number of arguments as an array. 



## The `in` operator

The `in` operator checks if a property exists in an object in which case it will return true or false if otherwise.

Let's say you wish to execute some code if a certain property exists in an object. The following example will only work properly if the `extremum` is a property of the `Math` object like `min` or `max`. Whichever argument proves falsy will log the error associated with it:

```js
const fn = (extremum, nums) => extremum in Math ?
    nums.length ?
        Math[extremum](...nums)
        : 'Extremum must be either "min" | "max" !'
    : 'Nums must be an iterable !'


console.log(fn('max',[9,5,2,7,0]))

// 7... Just kidding its 9 😄
```
> [!tip]
>
> In case you hadn't guessed, it's also implemented un the `for...in` loop which iterates over an objects own enumerable keys.


## `async...await`

When we mark a function as `async` it means we're expecting it to return our value wrapped in a `Promise`. 

The `await` keyword tells JavaScript to wait for the function to return, in this case our function is `fetch`. 

Mostly you'll find these keywords on operations that involve network requests or computationally intense routines that could take a while to complete.
Because we can't afford to block the main thread, asynchronous functions can execute without halting the entire program (contrary to synchronous programming). Here's the basic syntax.

```js
const fn = async (url) => {

const res = await fetch(url) 

return res.json()
}
```

> [!caution]
>
> At the time of writing, you can only use the `await` keyword inside an `async` function otherwise you'll get a syntax error.

## Optional chaining with `?.`

Remember when accessing an `undefined` property on an object used to throw a violent error ? Well, thanks to optional chaining we can now only attempt to access a property if it exists on our object. 

This allows our program to fail gracefully by returning `undefined` instead of throwing an error which immediately halts our program (if the error is not handled, of course):

```js
const obj = {
  value:'Hello',
}

// this fails gently by returning undefined
console.log(obj?.Value)

// this throws a tantrum
console.log(obj.Value)
```

> [!tip]
>
> This is useful when accessing deep nested objects in (like a JSON response for example) where certain properties may not be defined.


## What `instanceof` an object  is this ?

The `instanceof` operator allows us to check what instance of a constructor our object belongs to. It utilises the prototype chain to find the nearest ancestor of the object.

```js
class SomeObject {

    constructor(opts) {
        this.opts = opts
    }

    getKeys() {
        return Object.keys(this.opts)
    }
};

const obj = new SomeObject(), x = obj instanceof SomeObject

console.log(x)
```

### Conclusion

Well, that was a round up of the random features I like and often (overuse) in JavaScript.
