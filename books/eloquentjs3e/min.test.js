let min = require('./min').min;


describe('always true', () => {
    it('always succeeds', function() {
        expect(true).toBe(true);
    });
});

describe('min', ()=> {
    it('of single item is the item', () => {
        let item = 1;
        let m = min(item);
        expect(m).toBe(item);
    });
});

describe('min', ()=> {
    it('of two items same as Math.min', () => {
        let smallest = -1, item = smallest + 1;
        let m = min(smallest, item);
        expect(m).toBe(smallest);
        expect(m).toBe(Math.min(smallest, item));
    });
});

describe('min', ()=> {
    it('with a negative number', () => {
        let smallest = -1, item = smallest + 1;
        let m = min(smallest, item, item, item);
        expect(m).toBe(smallest);
        expect(m).toBe(Math.min(smallest, item));
        m = min(item, smallest, item, item);
        expect(m).toBe(smallest);
        expect(m).toBe(Math.min(smallest, item));
    });
});
