// Translate integer i to 'fizz', 'buzz', 'fizzbuzz' or itself depending on divisibility rules.
function translate(i) {
    if (i % 15 == 0) return 'fizzbuzz';
    if (i % 3 == 0) return 'fizz';
    if (i % 5 == 0) return 'buzz';
    return i;
}

// Given an array of numbers in any order, return the translation of each entry based on `translate` rules.
function fizzbuzzify(ar /* array of numbers */) {
    let result = Array();
    for (let n of ar) {
        result.push(translate(n));
    }
    return result;
}

// https://stackoverflow.com/questions/36947847/how-to-generate-range-of-numbers-from-0-to-n-in-es2015-only
function range(start, stop) {
    return [...Array(1 + stop - start).keys()].map((v) => v + start);
}

export { translate, fizzbuzzify, range };
