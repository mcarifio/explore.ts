let cb = require('./chessboard');


describe('always true', () => {
    it('always succeeds', function() {
        expect(true).toBe(true);
    });
});

describe('create a board', ()=> {
    it('that is 8x8', () => {
        let board = cb.board(8, 8);
        // how do i test output contents?
        expect(board[0][0]).toBe('#');
        expect(board.length).toBe(8);
        for (let i = 0; i < board.length; ++i) {
            expect(board[i].length).toBe(8);
        }
    });
});

