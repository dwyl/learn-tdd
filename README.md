# Learn TDD

A brief introduction to Test Driven Development (TDD) in JavaScript for people who want writer better code.

## Why?

A _project without tests_ often ends up looking like its stuck together with _**duck tape**_ ...

![duck tape car fail](http://i.imgur.com/9cNriGK.jpgÂ)

Change _one_ part and the _other_ stops working? "_Fixing_" one bug, creates another?

Would you *prefer* if everything was ***consistent*** and beautifully integrated?  
What if _everyone_ on your team worked in a disciplined order... like a _**Formula 1 Crew**_ ...

![formula 1 pit stop](http://i.imgur.com/2euxKGA.jpg)

Test Driven Development (TDD) makes your team a well-oiled machine which means you can go _**faster**_.

Once you have a ***suite*** of tests that run on every change, you will
begin to develop a whole other level of ***confidence*** in your codebase
and will discover a new freedom to be ***creative*** without fear of
"*breaking*" anything else; truly *game-changing*.


## What?

This tutorial will help you get started with **T**est **D**riven **D**evelopment (**TDD**) *today*!  
In the next ***30 minutes*** you will learn _everything_<sup>1</sup> you need to know to write tests for your web project!

### Pre-Requisites

+ **A computer** with a web browser
+ **Internet access** to download the starter files
+ **30 minutes** of time
+ **_Basic_ Programming Skills** (HTML & JavaScript)

## How?

The *first* thing you need to *understand* is that writing code following TDD (*discipline*) is a (*slightly*) different approach from simply diving into solving the solution (*wihout a test*).

When reading abut TDD you will see the expression: "***Red, Green, Refactor***":

![TDD Cycle: Red, Green, Refactor](http://i.imgur.com/RQe2NQT.jpg)

What this means is that there's a **3-step process**:

1. ***Write*** a **Failing Test** - Understand the (user) requirements/story well enough to write a test for what you expect. (_the test should **fail** initially - hence it being "Red"_)  

2. ***Make*** the (*faling*) **Test Pass** - Write (*only*) the code you need
to make the (*failing*) test pass, while ensuring your existing/previous tests
all still pass (*no regressions*).

3. ***Refactor*** the code *you* wrote - if you have time to tidy up the code
*you* wrote to make it simpler (*for your future self or colleagues to undersand*) before you need to ship the current feature, do it.

To develop the *habit(s)* you will need to be successful with TDD (*and software engineering in general*)
we need to ***write*** a ***test first*** (*and watch it fail*) and *then* write the code require to make the test pass.

Writing a _**failing test**_, before writing the code may seem *counter-intuitive*, *time consuming* or even "*tedious*" at _**first**_. But we _urge_ you to think of it this way:

> The ***test*** is the ***question*** you are asking  
> your code is the ***answer*** to the question.  
> by having a _clear_ question, you can always check
> that your code is working,  
> because it _**consistently**_
> gives you the same answer(s) ... _no surprises_!

## Practical

### Scenario: Vending Machine _Change Calculator_ Micro-Project

![vending machine](http://i.imgur.com/HbwMqDa.jpg)

Imagine you are building a **Vending Machine** that allows people to buy any item.
The machine accepts coins and calculates the change
to be returned to the customer given the **price**
of the Item and the **cash** received.

### Requirements

+ Create a `function` called `getChange` that accepts _**two parameters**_: `totalPayable` and `cashPaid`
+ For a given `totalPayable` (the total amount a item in the vending machine costs) and `cashPaid` (the amount of cash the person paid into the vending machine), `getChange` should _**calculate**_ the _**change**_ we need to _return_ to the customer
+ _**return**_ change as an `array` of coins (largest to smallest) that the vending machine will need to _dispense_ to the customer.

#### _Example_

If a person buys an item costing £2.15 (_we represent this as **215 pennies**_ `totalPayable`)
and pays £3 (3 x £1 or _**300 pennies**_ `cashPaid`) into the vending machine, the _**change**_ will be **85p**.  
To make up this 85p of change we would _return_ **four coins** to the person: 50p, 20p, 10p and 5p.  
An **array** of these coins would look like: `[50, 20, 10, 5]`

### Single *File* App

We can build the entire "project" in a single file: **index.html**

Create a directory on your computer called **vending-machine**:

In your **terminal** type this command:
```sh
mkdir vending-machine && cd vending-machine
```
(_this will create the directory and move you into it_)

Next create a file called **index.html** e.g: `atom index.html`

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
      <h3>Calculate the change (<em>coins</em>) to return to a customer when they buy something.</h2>
    </div>

    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    <!-- QUnit does not depend on JQUery, but we are using it later so load from CDN -->
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
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
        var result = [1,2,3].indexOf(1);  // this should be 1
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
lets step through it to understand the parts:

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
    <!-- QUnit does not depend on JQUery, but we are using it so load from CDN -->
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
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
        var result = [1,2,3].indexOf(1);  // this should be 1
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

##### Further Reading:

+ Test assertion: https://en.wikipedia.org/wiki/Test_assertion
+ What are Test Assertions and how do they work:
http://www.thoughtworks.com/insights/blog/test-assertions-how-do-they-work


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

#### Now Lets Write A *Real* Test

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
function getChange (totalPayable, cashPaid) {
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
