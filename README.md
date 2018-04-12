# RockPaperScissorsApp

## The classic game you love.

### What I learned:

* _Functions_ are written to perform a task.
* Functions take data, perform a set of tasks on the data, and then return the result.
* We can define parameters to be used when calling the function.
* When calling a function, we can pass in arguments, which will set the function's parameters.
* we can use _return_ to return the result of a function which allows us to call functions anywhere, even inside other functions.

* Functions ins javascript are generally declared as either a _function declaration_ or a _function expression_
* a _function declaration_ is a function that is bound to an identifier or name.
* a _function expression_ is similar to function declaration, with the exception that the function identifier can be omitted, creating an anonymous function.

* How to refactor Arrow Function Syntax in three ways:

1.  Functions that take a single parameter should not use parentheses. This code will still work but it's better practice to omit the parentheses around single parameters. However, if a function takes zero, or multiple parameters, parentheses are required.
2.  A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as _implicit return_.
3.  A function comprised of sole single-line blocks does not need brackets.

For example, this longer code block:

```
const multiplyByNineFifths = (celsius) => {
 return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
 return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
```

can be refactored to this:

```
const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');
```
