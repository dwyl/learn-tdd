# Learn TDD

A brief introduction to Test Driven Development (TDD) in JavaScript

## Why?

Have you ever felt like your code/project is stuck together with *duck tape*?

![duck tape car fail](http://i.imgur.com/e3BaZHt.png)

Change one part and the other stops working?

Would you rather everything was consistent and beutifully integrated?

![formula 1 pit stop](http://i.imgur.com/2euxKGA.jpg)

Test Driven Development (TDD) makes your team a well-oiled machine which allows you to go faster.

Once your team has a ***suite*** of tests that run on every change, you will
begin to develop a whole other level of ***confidence*** in codebase
and will discover a new freedom to be ***creative*** without fear of
"*breaking*" anything else; truly *game-changing*.


## What?

Get started with **T**est **D**riven **D**evelopment *today*!  
In the next ***30 minutes*** you will learn _everything_<sup>1</sup> you need to know to write tests for your web project!

### Pre-Requisites

+ **A computer** with a web browser
+ **Internet access** to download the starter files
+ **30 minutes** of time
+ **_Basic_ Programming Skills** (HTML & JavaScript)

## How?

The *first* thing you need to learn is that developing following TDD (*discipline*) is a (*slightly*) different approach from simply diving into solving the solution (wihout a test).

You will hear the expression: "***Red, Green, Refactor***":

![TDD Cycle: Red, Green, Refactor](http://i.imgur.com/RQe2NQT.jpg)

What this means is that there's a **3-step process**:

1. ***Write*** a **Failing Test** - Understand the (user) requirements/story well enough to write a test for what you expect. (_the test should **fail** initially - hence it being "Red"_)  

2. ***Make*** the (*faling*) **Test Pass** - Write (*only*) the code you need
to make the (*failing*) test pass, while ensuring your existing/previous tests
all still pass (*no regressions*).

3. ***Refactor*** the code *you* wrote - if you have time to tidy up the code
*you* wrote to make it simpler (*for your future self or colleagues to undersand*) before you need to ship the current feature, do it.

To develop the *habit(s)* you will need to be successful with TDD (*and software engineering in general*)
we need to ***write*** our ***test(s) first*** (*and watch them fail*) and *then* write the code require to make the test pass.

Writing a failing test, before writing the code may seem *counter-intuitive* at first.  
But we urge you to think of it this way:

> The ***test*** is the ***question*** you are asking  
> your code is the ***answer*** to the question.  

### Scenario

![vending machine](http://i.imgur.com/HbwMqDa.jpg)

We are building a **Vending Machine** that allows people to buy any item.
It takes notes and coins (*we'll build the BitCoin module next time!*)
and must calculate the change to be returned to the customer given the **Price**
of the Item and the **Amount** of cash given.

### Requirements

+ Calculate the change in notes and coins for a given **item price** and
+ Return an array of the largest notes/coins required as change


## Practical


### Single *File* App

We will build the entire tutorial/project in a single file: **index.html**


Create a project on your machine called **vending-machine**:

```sh
mkdir vending-machine && cd vending-machine
```

Then create a file called **index.html**

Copy-paste the following *sample code* to get started:

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
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>
    <script>

test('This dummy test should always pass!', function(assert){
  assert.ok(true===true); // just so we know everything loaded ok
});

test('This is what a failing test looks like!', function(assert){
  assert.equal(-1, [1,2,3].indexOf(1)); // we *expect* this to fail
});

    </script>
  </body>
</html>

```

#### Open index.html in your Browser

When you ***open*** `index.html` in your ***favorite web browser***
(*the one with the* ***foxy icon***)
you should expect to see:

![initial index.html view](http://i.imgur.com/dBXH59w.png)

#### Basic Requirements

> Given a **Price** and amount of **Cash** from Customer
> Return: **Change** to customer (*in notes and coins*).

Essentially we are building a *simple* **calculator** that *only does* **subtraction**
(Price - Cash = Change), but also splits the **result** into the various **notes & coins**.

In the UK we have the following Notes & Coins:

![GBP Notes](https://raw.github.com/nelsonic/learn-mocha/master/images/gbp-notes.jpg "GBP Notes")
![GBP Coins](https://raw.github.com/nelsonic/learn-mocha/master/images/gbp-coins.jpg "GBP Coins")

see: http://en.wikipedia.org/wiki/Banknotes_of_the_pound_sterling
(technically there are also £100 and even £100,000,000 notes,
but these aren't common so we can leave them out. ;-)

If we use the penny as the unit (i.e. 100 pennies in a pound)
the notes and coins can be represented as:

- 5000 (£50)
- 2000 (£20)
- 1000 (£10)
-  500 (£5)
-  200 (£2)
-  100 (£1)
-   50 (50p)
-   20 (20p)
-   10 (10p)
-    5 (5p)
-    2 (2p)
-    1 (1p)

this can be represented as an Array:

```javascript
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
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

so, back in our **index.html** file ***remove the dummy tests*** and add the following lines:

```js
test('getChange(1,1) should equal []', function(){
    deepEqual(getChange(1,1), []);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/
```

#### Watch it Fail

Back in your browser window, refresh the browser and watch it *fail*:

![first failing test](http://i.imgur.com/4fuumU1.png)

> **Q**: Why *deliberately* write a test we *know* is going to *fail*...? <br />
> **A**: To get used to the idea of *only* writing the code required to *pass*
>    the *current* (*failing*) *test*.


#### Create the getChange `function`

In your index.html file add the following code (*above the tests*)

```js
<script>
var getChange = function (totalPayable, cashPaid) {
    'use strict';

    var change = [];

    return change
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
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>

    <script>
    var getChange = function (totalPayable, cashPaid) {
        'use strict';

        var change = [];

        return change
    };
    </script>

    <script>
    test('getChange(1,1) should equal []', function(){
        deepEqual(getChange(1,1), []);
    }); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

    </script>
  </body>
</html>
```



#### Refresh `index.html` in the Browser


![first test passes](http://i.imgur.com/Hfo0CZK.png)

It Passed!!

#### Now Lets Write A Real Test

Going back to the requirements, we need our getChange method to accept
two arguments/parameters (**totalPayable** and **cashPaid**) and return an
array containing the coins equal to the difference:

e.g:
```
totalPayable = 210         // £2.10
cashPaid     = 300         // £3.00
dfference    =  90         // 90p
change       = [50,20,20]  // 50p, 20p, 20p
```

Add the following test to tests section of `index.html`:

```javascript
test('getChange(210,300) should return [50,20,20]', function(){
    deepEqual(getChange(210,300), [50,20,20]);
})
```

#### Write the Method to Pass the Test

What if I cheat?

```javascript
var getChange = function (totalPayable, cashPaid) {
    'use strict';
    return [50, 20, 20];    // just enough to pass :-)
};
```

This will pass, but do you have *hard coded* the result (*not exactly a calculator...*)

This only works *once*. When the Spec (Test) Writer writes the next test, the method will need
to be re-written to satisfy it.

Lets try it.  Work out what you expect:
```
totalPayable = 486           // £4.86
cashPaid     = 1000          // £10.00
dfference    = 514           // £5.14
change       = [500,10,2,2]  // £5, 10p, 2p, 2p
```

Add the following test to `index.html` and refresh your browser:

```javascript
test('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    deepEqual(getChange(486,1000), [500, 10, 2, 2]);
})
```


#### Keep Cheating or Solve the Problem?

We could keep cheating by writing a series of if statements:

```javascript
var getChange = function (totalPayable, cashPaid) {
    'use strict';
    if(totalPayable == 486 && cashPaid == 1000)
        return [500, 10, 2, 2];
    else if(totalPayable == 210 && cashPaid == 300)
        return [50, 20, 20];
};
```
The *Arthur Andersen Approach* gets results in the *short run*...

But its arguably *more work* than simply *solving* the problem.
Lets do that instead.

(**Note**: this is the *readable* version of the solution! feel free to suggest a more compact algorithm)

```javascript
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
var getChange = function (totalPayable, cashPaid) {
    'use strict';
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
    return change;
};
```

Add one more test to ensure we are *fully* exercising our method:

```
totalPayable = 1487                                 // £14.87  (fourteen pounds and eighty-seven pence)
cashPaid     = 10000                                // £100.00 (one hundred pounds)
dfference    = 8513                                 // £85.13
change       = [5000, 2000, 1000, 500, 10, 2, 1 ]   // £50, £20, £10, £5, 10p, 2p, 1p
```

```javascript
test('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
    deepEqual(getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
});
```


- - -

### Bonus Level

#### Code Coverage

> http://blanketjs.org/

#### Travis

If you are new to Travis CI check out my tutorial:
https://github.com/nelsonic/learn-travis

> Visit: https://travis-ci.org/profile
> Enable Travis for learn-travis project

![Travis Enabled](https://raw.github.com/nelsonic/learn-mocha/master/images/travis-on.png "Travis Enabled")

[![Build Status](https://travis-ci.org/nelsonic/learn-mocha.png?branch=master)](https://travis-ci.org/nelsonic/learn-mocha)

![Travis Build Pass](https://raw.github.com/nelsonic/learn-mocha/master/images/learn-travis-build-passing.png "Travis Build Passing")

Done.

- - -

<sup>1</sup>Ok, its not *really* possible to learn "everything" in 30 mins... but you'll certainly know *most* of what you need!
