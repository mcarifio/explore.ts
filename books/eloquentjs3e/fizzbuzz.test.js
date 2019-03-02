let fb = require('./fizzbuzz');


describe('always true', () => {
    it('always succeeds', function() {
        expect(true).toBe(true);
    });
});

describe('empty range', ()=> {
    it('has no values when start > stop', () => {
        let r = fb.range(1, 0);
        // TODO mike@carif.io: how does jest compare Array contents?
        expect(r.length).toBe(0);
    });
});

