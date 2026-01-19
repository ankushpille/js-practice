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

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function findGcdOfArray(a) {
  if (a.length < 0) return 0;
  if (a.length === 1) return a[0];

  let g = gcd(a[0], a[1]);
  for (let e of a) {
    g = gcd(g, e);
  }

  return g;
}
var hasGroupsSizeX = function (deck) {
  let freq = {};
  for (let e of deck) {
    freq[e] = (freq[e] ?? 0) + 1;
  }
  let vals = [...Object.values(freq)];
  let g = findGcdOfArray(vals);
  return g > 1;
};

var minimumBoxes = function (apples, capacities) {
  let appleCount = apples.reduce((sum, x) => sum + x, 0);
  capacities.sort((a, b) => b - a);

  let usedBoxes = 0;
  while (appleCount > 0) {
    let boxCap = capacities.shift();
    usedBoxes++;
    if (appleCount > boxCap) {
      appleCount -= boxCap;
    } else {
      appleCount = 0;
    }
  }

  return usedBoxes;
};

var minimumChairs = function (s) {
  let stack = [];
  let max = 0;

  for (let ch of s) {
    if (ch === "E") {
      stack.push(ch);
      max = Math.max(max, stack.length);
    } else if (ch === "L") {
      stack.pop();
    }
  }

  return max;
};

var addDigits = function (num) {
  while (1) {
    let s = "" + num;
    if (s.length === 1) break;

    let sum = 0;
    for (let ch of s) {
      sum += +ch;
    }

    num = sum;
  }

  return num;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0;
  let count = 0;
  for (let e of nums) {
    if (e % 2 === 0) {
      if (e % 3 === 0) {
        sum = sum + e;
        count = count + 1;
      }
    }
  }
  if (count === 0) return 0;
  let average = sum / count;
  return Math.trunc(average);
};

var arrangeCoins = function (totalMoney) {
  let sum = 0;

  for (let d = 1; ; d++) {
    sum += d;

    if (sum > totalMoney) {
      return d - 1;
    }
  }
};

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};
