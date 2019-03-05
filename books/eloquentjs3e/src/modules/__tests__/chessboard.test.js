import test from 'ava';
import { board, toString } from '../chessboard.mjs';


test(`always succeeds`, (t) => {
  // expect(true).toBe(true);
  t.pass('always succeeds');
});


test(`create an 8x8 board`, (t)=> {
  let b = board(8, 8);
  // how do i test output contents?
  t.is(b[0][0],'#');
  t.is(b.length, 8);
  for (let i = 0; i < b.length; ++i) {
      t.is(b[i].length, 8);
  }
});

