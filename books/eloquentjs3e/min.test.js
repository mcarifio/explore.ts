// TODO mike@carif.io: Must be a better to find the module under test, perhaps via the jest config?``
let min = require('./min').min;

test(`always succeeds`, () => {
  expect(true).toBe(true);
});


test(`min of single item is the item`, () => {
  let singleton = 1;
  let m = min(singleton);
  expect(m).toBe(singleton);
  // TODO mike@carif.io: What does `test` return if anything?
});


test(`min of two items same as Math.min`, () => {
  let smallest = -1, item = smallest + 1;
  let m = min(smallest, item);
  expect(m).toBe(smallest);
  expect(m).toBe(Math.min(smallest, item));
});


test(`min with a negative number isn't confused`, () => {
  let smallest = -1, item = smallest + 1;
  let m = min(smallest, item, item, item);
  expect(m).toBe(smallest);
  expect(m).toBe(Math.min(smallest, item));
  m = min(item, smallest, item, item);
  expect(m).toBe(smallest);
  expect(m).toBe(Math.min(smallest, item));
});
