/*** If you prefer to separate your code into different files you can create a test.js ***/

  test('This sample test should always pass!', function(assert) {
    var result = 1 + 1;
    assert.equal(result, 2);
  });

  // A failing test will be RED:
  test('This is what a failing test looks like!', function(assert) {
    var result = [1,2,3].indexOf(1);  // this should be 1
    assert.equal(result, -1); // we *EXPECT* this to fail
  });
