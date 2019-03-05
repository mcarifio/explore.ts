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

// usage: import { min } from 'min.mjs';
export { min };

