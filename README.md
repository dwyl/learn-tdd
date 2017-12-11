# Learn **T**est **D**riven **D**evelopment (**TDD**)

A brief introduction to **T**est **D**riven **D**evelopment (**TDD**)
in JavaScript for people who want to write _**more reliable code**_.

[![Build Status](https://travis-ci.org/dwyl/learn-tdd.svg)](https://travis-ci.org/dwyl/learn-tdd)
[![codecov.io](https://codecov.io/github/dwyl/learn-tdd/coverage.svg?branch=master)](https://codecov.io/github/dwyl/learn-tdd?branch=master)
[![Code Climate](https://codeclimate.com/github/dwyl/learn-tdd/badges/gpa.svg)](https://codeclimate.com/github/dwyl/learn-tdd)
[![Dependency Status](https://david-dm.org/dwyl/learn-tdd.svg)](https://david-dm.org/dwyl/learn-tdd)
[![devDependencies Status](https://david-dm.org/dwyl/learn-tdd/dev-status.svg)](https://david-dm.org/dwyl/learn-tdd?type=dev)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/learn-tdd/issues)
[![HitCount](http://hits.dwyl.io/dwyl/learn-tdd.svg)](http://hits.dwyl.io/dwyl/learn-tdd)


## Why?

_Project(s) without tests_ often end up looking like they are stuck together with _**duct tape**_ ...

![duct tape car fail](http://i.imgur.com/9cNriGK.jpg)

Change _one_ part and the _other_ stops working? "_Fixing_" one bug, creates another?

Wouldn't you *prefer* if everything was
***consistent*** and beautifully integrated? <br />
What if _everyone_ on your team worked _like **clock-work**_ in a disciplined order... like a _**Formula 1 Crew**_ ...

![formula 1 pit stop](http://i.imgur.com/0NDbaam.jpg)

Test Driven Development (TDD) makes your team a well-oiled machine which means you can go _**faster**_.

Once you have a ***suite*** of tests that run on every change, you will
begin to develop a whole other level of ***confidence*** in your codebase
and will discover a new freedom to be ***creative*** without fear of
"*breaking*" anything else; truly *game-changing*.


## What?

This tutorial will help you get started with
**T**est **D**riven **D**evelopment (**TDD**) *today*! <br />
In the next ***30 minutes*** you will learn _everything_<sup>1</sup> you need to know to write tests for your web project!

### Pre-Requisites

+ **A computer** with a web browser
+ **Internet access** to download the starter files
+ **30 minutes** of time
+ **_Basic_ Programming Skills** (HTML & JavaScript)
+ (_**Optional**_) _**Bonus Levels require**_ you to
[_install_ **Node.js**](https://nodejs.org/download/)

### What is Software Testing?
> Software testing is the process of evaluation a software item to detect differences between given input and expected output. Testing assesses the quality of the product. Software testing is a process that should be done during the development process. In other words software testing is a verification and validation process.


### What is TDD?

> Test-driven development (TDD) is an evolutionary approach to development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring. In other words, it’s one way to think through your requirements or design before your write your functional code.

*From [Introduction to Test Driven Development (TDD)](http://agiledata.org/essays/tdd.html)*

#### Further resources
- Software Testing - http://en.wikipedia.org/wiki/Software_testing
- "What is Software Testing" video (from 5:56 onwards) - https://youtu.be/UZy1Dj9JIg4?t=356
- Video intro to Software Development Lifecycle (from 0:52 onwards): https://youtu.be/qMkV_TDdDeA?t=52
- How to Write Clean, Testable Code -  http://youtu.be/XcT4yYu_TTs (ignore the Java code focus on the general principals)
+ [What is software testing?](http://www.codeproject.com/Tips/351122/What-is-software-testing-What-are-the-different-ty) by _Rehman Zafar_
- Practical Full-Stack JavaScript Web Application Test Driven Development - https://github.com/nelsonic/practical-js-tdd

## How?

The *first* thing you need to *understand* is that writing code following TDD (*discipline*) is a (*slightly*) different approach from simply diving into solving the problem (*without a test*).

When reading about TDD you will see the expression: "***Red, Green, Refactor***":

![TDD Cycle: Red, Green, Refactor](http://i.imgur.com/RQe2NQT.jpg)

What this means is that there's a **3-step process**:

1. ***Write*** a **Failing Test** - Understand the (user) requirements/story well enough to write a test for what you expect. (_the test should **fail** initially - hence it being "Red"_) <br />

2. ***Make*** the (*failing*) **Test Pass** - Write (*only*) the code you need
to make the (*failing*) test pass, while ensuring your existing/previous tests
all still pass (*no regressions*).

3. ***Refactor*** the code *you* wrote - if you have time to tidy up the code
*you* wrote to make it simpler (*for your future self or colleagues to understand*) before you need to ship the current feature, do it.

To develop the *habit(s)* you will need to be successful with TDD (*and software engineering in general*)
we need to ***write*** a ***test first*** (*and watch it fail*) and *then* write the code required to make the test pass.

Writing a _**failing test**_, before writing the code may seem *counter-intuitive*, *time consuming* or even "*tedious*" at _**first**_. But we _urge_ you to think of it this way:

> The ***test*** is the ***question*** you are asking <br />
> your code is the ***answer*** to the question. <br />
> By having a _clear_ question, you can always check
> that your code is working, <br />
> because it _**consistently**_
> gives you the same answer(s) ... _no surprises_, even when you're working with a large, inter-dependent code base!

## Practical

### Scenario: Vending Machine _Change Calculator_ Micro-Project

![vending machine](http://i.imgur.com/HbwMqDa.jpg)

Imagine you are building a **Vending Machine** that allows people to buy any item.
The machine accepts coins and calculates the change
to be returned to the customer given the **price**
of the Item and the **cash** received.

### Single *File* App

We can build the _entire_ "project" in a _**single file**_: `index.html`

> _**note**: in practice you want to split your JavaScript, CSS and HTML (Templates) into **separate** files,
but for this example we are keeping everything in `index.html` for simplicity.
If you make it to the "Bonus Levels" you will split things out!_

Create a directory on your computer called **vending-machine**:

In your **terminal** type this command:
```sh
mkdir vending-machine && cd vending-machine
```
(_this will create the directory and move you into it_)

Next create a file called **index.html** e.g: `atom index.html` (which creates and opens the file in the [Atom text editor](https://atom.io/) if you have it installed)

(_the "atom" command is not installed by default. In the Atom menu bar there is a command named “Install Shell Commands” which installs a new command in your Terminal called atom._)

Now copy-paste the following *sample code* to get started:

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Vending Machine Change Calculator TDD Tutorial</title>
    <!-- Load the QUnit CSS file from CDN - Require to display our tests attractively -->
    <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-1.18.0.css">
    <!-- Pure CSS is a minimalist CSS file we have included to make things look nicer -->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
  </head>
  <body style='margin: 0 1em;'>
    <div id='main'>
      <h1>Vending Machine <em>Change Calculator</em></h1>
      <h2>Calculate the change (<em>coins</em>) to return to a customer when they buy something.</h2>
    </div>

    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    <!-- Load the QUnit Testing Framework from CDN - this is the important bit ... -->
    <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>
    <script>
      // This is what a simple unit test looks like:
      test('This sample test should always pass!', function(assert) {
        var result = 1 + 1;
        assert.equal(result, 2); // just so we know everything loaded ok
      });
      // A failing test will be RED:
      test('This is what a failing test looks like!', function(assert) {
        var result = [1,2,3].indexOf(1);  // this should be 0
        assert.equal(result, -1); // we *expect* this to fail
      });
    </script>
  </body>
</html>
```

#### Open index.html in your Browser

When you ***open*** `index.html` in your ***web browser***
you should expect to see something like this: (_without the annotations_)

![learn-tdd-initial-index-html-showing-failing-test](https://cloud.githubusercontent.com/assets/194400/8395737/80716e08-1d7a-11e5-9858-c8f96b8c8ad5.png)



##### Explanation

There is quite a lot of code in the **index.html** you just created,
let's step through it to understand the parts:

The first part of **index.html** is a standard HTML head and body:

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Vending Machine Change Calculator TDD</title>
    <!-- Load the QUnit CSS file from CDN - Require to display our tests attractively -->
    <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-1.18.0.css">
    <!-- Pure CSS is a minimalist CSS file we have included to make things look nicer -->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
  </head>
  <body>
    <div id='main'>
      <h1>Vending Machine Change Calculator</h1>
      <h2>Calculate the Change for a Given Price and Cash Received</h2>
    </div>
```
Nothing special here, we are simply setting up the page and loading the CSS files.

Next we see the **qunit divs** (_where the **test results** will be **displayed**_)
and load JQuery and the QUnit Library from CDN:

```html
    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    <!-- Load the QUnit Library from CDN - this is the important bit ... -->
    <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>
```

Finally we see our test(s) - the interesting part of the file:

```html
    <script>
      // This is what a simple unit test looks like:
      test('This sample test should always pass!', function(assert) {
        var result = 1 + 1;
        assert.equal(result, 2);
      });

      // A failing test will be RED:
      test('This is what a failing test looks like!', function(assert) {
        var result = [1,2,3].indexOf(1);  // this should be 0
        assert.equal(result, -1); // we *expect* this to fail
      });

    </script>
  </body>
</html>
```

If you are completely new to writing ***test assertions***, don't worry,
they are really simple, there are **3 parts**:

1. **Description** - usually the *first* parameter to QUnit's test() method.
2. **Computation** - execute a function/method (*exercising the method you will write to solve your test*)
3. **Assertion** - check that the result of your calculation is what you ***expect*** it to be.

![anatomy-of-a-unit-test](https://cloud.githubusercontent.com/assets/194400/8395876/946d5364-1d83-11e5-8e65-365a8884a194.png)

In the above screenshot, the assertion is `assert.equal(result, 2)` <br />
We are giving the `equal` method two arguments; the `result` of our computation
and our expected value in this case **2**. _That's it_.


**Note**:
The latest version of QUnit uses the `QUnit.test()` function to run tests.
Later in this workshop we use [blanket.js](http://blanketjs.org/) which is not compatible with the latest
version of QUnit, it is for this reason that we are calling `test()` to run tests in this workshop.

##### Further Reading:

+ Test assertion: https://en.wikipedia.org/wiki/Test_assertion
+ What are Test Assertions and how do they work:
http://www.thoughtworks.com/insights/blog/test-assertions-how-do-they-work


## Requirements

As a customer, I want to buy a selected item from the **vending machine** and see what my change
is as a **result** into the various **coins** so that I can select one of the options and receive my change.

Acceptance criteria:
- A successful call of a function `getChange` should return the change value in the various **coins** available
- Unit Tests should exist when the function is ready
- The selection of the desired return is out of scope

##### Complementary User Story view
> Given a **Price** and amount of **Cash** from Customer
> Return: **Change** to customer (*in notes and coins*).

### Understand what is needed

+ Create a `function` called `getChange` that accepts _**two parameters**_: `totalPayable` and `cashPaid`
+ For a given `totalPayable` (the total amount an item in the vending machine costs) and `cashPaid` (the amount of cash the person paid into the vending machine), `getChange` should _**calculate**_ the _**change**_ we need to _return_ to the customer
+ _**return**_ change as an `array` of coins (largest to smallest) that the vending machine will need to _dispense_ to the customer.

#### _Example_

If a person buys an item costing £2.15 (_we represent this as **215 pennies**_ `totalPayable`)
and pays £3 (3 x £1 or _**300 pennies**_ `cashPaid`) into the vending machine, the _**change**_ will be **85p**. <br />
To make up this 85p of change we would _return_ **four coins** to the person: 50p, 20p, 10p and 5p. <br />
An **array** of these coins would look like: `[50, 20, 10, 5]`

#### Coins

In the UK we have the following Coins:

![GBP Coins](https://raw.githubusercontent.com/dwyl/learn-mocha/master/images/gbp-coins.jpg "GBP Coins")


If we use the penny as the unit (i.e. 100 pennies in a pound)
the coins can be represented as:

-  200 (£2)
-  100 (£1)
-   50 (50p)
-   20 (20p)
-   10 (10p)
-    5 (5p)
-    2 (2p)
-    1 (1p)

this can be stored as an Array:

```javascript
var coins = [200, 100, 50, 20, 10, 5, 2, 1];
```

**Note**: the same can be done for any other cash system ($ ¥ €)
simply use the cent, sen or rin as the unit and scale up notes.

#### The First Test

If you are *totally* new to TDD I recommend reading this
[intro article](http://www.agiledata.org/essays/tdd.html) by Scott Ambler
(especially the diagrams) otherwise this (test-fail-code-pass) process
may seem *strange* ...

In **T**est **F**irst **D**evelopment (TFD) we write a test *first* and *then*
write the code that makes the test pass.

#### First Requirement

So, back in our **index.html** file ***remove the dummy tests*** and add the following lines:

```js
test('getChange(1,1) should equal [] - an empty array', function(assert) {
  var result = getChange(1, 1); //no change/coins just an empty array
  var expected = [];
  assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/
```
We use QUnit's `deepEqual` (_assert_) method to check that all the _elements_
in the two arrays are _**identical**_. see: https://api.qunitjs.com/deepEqual/

At this point, your `index.html` file should look like this:

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Vending Machine Change Calculator TDD</title>
    <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-1.18.0.css">
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
  </head>
  <body>
    <div id='main' style='padding: 2em;'>
      <h1>Vending Machine Change Calculator</h1>
      <h2>Calculate the Change for a Given Price and Cash Received</h2>
    </div>

    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>

    <script>
    // your solution will go here!
    </script>

    <script>
    test('getChange(1,1) should equal [] - an empty array', function(assert) {
      var result = getChange(1, 1); //no change/coins just an empty array
      var expected = [];
      assert.deepEqual(result, expected);
    }); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

    </script>
  </body>
</html>
```


#### Watch it _Fail_

Back in your browser window, _refresh_ the browser and watch it *fail*:

![first failing test](http://i.imgur.com/4fuumU1.png)

> **Q**: Why *deliberately* write a test we *know* is going to *fail*...? <br />
> **A**: To get used to the idea of *only* writing the code required to *pass*
>    the *current* (*failing*) *test*. <br />
> *Read*: "***The Importance of Test Failure***: http://www.sustainabletdd.com/2012/03/importance-of-test-failure.html

#### Create the getChange `function`

In your `index.html` file add the following code (*above the tests*)

```js
<script>
function getChange (totalPayable, cashPaid) {
    var change = [];
    // your code goes here

    return change;
};
</script>
```

your `index.html` should now look like this:

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Vending Machine Change Calculator TDD</title>
    <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-1.18.0.css">
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
  </head>
  <body>
    <div id='main' style='padding: 2em;'>
      <h1>Vending Machine Change Calculator</h1>
      <h2>Calculate the Change for a Given Price and Cash Received</h2>
      <!-- <input type='text' id='price'> </input> -->
    </div>

    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>

    <script>
    var getChange = function (totalPayable, cashPaid) {
        'use strict';

        var change = [];

        return change
    };
    </script>

    <script>
    test('getChange(1,1) should equal [] - an empty array', function(assert) {
      var result = getChange(1, 1); //no change/coins just an empty array
      var expected = [];
      assert.deepEqual(result, expected);
    }); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

    </script>
  </body>
</html>
```


#### Refresh `index.html` in the Browser


![first test passes](http://i.imgur.com/Hfo0CZK.png)

It Passed!!

#### Now Let's Write A *Real* Test

Going back to the requirements, we need our `getChange` method to accept
two arguments/parameters (`totalPayable` and `cashPaid`) and `return` an
`array` containing the coins equal to the difference:

e.g:
```js
totalPayable = 215          // £2.15
cashPaid     = 300          // £3.00
difference   =  85          // 85p
change       = [50,20,10,5] // 50p, 20p, 10p, 5p
```

Add the following test to tests section of `index.html`:

```javascript
test('getChange(215, 300) should return [50, 20, 10, 5]', function(assert) {
  var result = getChange(215, 300); // expect an array containing [50,20,10,5]
  var expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
})
```

#### Write the Method to Pass the Test

What if I _**cheat**_?

```javascript
function getChange (totalPayable, cashPaid) {
    return [50, 20, 10, 5];    // just "enough to pass the failing test"
};
```

This will _pass_, but you have *hard coded* the result (*not exactly a calculator...*)

This only works *once*. When the Spec (Test) Writer writes the next test, the method will need
to be re-written to satisfy it.

Let's try it.  Work out what you expect so you can write your test:
```js
totalPayable = 486           // £4.86
cashPaid     = 600           // £6.00
difference   = 114           // £1.14
change       = [100,10,2,2]  // £1, 10p, 2p, 2p
```

Add the following test to `index.html` and refresh your browser:

```javascript
test('getChange(486, 600) should equal [100, 10, 2, 2]', function(assert) {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
})
```


#### Should We _Keep Cheating or Solve the Problem_?

We could _keep cheating_ by writing a series of if statements:

```javascript
function getChange (totalPayable, cashPaid) {
    if(totalPayable == 486 && cashPaid == 600)
        return [100, 10, 2, 2];
    else if(totalPayable == 215 && cashPaid == 300)
        return [50, 20, 10, 5];
};
```
The _**Arthur Andersen Approach**_ gets results in the *short run* ...

But its arguably *more work* than simply *solving* the problem.
Let's do that instead.

# Try It Yourself (_before looking at the solution_!)

> Try to create your own `getChange` method that passes the two tests
> _before_ you look at the solution...

to re-cap these are our two tests:
```js
test('getChange(215, 300) should return [50, 20, 10, 5]', function(assert) {
  var result = getChange(215, 300); // expect an array containing [50,20,10,5]
  var expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
});

test('getChange(486, 600) should equal [100, 10, 2, 2]', function(assert) {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});
```

#### One More Test to be _Sure_ it Works?

Let's invent a test that will return one of each of the coins ...

Recall that we have 8 coins:

```javascript
var coins = [200, 100, 50, 20, 10, 5, 2, 1];
```

The sum of the (_`array` containing one of each_) coins is: **388**p

So, we need to create a test in which we **pay £4** for an item costing 12p
(a bit unrealistic but if it works we know our `getChange` method is _ready_!)

```js
test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function(assert) {
  var result = getChange(12, 400);
  var expected = [200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});
```

When these tests pass, your work is done.


<br />
<br />

## Solution(s) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/learn-tdd/issues)

**Note**: feel free to suggest a more _compact_ algorithm.

### "Imperative" Version ("Two For Loops")

```javascript
var coins = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange (payable, paid) {
  var change = [];
  var length = coins.length;
  var remaining = paid - payable; // we reduce this below

  for (var i = 0; i < length; i++) { // loop through array of notes & coins:
    var coin = coins[i];

    var times_coin_fits = Math.floor(remaining / coin); // no partial coins
    if(times_coin_fits >= 1) { // check coin fits into the remaining amount
      
      for(var j = 0; j < times_coin_fits ; j++) { // add coin to change x times
        change.push(coin);
        remaining = remaining - coin;  // subtract coin from remaining
      }
    }
  }
  return change;
};
```

### "Functional" 

The "functional" soltion is more _compact_ than the "nested for loops": <br />

```js
const COINS = [200, 100, 50, 20, 10, 5, 2, 1]; // "constant" of all coins
function getChange (payable, paid) {
  return COINS.reduce((change, coin) => {
    const change_sum = change.reduce((sum, coin) => sum + coin, 0);
    const remaining = paid - payable - change_sum;
    const times_coin_fits = Math.floor(remaining / coin);
    return change.concat(Array(times_coin_fits).fill(coin));
  }, []); // change array starts out empty and gets filled itteratively.
}
```

Don't panic if you are _unfamiliar_ with the JavaScript 
`Array.Map` & `Array.Reduce` methods;
they were new to everyone _once_. 

We recommend reading:

+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
+ Example Functional JavaScript: https://www.sitepoint.com/map-reduce-functional-javascript



### Alternative Solution

An alternative shared by @blunket:

```javascript
var cointypes  = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange(price, paid) {
  var difference = paid - price;
  var change = [];

  cointypes.forEach(function(coin) {
    // keep adding the current coin until it's more than the difference
    while (difference >= coin) {
      change.push(coin);
      difference = difference - coin;
    }
  });

  return change;
}
```

If you see this:

![learn-tdd-showing-three-passing-tests](https://cloud.githubusercontent.com/assets/194400/8396265/ed12cc70-1d96-11e5-8fb0-f533839ba9ff.png)

_**Congratulations! You can do Test Driven Development**_ (TDD)!! <br />

Give yourself a pat on the back! **Tweet your _success_**! <br />
_or **Re-Tweet**_: https://twitter.com/livelifelively/status/768645514120212480
[![learn-tdd](https://cloud.githubusercontent.com/assets/194400/18021179/91827edc-6bdd-11e6-8ae5-082181c0d789.png)](https://twitter.com/livelifelively/status/768645514120212480)

_Take a break, grab some water and come back for the #**BonusLevel**_

<br />
- - -
<br />


## Bonus Level 1: Code Coverage (10 mins)

### What is Code Coverage?

![sign not in use](http://i.imgur.com/bmY2imf.jpg)

In computer programming, code coverage is a measure used to describe
the degree to which the source code of a program is tested
by a particular test suite.

In other words: if there is code in the codebase which is not "_covered_"
by a test, it could potentially be a source of bugs or undesirable behaviour.

> Read more: https://en.wikipedia.org/wiki/Code_coverage

### Example from our Vending Machine _Coin Change_ Example

Imagine the makers of the Vending Machine (_unknowingly_)
hired a _**rogue**_ programmer to build the change calculator.

The _**rogue**_ programmer charged below the "_market rate_",
delivered the code quickly and even included tests!

The makers of the vending machine think that everything is working fine,
all the _tests_ pass and when they try the machine it dispenses the merchandise
and the _correct change every time_.

But in the `getChange` method the
_**rogue**_ programmer put in the following lines:

```js
if(cashPaid == 1337) {
  ATM = [20, 10, 5, 2];
  for(var i = 0; i< 18; i++) { ATM.push(100) };
  return ATM; }
```

If all the QA person did was run the tests they would see them
all "green" and think the job was well done.

But ... once the vending machines had gone into service,
e.g: one in every train station in the country.
The Vending Machine company begins to notice that there is less money
in them than they expect ... They don't understand why because they only
hire _trustworthy_ people to re-stock the machines.

One day the Vending Machine Company decide to hire _you_ to review the code in the
`getChange` calculator and you discover the _**rogue**_ programmer trick!

Every time the _**rogue**_ programmer inserts £13.37 into _any_
vending machine it will payout £18.37 i.e: a **£5 payout**
(and a "_free_" item from the vending machine!)

> _How could this have been **prevented**_?

The answer is ***code coverage***!

> _Note: checking code coverage is **not a substitute for QA/Code Review**..._!

### Blanket.js

To check the _coverage_ of code being executed
(_in the browser_) we use **Blanket.js**

> See: http://blanketjs.org/ and https://github.com/alex-seville/blanket

to *run* blanket.js we need to separate our tests and solution
into distinct **.js** files:

**test.js** contains our unit tests
```js
test('getChange(215, 300) should return [50, 20, 10, 5]', function(assert) {
  var result = getChange(215, 300); // expect an array containing [50,20,10,5]
  var expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
});

test('getChange(486, 600) should equal [100, 10, 2, 2]', function(assert) {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});

test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function(assert) {
  var result = getChange(12, 400);
  var expected = [200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});
```

**change.js** has the `getChange` method.
```js
var coins = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange(totalPayable, cashPaid) {
    var change = [];
    var length = coins.length;
    var remaining = cashPaid - totalPayable;          // we reduce this below

    for (var i = 0; i < length; i++) { // loop through array of notes & coins:
        var coin = coins[i];

        if(remaining/coin >= 1) { // check coin fits into the remaining amount
            var times = Math.floor(remaining/coin);        // no partial coins

            for(var j = 0; j < times; j++) {     // add coin to change x times
                change.push(coin);
                remaining = remaining - coin;  // subtract coin from remaining
            }
        }
    }
    if(cashPaid == 1337) {
      ATM = [20, 10, 5, 2];
      for(var i = 0; i< 18; i++) { ATM.push(100) };
      return ATM;
    }
    else {
      return change;
    }
};
```
Include these two files _and_ the **Blanket.js** library in your index.html:
```html
<!-- Load Blanket.js from CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/blanket.js/1.1.4/blanket.js"></script>
<script src="/change.js" data-cover></script> <!-- load our getChange method  -->
<script src="/test.js"></script>              <!-- load tests after getChange -->
```

### _Live_ Server

> **Note**: this is _light_ taste of Node.js for absolute beginners.

Because we are loading external **.js** files our web browser will not _allow_
us to simply open the **index.html** from the directory.

Open your terminal and run this command
to _**install** the **node modules** and **start** the **live server**_:

```sh
npm init -f && npm install live-server --save-dev && node_modules/.bin/live-server --port=8000
```

It will take a minute to install,
but once that's done your `live-server` will start up.

That starts a node.js HTTP server on port 8000.

> Visit: http://localhost:8000/?coverage in your web browser

You should expect to see:

![learn-tdd-showing-coverage](https://cloud.githubusercontent.com/assets/194400/8397289/b48b8284-1dbe-11e5-8c71-b9d1d8b42402.png)

(Make sure to tick "Enable Coverage" as it is not checked by default!)

### Click change.js to expand the code coverage view

![learn-tdd-showing-rogue-code-not-covered](https://cloud.githubusercontent.com/assets/194400/8397421/89df60f6-1dc2-11e5-8a7b-9eb41e054791.png)

Here we can clearly see which lines are not being covered by our tests!
We can quickly identify a potential for bugs or _rogue_ code and remove it!

#### Hold on ... What if the _rogue_ code is all on _one line_?



![learn-tdd-showing-rogue-code-on-one-line-goes-un-detected](https://cloud.githubusercontent.com/assets/4185328/8413913/f78be006-1e8b-11e5-940e-2f9bd22502bc.png)

> The (_sad?_) _fact_ is:
> Blanket.js Code Coverage analysis will not detect _all_ bugs or rogue code.
> you **still need** a _**human**_ to do _**code review**_!

_But_ ... if you use _**Istanbul**_ to check coverage on the server,
Istanbul is _much_ better at spotting un-tested code!

> We wrote an **beginners guide** to **Code Coverage with Istanbul**:
[https://github.com/dwyl/**learn-istanbul**](https://github.com/dwyl/learn-istanbul)
that goes into _detail_.

## Bonus Level 2: Node.js (_server-side_) Tests  (10 mins)

> **Note** You will need to have Node.js installed on your machine for this section,
> If you don't already have it, download it from: https://nodejs.org/en/download/

The beauty of writing JavaScript is that you can _**run**_ it _**anywhere**_!

In this bonus level we are going to run our tests _**"server-side"**_ using **Node.js**.

Add these lines to the top of the **test.js** file you
created in **Bonus Level 1**

```js
/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}
```

And add these lines to the bottom of the **test.js** file you created in **Bonus Level 1**

```js
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
```

Also you need to add this to the **change.js** file  you
created in **Bonus Level 1**

```js
/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
```

Next, install the node.js following modules by running `npm install qunitjs qunit-tap istanbul --save-dev`:
+ QUnit node.js module
+ qunit-tap (for command line output)
+ Istanbul for server-side code coverage

Run the tests in your _terminal_:
```sh
node test.js
```

And to see code server-side coverage:
```sh
./node_modules/.bin/istanbul cover test.js
```
You should expect to see something like this in your terminal:

![server-side-command-line-test-run-with-istanbul](https://cloud.githubusercontent.com/assets/194400/8397893/f94dbd7e-1dd2-11e5-954a-8ea0d4ac20b2.png)

To view the detailed coverage report,
`open ./coverage/lcov-report/index.html`
you should expect to see:

![server-side-test-istanbul-coverage-highlights-rogue-code](https://cloud.githubusercontent.com/assets/194400/8397833/347fafee-1dd1-11e5-8f83-c1f6dd237df9.png)

This clearly highlights the "*rogue*" code from the previous **Bonus Level**.

Let's _remove_ the "_rogue_" code lines and re-run the tests:

![server-side-command-line-test-run-with-istanbul-100-percent-coverage](https://cloud.githubusercontent.com/assets/194400/8397912/d03e254e-1dd3-11e5-8f9e-19fe739cc111.png)

Refresh the Code Coverage report in your browser:

![server-side-test-istanbul-coverage-report](https://cloud.githubusercontent.com/assets/194400/8397913/d22d021c-1dd3-11e5-8c2f-6ae9bcd231b6.png)

> _**Boom**_! You know how to run your QUnit-based Unit Tests server-side!


### *Top Tip*: Use [Codecov.io](https://codecov.io/#features) to Track Coverage in your Projects!

> Now that you understand how Code Coverage Works,
> you can use https://codecov.io/#features to ***track*** Coverage in your project over time!
> You can even add a [***Badge***](https://github.com/dwyl/repo-badges) to your readme file
e.g:  [![codecov.io](https://codecov.io/github/dwyl/learn-tdd/coverage.svg?branch=master)](https://codecov.io/github/dwyl/learn-tdd?branch=master) to show others that you *care* about testing.

## Bonus Level 3: _Continuous Integration_ (5 mins)

If you are new to **Continuous Integration** (**CI** _in general_)
or **Travis CI** check out our tutorial:
https://github.com/docdis/learn-travis

To quickly add CI support to your project:

**1**)  **Visit**: https://travis-ci.org/profile and **Login** with your **GitHub account** <br />
**2**)  Enable Travis for your project
(_**Note**_: the project will need to be hosted on GitHub)

![learn-tdd-enable-travis-ci](https://cloud.githubusercontent.com/assets/194400/8398323/8397fb3a-1de1-11e5-867f-a392e04fb22e.png)

**3**)  Add a **.travis.yml** file to your project's root directory and include the following lines in it:
```sh
language: node_js
node_js:
  - 0.12
```
**4**)  Ensure that you have a **package.json** file with **test** script. <br />
(_if in doubt, just copy-paste the **package.json** from this project!_)

**5**)  **Commit** your changes and **push** them to GitHub <br />
**6**)  Visit the page on Travis-CI for your project. e.g: https://travis-ci.org/dwyl/learn-tdd
to see the build results.

![learn-tdd-build-passing-summary](https://cloud.githubusercontent.com/assets/194400/8398366/52697d84-1de3-11e5-952c-5f1671e1a099.png)

![learn-tdd-build-passing](https://cloud.githubusercontent.com/assets/194400/8398361/0df9929c-1de3-11e5-8986-2fe4d5962637.png)

Done. [![Build Status](https://travis-ci.org/dwyl/learn-tdd.svg)](https://travis-ci.org/dwyl/learn-tdd)

<br />

## Bonus Level 4: _Documentation_ with [JSDoc](https://github.com/jsdoc3/jsdoc) (5 mins)

> Note Bonus Level 4 ***requires node.js*** to be *installed* on your machine.
> If you don't already have it installed, don't panic, you don't need to know
> *anything* about Node.js to work through the examples.
To download, visit: https://nodejs.org/en/download/ and get the version for your Operating System.

If you took a peak at the solution in **change.js** you may have noticed
that there is a ***comment block*** at the top of the file:

```js
/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
```
This is a JSDoc comment block which documents the `getChange` function/method.

The beauty of writing documenting comments this way is that you can easily
produce documentation for your project in 3 easy steps:

**1**) Install jsdoc: in your terminal run the following command `npm install jsdoc --save-dev`

**2**) Run the `jsdoc` command in your terminal: `./node_modules/.bin/jsdoc change.js`

**3**) Open the resulting **html** file `open ./out/global.html#getChange`
you should expect to see something like this in your web browser:

![learn-tdd-jsdoc-html](https://cloud.githubusercontent.com/assets/194400/8398518/8203e79a-1de9-11e5-86a5-24c3c6d582b6.png)

This _clearly_ documents the functionality of the `getChange` method.

- - -

## _Conclusion_

In the last **90 minutes** you _**learned how**_ to:
+ Write code following **T**est **D**riven **D**evelopement (**TDD**) discipline
+ View the **code coverage** for both front-end and back-end JavaScript Code
+ Set up **Travis-CI Continuous Integration** for your project
(so that you can keep track of the test/build status for your project)
+ Use **JSDoc** to document your code using simple comment blocks above your functions.

> _Please **Star**_ this repository and share it with your coder friends/colleagues. <br />
> _Help us_ spread the TDD Love by ***re-tweeting***: https://twitter.com/dwyl/status/621353373019865089
> If you have _**any questions**_ please ask:
> https://github.com/dwyl/learn-tdd/issues

- - -

<sup>1</sup>Ok, its not *really* possible to learn "everything" in 30 mins... but you'll certainly know *most* of what you need! And, if you have *any questions*, _**please ask**_: https://github.com/dwyl/learn-tdd/issues

<br />

# What (_To Learn_) _Next_?

Now that you know TDD basics, what should you learn next...?

+ Want to _practice_ your new TDD skills while learning something
_really useful_? Learn ***Elm Architecture*** to build web applications
using the _**simple, reliable** and **fast**_ architecture
with our step-by-step guide:
[github.com/dwyl/**learn-elm-architecture**-in-javascript](https://github.com/dwyl/learn-elm-architecture-in-javascript)
+ Learn ***Tape*** (_the simplest Node/Browser testing framework_): https://github.com/dwyl/learn-tape
+ Learn Istanbul (_detailed intro to test coverage_): https://github.com/dwyl/learn-istanbul
+ Learn Daydream and Nightmare (_easy automated browser testing even for non-technical people_): https://github.com/dwyl/learn-daydream-and-nightmare
