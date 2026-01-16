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

var checkPerfectNumber = function (num) {
  let sumOfDivisors = 0;

  for (let d = 1; d < num; d++) {
    if (num % d === 0) {
      sumOfDivisors += d;
    }
  }

  return sumOfDivisors === num;
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
var findGCD = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  return gcd(min, max);
};
