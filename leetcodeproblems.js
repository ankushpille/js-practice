var fizzBuzz = function (n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let s = "";

    if (i % 3 === 0) {
      s += "Fizz";
    }
    if (i % 5 === 0) {
      s += "Buzz";
    }

    if (s === "") {
      s = "" + i;
    }

    res.push(s);
  }

  return res;
};

console.log(fizzBuzz(3));

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;

  while (x !== 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.trunc(x / 10);
  }
  let = [Low, High] = [-(2 ** 31), 2 ** 31 - 1];
  if (rev < Low) return 0;
  if (rev > High) return 0;
  return rev;
};
