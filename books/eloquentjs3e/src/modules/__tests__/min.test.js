import test from 'ava';
import { min } from '../min.mjs';

test(`always succeeds`, (t) => {
  // expect(true).toBe(true);
  t.pass('always succeeds');
});


test(`min of single item is the item`, (t) => {
  let singleton = 1;
  let m = min(singleton);
  t.is(m, singleton);
});


test(`min of two items same as Math.min`, (t) => {
  let smallest = -1, item = smallest + 1;
  let m = min(smallest, item);
  t.is(m, smallest);
  t.is(m, Math.min(smallest, item));
});


test(`min with a negative number isn't confused`, (t) => {
  let smallest = -1, item = smallest + 1;
  let m = min(smallest, item, item, item);
  t.is(m, smallest);
  t.is(m, Math.min(smallest, item));
  m = min(item, smallest, item, item);
  t.is(m, smallest);
  t.is(m, Math.min(smallest, item));
});
