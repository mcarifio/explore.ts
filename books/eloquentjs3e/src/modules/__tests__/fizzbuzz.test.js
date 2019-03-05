import test from 'ava';
import { translate, fizzbuzzify, range } from '../fizzbuzz.mjs';


test(`always succeeds`, (t) => {
  // expect(true).toBe(true);
  t.pass('always succeeds');
});

test(`empty range`, (t) => {
    let r = range(1, 0);
    t.is(r.length, 0)
});

test(`empty range has no values with start > stop`, (t)=> {
    let r = range(1, 0);
    // TODO mike@carif.io: how does jest compare Array contents?
    t.is(r.length, 0);
});

