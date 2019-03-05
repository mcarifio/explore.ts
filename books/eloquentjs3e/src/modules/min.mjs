// let jest = require('jest');


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Rest_parameters
// export
function min(...rest) {
  let result = rest[0];
  // Don't use 'in', it's very confusing.
  for (const r of rest.slice(1)) {
    if (r < result) result = r;
  }
  return result;
}

// TODO, is there a more elegant style for this? Don't want to invest time in require given `import something from 'somewhere''
// module.exports = {
//     min: min,
// };

// usage: import { min } from 'min.mjs';
export { min };

