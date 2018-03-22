// eloquent 3e, chess board problem


// board generates a chess board, where black is `character` default `#`.
// The board remains an Array, toString() will generate the right string.
function board(rows, cols, character = '#') {
    let result = new Array(rows);
    for (let i = 0; i < rows; ++i) {
        let div = i % 2;
        result[i] = new Array(cols);
        for (let j = 0; j < cols; ++j) {
            if (j % 2 === div) {
                result[i][j] = character;
            } else {
                result[i][j] = ' ';
            }
        }
    }
    return result;
}

function toString(b) {
    let result = '';
    for (let i = 0; i < b.length; ++i) {
        result += b[i].join('') + "\n";
    }
    return result;
}

module.exports = {
    board: board,
    toString: toString
};
