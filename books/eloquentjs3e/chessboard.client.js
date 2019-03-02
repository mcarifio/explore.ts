let vorpal = require('vorpal')();
let cb = require('./chessboard');

// console.log(range(1,100));
let b = cb.board(8,8);
console.log(cb.toString(b));
